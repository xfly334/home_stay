/*判断星期几*/
function week(date){
    var   s   =  date;
    return "周"+"天一二三四五六 ".charAt(new   Date(s).getDay())
}


/*监听物理返回键*/
function pushHistory() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#");
}
window.addEventListener("popstate", function(e) {
    /*隐藏弹窗*/
    if ($(".predetermine-model").css('display') == "block" || $(".select-date").css('display') == "block"){
        $(".predetermine-model").hide();
        $(".select-date").hide();
        $(".cancel-btn").click();
    }
}, false);

//两个时间相差天数 兼容firefox chrome
function datedifference(sDate1, sDate2) {
    //sDate1和sDate2是2006-12-18格式
    var dateSpan, tempDate, iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays;
}