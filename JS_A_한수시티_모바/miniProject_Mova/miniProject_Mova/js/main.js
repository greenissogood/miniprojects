const swiperEl = document.querySelector('swiper-container');
const swiper = swiperEl.swiper;

 
//버튼 클릭 스크롤 이벤트
$(document).ready(function(){
    $('.headerBtn1').click(function(){
        var offset = $('.jb-box').offset(); //선택한 태그의 위치를 반환
            //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
        $('html').animate({scrollTop : offset.top}, 0); //마지막 숫자는 delay 100->0.1초
    });
});
$(document).ready(function(){
    $('.headerBtn2').click(function(){
        var offset = $('.movie1').offset();
        $('html').animate({scrollTop : offset.top}, 0);
    });
});
$(document).ready(function(){
    $('.headerBtn3').click(function(){
        var offset = $('.movie2').offset();
        $('html').animate({scrollTop : offset.top}, 0);
    });
});

// 탑버튼
$('.banner-bridge-center').on('click', function(){
    $('html, body').stop().animate({scrollTop: 0}, 0);
});


// 비디오 창 띄우기
$(".popupModalVideo a").click(function() {
$(".video_modal_popup").addClass("reveal"),
$(".video_modal_popup .video-wrapper").remove(),
$(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
}),
$(".video_modal_popup-closer").click(function() {
    $(".video_modal_popup .video-wrapper").remove(),
    $(".video_modal_popup").removeClass("reveal")
});
