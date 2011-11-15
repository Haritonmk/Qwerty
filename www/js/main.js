
$("div").mouseover(function(){
    $(this).css("opacity","1");
});

$("div").mouseout(function(){
    $(this).css("opacity","0.7");
});


$("#left").click(function(){
    $.ajax({
        url: "/content/left.html",
        cache: false,
        success: function(html){
        $("#content").append(html);
    }
});
    $("#top_content").hide(200);
    $("#right_content").hide(200);
    $("#bottom_content").hide(200);
    $("#left_content").show(200);
    $("#left").css("margin-left","700px");
    $("#left_bottom").css("margin-left","0px");
    $("#right").css("margin-right","0px");
    $("#right_bottom").css("margin-right","0px");
    $("#bottom").css("margin-bottom","0px");
    $("#top").css("margin-top","0px");
});

$("#left_bottom").click(function(){
    $.ajax({
        url: "/content/left.html",
        cache: false,
        success: function(html){
        $("#content").append(html);
    }
});
    $("#top_content").hide(200);
    $("#right_content").hide(200);
    $("#bottom_content").hide(200);
    $("#left_content").show(200);
    $("#left").css("margin-left","0px");
    $("#left_bottom").css("margin-left","700px");
    $("#right").css("margin-right","0px");
    $("#right_bottom").css("margin-right","0px");
    $("#bottom").css("margin-bottom","0px");
    $("#top").css("margin-top","0px");
});

$("#right").click(function(){
    $.ajax({
        url: "/content/left.html",
        cache: false,
        success: function(html){
        $("#content").append(html);
    }
});
    $("#top_content").hide(200);
    $("#right_content").show(200);
    $("#bottom_content").hide(200);
    $("#left_content").hide(200);
    $("#left").css("margin-left","0px");
    $("#left_bottom").css("margin-left","0px");
    $("#right").css("margin-right","700px");
    $("#right_bottom").css("margin-right","0px");
    $("#bottom").css("margin-bottom","0px");
    $("#top").css("margin-top","0px");
});

$("#right_bottom").click(function(){
    $.ajax({
        url: "/content/left.html",
        cache: false,
        success: function(html){
        $("#content").append(html);
    }
});
    $("#top_content").hide(200);
    $("#right_content").show(200);
    $("#bottom_content").hide(200);
    $("#left_content").hide(200);
    $("#left").css("margin-left","0px");
    $("#left_bottom").css("margin-left","0px");
    $("#right").css("margin-right","0px");
    $("#right_bottom").css("margin-right","700px");
    $("#bottom").css("margin-bottom","0px");
    $("#top").css("margin-top","0px");
});

$("#bottom").click(function(){
    $.ajax({
        url: "/content/left.html",
        cache: false,
        success: function(html){
        $("#content").append(html);
    }
});
    $("#top_content").hide(200);
    $("#right_content").hide(200);
    $("#bottom_content").show(200);
    $("#left_content").hide(200);
    $("#left").css("margin-left","0px");
    $("#left_bottom").css("margin-left","0px");
    $("#right").css("margin-right","0px");
    $("#right_bottom").css("margin-right","0px");
    $("#bottom").css("margin-bottom","300px");
    $("#top").css("margin-top","0px");
});

$("#top").click(function(){
    $.ajax({
        url: "/content/left.html",
        cache: false,
        success: function(html){
        $("#content").append(html);
    }
});
    $("#top_content").show(200);
    $("#right_content").hide(200);
    $("#bottom_content").hide(200);
    $("#left_content").hide(200);
    $("#left").css("margin-left","0px");
    $("#left_bottom").css("margin-left","0px");
    $("#right").css("margin-right","0px");
    $("#right_bottom").css("margin-right","0px");
    $("#bottom").css("margin-bottom","0px");
    $("#top").css("margin-top","300px");
});
