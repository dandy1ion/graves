$(function() {
    
    //focus and blur on input fields on forms
    $("input").focus(function() {
        $(this).css("border", "solid 2px black");
    });
    $("input").blur(function() {
        $(this).css("border", "none");
    });

    //add funcionality to the w3-card-2 classes (expand when hovered over and shrink when hover off)
    $(".w3-card-2").hover(function() {
        $(this).animate({
            width: "500px",
            height: "600px",
        }, "slow");
    }, function() {
        $(this).animate({
            width: "400px",
            height: "500px"
        }, "slow");
    });
});