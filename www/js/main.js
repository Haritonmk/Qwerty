
$("div").mouseover(function(){
    $(this).css("opacity","1");
});

$("div").mouseout(function(){
    $(this).css("opacity","0.5");
});


$("#left").click(function(){
    $("#top_content").hide(200);
    $("#left_content").show(200);
    $("#left_content").animate({"left": "+=50%"}, "slow");
    //$("#left_content").css("margin-left","0%");
    $("#left").css("margin-left","50%");
    $("#top").css("opacity","0.1");
    $("#bottom").css("opacity","0.1");
    $("#right_content").css("margin-right","-52%");
    $("#right").css("margin-right","0%");
    $("#bottom_content").css("margin-bottom","-52%");
    $("#bottom").css("margin-bottom","0%");
    //$("#top_content").css("margin-top","-52%");
    $("#top").css("margin-top","0%");
    $.ajax({
        url: "/content/left.html",
        cache: false,
        success: function(html){
        $("#content").append(html);
    }
});
});

$("#right").click(function(){
    $("#right_content").css("margin-right","0%");
    $("#right").css("margin-right","50%");
    $("#top").css("opacity","0.1");
    $("#bottom").css("opacity","0.1");
    $("#bottom_content").css("margin-bottom","-52%");
    $("#bottom").css("margin-bottom","0%");
    //$("#top_content").css("margin-top","-52%");
    $("#top").css("margin-top","0%");
    $("#left_content").css("margin-left","-52%");
    $("#left").css("margin-left","0%");
});

$("#bottom").click(function(){
    $("#bottom_content").css("margin-bottom","0%");
    $("#bottom").css("margin-bottom","50%");
    $("#left").css("opacity","0.1");
    $("#right").css("opacity","0.1");
    $("#right_content").css("margin-right","-52%");
    $("#right").css("margin-right","0%");
   // $("#top_content").css("margin-top","-52%");
    $("#top").css("margin-top","0%");
    $("#left_content").css("margin-left","-52%");
    $("#left").css("margin-left","0%");
});

$("#top").click(function(){
    //$("#top_content").css("margin-top","0%");
    $("#left_content").hide(200);
    $("#top_content").slideDown("slow");
    //$("#top").css("margin-top","50%");
    $("#top").css('position','static');
    $("#left").css("opacity","0.1");
    $("#right").css("opacity","0.1");
    $("#right_content").css("margin-right","-52%");
    $("#right").css("margin-right","0%");
    $("#bottom_content").css("margin-bottom","-52%");
    $("#bottom").css("margin-bottom","0%");
    //$("#left_content").css("margin-left","-52%");
    $("#left").css("margin-left","0%");
});
