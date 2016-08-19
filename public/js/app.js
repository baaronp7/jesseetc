$(document).ready(function () {

    $("div#mainBanner").ready(function() {
        var url = "/getMedia?id="+$("div#mainBanner").data("imgid");
        console.log(url);
        $.ajax({
            url: url, dataType: "json",
            success: function(result){
                $("div#mainBanner").html(
                    '<img src="'+result.media_details.sizes.full.source_url+'" class="img-responsive" />'
                );
            }
        }).fail(function() {
            alert("error");
        });
    });

    $("div.featuredImg").each(function() {
        var url = "/getMedia?id="+$(this).data("imgid");
        console.log(url);
        $.ajax({
            url: url, dataType: "json",
            success: function(result){
                $(".featuredImg").html(
                    '<img src="'+result.media_details.sizes.full.source_url+'" class="img-responsive" />'
                );
            }
        }).fail(function() {
            alert("error");
        });
    });

    $("div.featuredImg").each(function() {
        var margin = $(".featuredImg>img").height()/4;
        $(".featuredImg>img").css({"margin-top":-margin});
    });

    $("div.date").each(function() {
        var date = new Date($(this).text().trim());
        var options = {weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"};
        $(this).text(date.toLocaleTimeString("en-us", options));
    });

    $(window).resize(function(){
        $(".featuredImg").each(function() {
            var margin = $(".featuredImg>img").height()/4;
            $(".featuredImg>img").css({"margin-top":-margin});
        });
    });
});