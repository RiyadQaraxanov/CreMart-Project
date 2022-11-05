
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide a img');


//Button

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.getElementsByClassName.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners

nextBtn.addEventListener('click',()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})


//On Click

var onClickProducts1 = document.querySelector('.newProducts');
var onClickProducts2 = document.querySelector('.featuredProducts');
var onClickProducts3 = document.querySelector('.bestSellers');

var topProductsDiv1 = document.querySelector('.newProductsDiv');
var topProductsDiv2 = document.querySelector('.featuredProductsDiv');
var topProductsDiv3 = document.querySelector('.bestSellersDiv');

var topProductsPrevButton = document.querySelector('.swiper-button-prev');
var topProductsNextButton = document.querySelector('.swiper-button-next');

var count=0

onClickProducts1.addEventListener('click',function(){
    onClickProducts1.style.color = "#1c1c1c";
    onClickProducts2.style.color = "#8e8e8e";
    onClickProducts3.style.color = "#8e8e8e";

    topProductsDiv1.style.display = "flex";
    topProductsDiv2.style.display = "none";
    topProductsDiv2.style.display = "none";

    topProductsPrevButton.style.display = "block";
    topProductsNextButton.style.display = "block";
});

onClickProducts2.addEventListener('click',function(){
    onClickProducts1.style.color = "#8e8e8e";
    onClickProducts2.style.color = "#1c1c1c";
    onClickProducts3.style.color = "#8e8e8e";

    topProductsDiv1.style.display = "none";
    topProductsDiv2.style.display = "flex";
    topProductsDiv3.style.display = "none";

    topProductsPrevButton.style.display = "none";
    topProductsNextButton.style.display = "none";
});

onClickProducts3.addEventListener('click',function(){
    onClickProducts1.style.color = "#8e8e8e"
    onClickProducts2.style.color = "#8e8e8e"
    onClickProducts3.style.color = "#1c1c1c"

    topProductsDiv1.style.display = "none";
    topProductsDiv2.style.display = "none";
    topProductsDiv3.style.display = "flex";

    topProductsPrevButton.style.display = "none";
    topProductsNextButton.style.display = "none";
});

//Modal Box Click

var btn = document.querySelector(".bxs-show");

var modal = document.getElementById("myModal");

btn.addEventListener('click', function(){
    modal.style.display = "block";
});


//Show Password
function myFunction() {
    var x = document.querySelector("#passwordTextbox");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}


//Gender Selection

function genderSelectionMr() {
    document.getElementById('mrsDiv').style.display = "none";
    document.getElementById('mrDiv').style.display = "block";

};
function genderSelectionMrs() {
    document.getElementById('mrDiv').style.display = "none";
    document.getElementById('mrsDiv').style.display = "block";
};


//Loading Page

var loader = document.querySelector('.loadingPage');

window.addEventListener('load', function(){
    loader.style.display = "none";
});

//myAccount Click

var myAccount = document.querySelector('.myAccount');
var myAccountDiv = document.querySelector('.myAccountDiv');

myAccount.addEventListener('click',function(){
    if(myAccountDiv.style.display === "block") myAccountDiv.style.display = "none";
    else myAccountDiv.style.display = "block";
});
