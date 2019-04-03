$(function(){
    laydate.render({
        elem: "#start-date",
        trigger: "click",
        calendar: true, //开启公历节日
        // range: true,  //日期范围
        format: "yyyy-MM-dd",
        showBottom: false, //不出现底部栏
        min: 0, //最小日期今天
        value: new Date(),
        ready: function(date) {
            console.log(date); //得到初始的日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
            $("#start-date").text(
                `${date.year}-${(date.month =
                    date.month > 10 ? date.month : "0" + date.month)}-${(date.date =
                    date.date > 10 ? date.date : "0" + date.date)}`
            );
        },
        done: function(value, date, endDate) {
            $("#start-date").text(value);
        },
        theme: "#d95e57"
    });

    laydate.render({
        elem: "#end-date",
        trigger: "click",
        calendar: true, //开启公历节日
        // range: true,  //日期范围
        format: "yyyy-MM-dd",
        value: new Date(new Date().setDate(new Date().getDate() + 1)),
        showBottom: false, //不出现底部栏
        min: 0, //最小日期今天
        ready: function(date) {
            console.log(date); //得到初始的日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        },
        done: function(value, date, endDate) {
            $("#end-date").text(value);
            var day = datedifference($("#start-date").text(), value);
            $("#number-day").text(day);
        },
        theme: "#d95e57"
    });
})