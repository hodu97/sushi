//header

let scrollHeader = () => {
    let header = document.querySelector("#header");
    //pageYOffset >=50 ?A :B; //조건문이 참이면 A가 실행되고 거짓이면 B가 실행된다.
    pageYOffset >= 50 ?
        header.classList.add("bg-header") :
        header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader); //scrollHeader에 괄호 넣지말것 //콜백함수는 ()사용X

//배경테마 변경
let themeButton = document.getElementById("theme-button");
let iconTheme = "ri-sun-fill";
let darkTheme = "dark-theme";

let getCurrentTheme = () => {
    //document.body.classList.contains('darkTheme'),
    //==> body가 클래스명 darkTheme를 가지고 있는가? ==> true/false
    let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
    return result;
};

let getCurrentIcon = () => {
    let result = themeButton.classList.contains(iconTheme) ?
        "ri-moon-line" :
        iconTheme;

    return result;
};

//웹의 스토어에 값셋팅
//localStorage.setItem() --> 웹 스토어에 값을 입력
//localStorage.getItem() --> 웹스토어의 값을 가져올때

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
console.log(selectedTheme);

if (selectedTheme) {
    if (selectedTheme == "dark") {
        document.body.classList.add(darkTheme);
    } else {
        document.body.classList.remove(darkTheme);
    }

    if (selectedIcon == "ri-moon-line") {
        themeButton.classList.add(iconTheme);
    } else {
        themeButton.classList.remove(iconTheme);
    }
}

//모바일 메뉴 보이기
let navToggle = document.getElementById("nav_toggle"),
    navMenu = document.getElementById("nav_menu"),
    navClose = document.getElementById("nav_close");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

//전체 화면 애니메이션
ScrollReveal().reveal(".home_img,.home_data,.about_data,.about_img,.popular_card,.recently_data,.recently_img,.footer_description,.footer_content,.footer_info", {
    delay: 400,
    duration: 2500,
    origin: "top",
    distance: "60px",
    //reset: true, false가 기본값 --> 1번만 애니 
});

ScrollReveal().reveal(".home_data,.recently_img", {
    origin: "bottom"
});
ScrollReveal().reveal(".about_data,.recently_data", {
    origin: "left"
});
ScrollReveal().reveal(".about_img", {
    origin: "right"
});
ScrollReveal().reveal(".popular_card", {
    origin: "top",
    interval: 300
});



//scrollup

let scrollup = () => {
    let scrollup = document.getElementById('scroll-up')
    pageYOffset >= 350 ? scrollup.classList.add('showscroll') :
        scrollup.classList.remove('showscroll')
}

window.addEventListener('scroll', scrollup)


//menu
let scrollActive = () => {
    let scrollY = pageYOffset;

    let sections = document.querySelectorAll('section[id]'); //[] section 태그들을 가져오는데 속성 중 id가 있는 section들을 가져와라는 뜻 
    //console.log(sections)--> 유사배열
    sections.forEach((current) => {
        let sectionHeight = current.offsetHeight; //현재 불러온 item인 section의 높이값
        let sectionTop = current.offsetTop - 60 ; //현재 불러온 item의 머리top인 화면의 top인 위치 
        let sectionId = current.getAttribute('id');
        //console.log(sectionId)

        let sectionClass = document.querySelector(`.nav_menu a[href*="${sectionId}"]`)
        // a[href*=""] a태그 href안에 포함되어 있느냐? (* : 포함)
        //a[href*="home"] --> home 포함되어 있는가?

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        // --> scrollY가 sectionTop보다 크고 그리고 scrollY값이 sectionTop과 sectionHeight값을 더한것 보다 작거나 같으면
        {
            sectionClass.classList.add('active-link')
        }else {
            sectionClass.classList.remove('active-link')
        }


    })
}

window.addEventListener('scroll', scrollActive)
//('scroll',scrollActive > ()=>{} 위의 함수와 연결의 의미 ) -->콜백함수, 괄호를 더하면 절대 안됨