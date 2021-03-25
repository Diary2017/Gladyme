
//navbar
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".header_nav_links");
    const navLinks = document.querySelectorAll(".header_nav_links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
        
    })
    
}

navSlide();
        
//slick
//index_section_1
$('.index_slide').slick({
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    adaptiveHeight: true
  });

//index_section_3
$('.section_3_content_img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  });

//AOS  
AOS.init();

//swiper

var swiper = new Swiper('.swiper-container', {
slidesPerView: 1,
spaceBetween: 10,
// init: false,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    breakpoints: {
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
});

//彈出視窗

var U = "cart.html";
//修改視窗位置、大小
var X = 350; // x position
var Y = 100; // y position
var W = 900; // width
var H = 550; // height

// Do not edit below this line.
var s="resizable,left="+X+",top="+Y+",screenX="+X+",screenY="+Y+",width="+W+",height="+H;
function popMe(){
var SGW = window.open(U,'TheWindow',s)
}


