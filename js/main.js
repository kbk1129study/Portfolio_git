$(function () {
    /* =============================================
        // ● 화살표 - 스크롤이 500px도달시 나타남
    ===============================================*/
    $(window).scroll(() => {
        // .scrollTop() - 세로 스크롤된 컨테니너의 위치 반환
        // 500보다 크지 않으면 fadeOut() - 사라짐
        if ($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn(); // 나타남
        } else {
            $(".btn_top").fadeOut(); // 사라짐
        }
    });
    /* =============================================
       // ● 로고와 화살표 버튼 클릭시 최상단 
    ===============================================*/

    $(".logo, .btn_top").click(() => {
        $("html,body").animate({
            scrollTop: 0
        }, 400);
    });
    /* =============================================
        // ● 스크롤 이동시 메뉴와 라인 색변경 
    ===============================================*/

    $(window).scroll(() => {
        const height = $(document).scrollTop();
        $(".header_main>ul>li").removeClass("active");
        if (height <= 1300) { // 0~1300px 사이일때 색나옴
            $(".header_main>ul>li:nth-child(1)").addClass("active");
        } else {
            $(".header_main>ul>li:nth-child(2)").addClass("active");
        }
        // 최상단 왔을때 메뉴색 해제 
        if (height === 0) {
            $(".header_main>ul>li").removeClass("active");
        }
    });
    /* =============================================
        // ● 각 메뉴 클릭시 해당 위치로 이동  
    ===============================================*/
    // .slice(0, 3) - 앞 시작 인덱스 (0)->첫요소 / 뒤 - 갯수
    // .slice - 자바스크립트의 배열 메서드 
    // 0, 3 ( 0 부터 시작하여 3개 전까지의 요소만 선택 )
    $(".header_main>ul>li").slice(0, 2).on("click", function () {
        let targetPosition;
        if ($(this).index() === 0) { // 첫번째 li 클릭시
            // top 0에서 80px 내려온 위치를 뜻함 
            targetPosition = $("#skill").position().top - 80;
        } else if ($(this).index() === 1) { // 두번째 li 클릭시
            targetPosition = $("#portfolio").offset().top;
        }
        $("html,body").animate({
            scrollTop: targetPosition
        }, 400);
        $(".header_main>ul>li").removeClass("active");
        $(this).addClass("active");
    });

});