$(".button").click(function(){
    $(".button").fadeOut();
    $(".click").fadeIn();
    $("p").text("I don't care about your name really you think I'm that good at coding");
});
$(".click").click(function(){
    $(".click").fadeOut();
    $(".hint").fadeIn();
    $("p").text("You need help click the button below again");
});
$(".hint").mousedown(function(){
    $("p").show("To get your knife double click the imagae");
});
$(".hint").mouseup(function(){
        $("p").text("Click the purple square");
        $(".lost").show();
        $(".hint").fadeOut();
});
$(".lost").click(function(){
        $("p").text("Why would I tell you the answer and if your asking questions if you you won or not I'd say you lost and your bad. Also here is a here's a hint click the image");
        $(".lost").hide();
        $(".reset").show();
});
$(".box").click(function(){
        $(".done").text("You won a csgo case with no key now go buy a key for $2.49");
        $(".box").hide();
            $(".button").hide();
            $(".close").hide();
});
$(".img").dblclick(function(){
        $("p").text("Click around the space below me");
});
$(".reset").click(function(){
    $(".reset").hide();
 $(".button").show();
 $("p").text("can you enter your name below");
});