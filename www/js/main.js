function sent_ajax(element){
    $.ajax({
        url: "/content/left.html",
        cache: false,
        success: function(html){
            $("#"+element).html('');
            $("#"+element).append(html);
    }
});
}

function show_hide(element){
     $("#top_content").hide(200);
    $("#right_content").hide(200);
    $("#bottom_content").hide(200);
    $("#left_content").hide(200);
    $("#"+element).show(200);
}

function def_up_style(element, positionl, kol){
    $("#left").css("left","0px");
    $("#left_bottom").css("left","0px");
    $("#right").css("right","0px");
    $("#right_bottom").css("right","0px");
    $("#bottom").css("bottom","0px");
    $("#top").css("top","0px");
    if(positionl == "left")
    $("#"+element).animate({left:"+="+kol+"px"},400);
    if(positionl == "right")
    $("#"+element).animate({right:"+="+kol+"px"},400);
    if(positionl == "top")
    $("#"+element).animate({top:"+="+kol+"px"},400);
    if(positionl == "bottom")
    $("#"+element).animate({bottom:"+="+kol+"px"},400);
}

$("div").mouseover(function(){
    $(this).css("opacity","1");
});

$("div").mouseout(function(){
    $(this).css("opacity","0.7");
});


$("#left").click(function(){
    sent_ajax("content");
    show_hide("left_content");
    def_up_style("left","left","700");
});

$("#left_bottom").click(function(){
    sent_ajax("content");
    show_hide("left_content");
    def_up_style("left_bottom","left","700");
});

$("#right").click(function(){
    sent_ajax("content");
    show_hide("right_content");
    def_up_style("right","right","700");
});

$("#right_bottom").click(function(){
    sent_ajax("content");
    show_hide("right_content");
    def_up_style("right_bottom","right","700");
});

$("#bottom").click(function(){
    sent_ajax("content");
    show_hide("bottom_content");
    def_up_style("bottom","bottom","300");
});

$("#top").click(function(){
    sent_ajax("content");
    show_hide("top_content");
    def_up_style("top","top","300");
});
