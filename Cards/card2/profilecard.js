$(document).ready(function(){
    $(".education").hide();
    $(".aboutbtn").css({"color":"navy"});
    $(".educationbtn").click(function(e){
        e.preventDefault();
        console.log("sdsd");
        $(".education").show();
        $(".educationbtn").css({"color":"navy"});
        $(".aboutbtn").css({"color":"black"});
        $(".about").hide();
    });

    $(".aboutbtn").click(function(e){
        e.preventDefault();
        console.log("sdsd");
        $(".about").show();
        $(".educationbtn").css({"color":"black"});
        $(".aboutbtn").css({"color":"navy"});
        $(".education").hide();
    });


});