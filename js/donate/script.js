jQuery(document).ready(function () {
    var QRBox = $('#QRBox');
    var MainBox = $('#MainBox');
    var AliPayQR = 'https://fastly.jsdelivr.net/gh/sy-records/staticfile/images/donate/tip_qrcode_alipay.jpg';
    var WeChanQR = 'https://fastly.jsdelivr.net/gh/sy-records/staticfile/images/donate/tip_qrcode_wechatpay.jpg';

    function showQR(QR) {
        if (QR) {
            MainBox.css('background-image', 'url(' + QR + ')');
        }
        $('#DonateText,#donateBox,#github').addClass('blur');
        QRBox.fadeIn(300, function (argument) {
            MainBox.addClass('showQR');
        });
    }

    $('#donateBox>li').click(function (event) {
        var thisID = $(this).attr('id');
        if (thisID === 'AliPay') {
            showQR(AliPayQR);
        } else if (thisID === 'WeChat') {
            showQR(WeChanQR);
        }
    });

    MainBox.click(function (event) {
        MainBox.removeClass('showQR').addClass('hideQR');
        setTimeout(function (a) {
            QRBox.fadeOut(300, function (argument) {
                MainBox.removeClass('hideQR');
            });
            $('#DonateText,#donateBox,#github').removeClass('blur');
        }, 600);

    });
});
