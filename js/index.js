$(function() {
    var startDate = $("#start-date").text();
    var endDate = $("#end-date").text();
    setTimeout(function() {
        startDate = $("#start-date").text();
        endDate = $("#end-date").text();
        var enterDateMoth = startDate.split('-')[1];
        var enterDateDay = startDate.split('-')[2];
        var leaveDateMoth = endDate.split('-')[1];
        var leaveDateDay = endDate.split('-')[2];
        $(".date-enter-content > .date-month").text(enterDateMoth+'月'+enterDateDay+'日');
        $(".date-enter-content > .date-week").text(week(startDate));
        $(".date-leave-content > .date-month").text(leaveDateMoth+'月'+leaveDateDay+'日');
        $(".date-leave-content > .date-week").text(week(endDate));
//           $("#text-2-date").text(startDate + "/" + endDate);
    }, 100);
    $(".save-btn").click(function() {
        startDate = $("#start-date").text();
        endDate = $("#end-date").text();
        $(".select-date").hide();
        $("#text-2-date").text(startDate + "/" + endDate);
        var enterDateMoth = startDate.split('-')[1];
        var enterDateDay = startDate.split('-')[2];
        var leaveDateMoth = endDate.split('-')[1];
        var leaveDateDay = endDate.split('-')[2];
        $(".date-enter-content > .date-month").text(enterDateMoth+'月'+enterDateDay+'日');
        $(".date-enter-content > .date-week").text(week(startDate));
        $(".date-leave-content > .date-month").text(leaveDateMoth+'月'+leaveDateDay+'日');
        $(".date-leave-content > .date-week").text(week(endDate));

        var day = $("#number-day").text();
        $(".live-date-day").text(day+'晚');
    });
    $(".cancel-btn").click(function() {
        $(".select-date").hide();
    });

    $("#text-2-date").click(function() {
        $(".select-date").show();

    });
    $(".bespeak").click(function(){
        $(".predetermine-model").show();
        pushHistory();
    });
    $(".predetermine-msg-foot-btn").click(function(){
        $(".predetermine-model").hide();
    });
    /* 预览图片 */
    var openPhotoSwipe = function(items) {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        // define options (if needed)
        var options = {
            // history & focus options are disabled on CodePen
            history: false,
            focus: false,
            tapToClose: true,
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };

        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    $(".item-img").on('click',function(){
        var index = $('.item-img').index(this);
        // build items array
        var items = {
            '0':[
                {
                    src: './img/fangjian.jpg',
                    w: 653,
                    h: 396
                },
                {
                    src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
                    w: 1024,
                    h: 683
                }
            ],
            '1':[
                {
                    src: 'https://placekitten.com/600/400',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://placekitten.com/1200/900',
                    w: 1200,
                    h: 900
                }
            ]
        };
        openPhotoSwipe(items[index]);
    })
});