function show_create(){
    $(".login-form").css("display","none");
    $(".signup-form").fadeIn();
}
function show_login(){
    $(".signup-form").css("display","none");
    $(".login-form").fadeIn();
}



document.getElementById("submit").addEventListener("click", function() {
    window.location.href = "mainnewrecipe.html";
});

