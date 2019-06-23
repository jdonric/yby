 // Get the modal
 var csBox = document.getElementById('coming-soon');
 var csTrigger = function() {csBox.style.display = "block";};
 // Get the <span> element that closes the modal
 
 // When the user clicks the button, open the modal 
 /* window.onload = function() {
   csBox.style.display = "block";
 } */

   function comingSoon() {
    window.onload = csTrigger;
   };
 
setTimeout(comingSoon, 5000);
 
 // When the user clicks on <span> (x), close the modal
 /* span.onclick = function() {
   modal.style.display = "none";
 } */
 // When the user clicks anywhere outside of the modal, close it
 /*window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 } */