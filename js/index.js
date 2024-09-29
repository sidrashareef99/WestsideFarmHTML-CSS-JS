$(document).ready(function(){
    let currentUser = sessionStorage.getItem("authenticatedUser");
    console.log(currentUser.name);

    document.getElementById("userName").innerHTML = currentUser;

});