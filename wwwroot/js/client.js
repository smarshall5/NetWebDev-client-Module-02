$(function(){
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        toast.pause();
        toast.currentTime = 0;
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });
    $(document).on('keyup', function (e) {
        if (e.keyCode == 27) {
            $('#toast').toast('hide');
        }
    });
    $('#seasoningCode').data({ 'Header': "Anton's Seasoning", 'code': "Anton35" });
    $('#notseasoningCode').data({ 'Header': "Not seasoning", 'code': "NoSeason45" });
    $('#stealCode').data({ 'Header': "Stolen Goods", 'code': "Stolen50" });

    $('.code').on('click', function () {
        $('.toast').toast({ autohide: false }).toast('show');
        $('.ProductNameHead').text($(this).data('Header'));
        $('.toast-code').text("Discount code: " + $(this).data('code'));
    })

});
