const menuBtn = document.querySelector('.menu-button');
const HBurger = document.querySelector('.menu-button_burger');
const nav = document.querySelector('.navM');
const menuNav = document.querySelector('.navM-menu');
const navItem = document.querySelectorAll('.navM-menu_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        HBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItem.forEach(item => item.classList.add('open'));

        showMenu = true;
    }else{
        HBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItem.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

let root = document.querySelector(':root');


$(document).ready(function(){
    //zmiana tytułu
    $("#title2").hide();
    $("#title1").click(function(){
        $("#title1").hide();
        $("#title2").show();
    });

    $("#title2").click(function(){
        $("#title2").hide();
        $("#title1").show();
    });

  
    //zmiana motywu strony
    $("#dark").click(function(){
       $("div.home2_block-description").css({"color": "white", "background": "#272727", "border-bottom": "2px solid #f2f4f3", "border-top": "2px solid #f2f4f3"});
       $("h2.home2_block-description_title").css({"color": "#180d2f"});
       $("header").css({"border-bottom": "2px solid #f2f4f3", "background-color": "#272727", "color": "#ffffff"});
       $("span.header-title_the").css({"color": "#ffffff"});
        $("span.header-title_name").css({"color": "#180d2f"});
    })

    $("#light").click(function(){
        $("div.home2_block-description").css({"color": "black", "background": "#f2f4f3", "border-bottom": "2px solid #272727", "border-top": "2px solid #272727"});
        $("h2.home2_block-description_title").css({"color": "#b14aed"});
        $("header").css({"border-bottom": "2px solid #272727", "background-color": "#f2f4f3", "color": "#000000"});
        $("span.header-title_the").css({"color": "#000000"});
        $("span.header-title_name").css({"color": "#b14aed"});
     })
});


function zegar(){
    var data = new Date();
    var godz = data.getHours();
    var min = data.getMinutes();

    if (min < 10) min = "0" + min;
  
    var zegarek =  godz + ':' + min;
    document.getElementById("zegar").innerHTML = zegarek;
   
    setTimeout(zegar, 1000); 

}

	
    