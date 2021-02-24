$(document).ready(function () {
    $(".tabmenu ul li").eq(0).addClass("on");
    $(".tabmenu .list").eq(0).show();
    $(".tabmenu ul li").click(function(){
        let i = $(this).index();
        $(".tabmenu ul li").removeClass("on").eq(i).addClass("on");
        $(".tabmenu .list2").hide().eq(i).show();
    })
});