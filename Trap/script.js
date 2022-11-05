var btn1 = document.querySelector('.bxs-grid-alt');
var btn2 = document.querySelector('.bx-list-ul');

var btnDiv1 = document.querySelector('.divBtn1');
var btnDiv2 = document.querySelector('.divBtn2');



var body1 = document.querySelector('.all-sellproducts');
var body2 = document.querySelector('.imageLists');



btn1.addEventListener('click', function(){
    body2.style.display = "none";
    body1.style.display = "flex";
    btnDiv2.style.backgroundColor =  "#f5f5f5";
    btnDiv2.style.color = "#1c1c1c";
    btnDiv2.id = "deactive";

    btnDiv1.id = "active";
    btnDiv1.style.backgroundColor = "#1c1c1c";
    btnDiv1.style.color = "#f5f5f5";
    btnDiv1.style.borderRadius = "3px";


});
btn2.addEventListener('click', function(){
    body2.style.display = "block";
    body1.style.display = "none";
    btnDiv1.style.backgroundColor =  "#f5f5f5";
    btnDiv1.style.color = "#1c1c1c";
    btnDiv1.id = "deactive";

    btnDiv2.id = "active";
    btnDiv2.style.backgroundColor = "#1c1c1c";
    btnDiv2.style.color = "#f5f5f5";
    btnDiv2.style.borderRadius = "3px";


    
});

function myEnterFunction(x) {
    if (x.id == "deactive") {
        x.style.backgroundColor = "#1c1c1c";
        x.style.color = "#f5f5f5";
        x.style.borderRadius = "3px"; 
    }
    
    
    
}
  
function myOverFunction(x) {
    if (x.id == "deactive") {
        x.style.backgroundColor = "#f5f5f5";
        x.style.color = "#1c1c1c";
        x.style.borderRadius = "3px";
    }
    
}
