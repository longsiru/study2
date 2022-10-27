/* 1. pc버전 서브메뉴 관련 */

const menu = document.querySelector('.menu__main');  //전체 메뉴
const subMenu = document.querySelectorAll('.list__drop'); //하위 메뉴
const panel = document.querySelector('.header__panel'); //하위 메뉴 나울때 나오는 판넬
const header = document.querySelector('.header'); //전체 헤더

// 메뉴에 마우스 오버시 하위메뉴 보여줌，放上鼠标的时候。
menu.addEventListener('mouseover', () => {
    panel.style.display = 'block';
    subMenu.forEach(subMenu => { subMenu.style.display = "block" });
    /* subMenu.forEach(function(subMenu){
        subMenu.style.display = "block"
    }) */ //这样也可以。
});


// 메뉴 이외의 곳에 마우스 떼면 하위 메뉴 숨김，拿开鼠标的时候。
header.addEventListener('mouseout', () => {
	panel.style.display = 'none';
    subMenu.forEach(subMenu => { subMenu.style.display = "none" });
});


// 하위메뉴에서 마우스 떼면 하위메뉴 숨김，拿开鼠标的时候
panel.addEventListener('mouseout', () => {
	panel.style.display = 'none';
    subMenu.forEach(subMenu => { subMenu.style.display = "none" });
});






/* 2. 모바일 버전 메뉴 보이기, 숨기기 */
const Mhamburger = document.querySelector('.mobile.hamburger');  //햄버거
const Mclose = document.querySelector('.mobile.close');  //단기 버튼
const Mnav = document.querySelector('.header__Mnav');  //모바일 메뉴 전체
//点击打开
Mhamburger.addEventListener('click', () => {
    Mnav.style.display = 'block';
});
/* Mhamburger.addEventListener(function(click){
    Mnav.style.display = "block";
}) */

//点击关闭
Mclose.addEventListener('click', () => {
    Mnav.style.display = 'none';
});


/* 3. width가 767px 이상일때 모바일 메뉴 보임 방지 */
/* 
    과부하 방지
    https://developer.mozilla.org/ko/docs/Web/API/Window/resize_event 
*/

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();  //这是立即执行函数

// handle event
window.addEventListener("optimizedResize", function() {
    let winWidth = window.innerWidth;

    // 태블릿 사이즈 부터
    if (winWidth >= 767){
        Mnav.style.display = 'none';
    }
});


/* 4. 모바일 하위 메뉴 보이기 숨기기 */
//getComputedStyle 사용 이유: https://stackoverflow.com/questions/39679753/javascript-document-getelementbyidel-style-display-returns-empty-string-but

const showHide = e => {
    const MListDrop = e.children[2];
    const displayAttr = window.getComputedStyle(MListDrop).display;

    if (displayAttr == 'none') {
        MListDrop.style.display = 'block';
    } else {
        MListDrop.style.display = 'none';
    }
}

//这样写也可以
/* function showHide(e){
    const MListDrop = e.children[2];//내가 선택한 메뉴의 하위메뉴
    //const displayAttr = MListDrop.style.display 这个不行的时候用window试试，window全局作用域。
    const displayAttr = window.getComputedStyle(MListDrop).disply;

    if (displayAttr === "none"){
        MListDrop.style.display = "block";
    }else{
        MListDrop.style.display = "none";
    }

} */