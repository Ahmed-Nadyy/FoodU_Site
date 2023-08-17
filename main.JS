
/*******************************  back ground image ***************************************** */


var home = document.getElementById("home");
window.addEventListener('load', function() {
    
    var images = [
        "/imgs/2.jpg",
        "/imgs/3.jpg",
        "/imgs/4.jpg",
        "/imgs/5.jpg",
        "/imgs/6.jpg",
        "/imgs/7.jpg",
      ];
      

    var index = 0;

    function changeBackground() {
        home.style.backgroundImage = 'url(' + images[index] + ')';
        index = (index + 1) % images.length;
        if(index==7)index=0;
      }
      

    setInterval(changeBackground, 5000); 
});


/********************************** left divs *************************************** */
