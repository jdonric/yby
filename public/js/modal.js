var cookieM = document.getElementById('cookie-form');
var cupcakeM = document.getElementById('cupcake-form');
var cinnamonM = document.getElementById('cinna-form');
var pieM = document.getElementById('pie-form');
var brownieM = document.getElementById('brownie-form');

var orderBtn1 = document.getElementById('cookie-btn');
var orderBtn2 = document.getElementById('cupcake-btn');
var orderBtn3 = document.getElementById('cinna-btn');
var orderBtn4 = document.getElementById('pie-btn');
var orderBtn5 = document.getElementById('brownie-btn');

var orderBack1 = document.getElementById('cookie-back');
var orderBack2 = document.getElementById('cupcake-back');
var orderBack3 = document.getElementById('cinna-back');
var orderBack4 = document.getElementById('pie-back');
var orderBack5 = document.getElementById('brownie-back');

var goBack = document.getElementsByClassName('back');

//SHOW MODALS
function showCookie() {
    if (cookieM.style.display = 'none') {
        cookieM.style.display = 'block';
    }
}

function showCupcake() {
    if (cupcakeM.style.display = 'none') {
        cupcakeM.style.display = 'block';
    }
}
function showCinnamon() {
    if (cinnamonM.style.display = 'none') {
        cinnamonM.style.display = 'block';
    } 
}
function showPie() {
    if (pieM.style.display = 'none') {
        pieM.style.display = 'block';
    }
}
function showBrownie() {
    if (brownieM.style.display = 'none') {
        brownieM.style.display = 'block';
   }
}


//CLOSE MODALS
function closeCookie() {
    if (cookieM.style.display = 'block') {
        cookieM.style.display = 'none';
    }
}
function closeCupcake() {
    if (cupcakeM.style.display = 'block') {
        cupcakeM.style.display = 'none';
    }
}
function closeCinnamon() {
    if (cinnamonM.style.display = 'block') {
        cinnamonM.style.display = 'none';
    }
}
function closePie() {
    if (pieM.style.display = 'block') {
        pieM.style.display = 'none';
    }
}
function closeBrownie() {
    if (brownieM.style.display = 'block') {
        brownieM.style.display = 'none';
    }
}



orderBtn1.onclick = showCookie;
orderBtn2.onclick = showCupcake;
orderBtn3.onclick = showCinnamon;
orderBtn4.onclick = showPie;
orderBtn5.onclick = showBrownie;

orderBack1.onclick = closeCookie;
orderBack2.onclick = closeCupcake;
orderBack3.onclick = closeCinnamon;
orderBack4.onclick = closePie;
orderBack5.onclick = closeBrownie;



    