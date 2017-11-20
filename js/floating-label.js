$(document).ready(function(){
    $(".form-control").focus(function() {
        $(".floating-label").animate({top: "197px", left: "35px", fontSize: '11px', padding: "0 5px"}, 100)
            .css("color", "#7beec7")
            .css("fontWeight", "bold");


    });
    $(".form-control").blur(function() {
        if($(this).val() == ''){
            $(".floating-label").animate({top: "225px", left: "45px", fontSize: '14px', padding: "0 5px"}, 100)
                .css("color","lightgray")
                .css("fontWeight", "lighter");
        }
    });
});