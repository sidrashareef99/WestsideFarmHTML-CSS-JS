$(document).ready(function(){
    $("#loginButton").click(function(){
        let currentUsername  = $("#username").val();
        let currentPassword = $("#password").val();
        let authenticatedUser = "";
        let authenticated = true;

        $.getJSON("../users.json", function(users) {
            $.each(users, function(index, user){
               if( currentUsername === user.email && currentPassword === user.password){
                    authenticated = true;
                    authenticatedUser = user.fName;
                    console.log("IN TRUE", authenticated);
                    return false;
               }
               else{
                    authenticated = false;
                    console.log("IN FALSE", authenticated);
               }
            });
            if(authenticated){
                
                sessionStorage.setItem("authenticatedUser", authenticatedUser);
                $(location).prop('href', '../pages/index.html');
            }
            else{
                alert("Invalid Credentials. Try Again.");
            }
           
          });
    });
});

