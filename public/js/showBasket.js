var basketBox = document.getElementById('basket-2');
var body = document.getElementById('body');
var btn = document.getElementById('basket-img');
var x = document.getElementsByClassName('close-basket')[0];

function showBasket() {

  basketBox.style.display = "none";
    basketBox.style.display = "block";
  }
  
  
  function hideBasket() {

  basketBox.style.display = "block";
    basketBox.style.display = "none";

  }

  

  btn.addEventListener("click", showBasket);
  x.addEventListener("click", hideBasket);
