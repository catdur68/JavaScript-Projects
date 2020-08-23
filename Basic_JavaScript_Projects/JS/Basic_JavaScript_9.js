function countdown()
{
    //fetch the value given by user
    var second = parseInt(document.getElementById("seconds").value);

    //now start the countdown function
    function tick()
    {
        second = second -1;//establish the countdown by -1
        //this is the same as count = count -1
        timer.innerHTML = second;
        //??
        setTimeout(tick,1000);
        //setTimeout() is a function already programmed in js
        //1000 milliseconds = 1 second
        if(second == -1) // passed 0...
        {   
            alert("Time is up!");//this brings us an alert message,
            //but does not stop countdown when the ok button is clicked
            //to stop the countdown, the if statement will need to 
            //look like: second < 0
        }
    }    
    tick();//otherwise keep counting down
}
/////////////SLIDE SHOW//////////////////////////////////////
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//var slideIndex = 0;
//showSlides();

//function showSlides() {
  //var i;
  //var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  //for (i = 0; i < slides.length; i++) {
    //slides[i].style.display = "none";  
  //}
  //slideIndex++;
  //if (slideIndex > slides.length) {slideIndex = 1}    
  //for (i = 0; i < dots.length; i++) {
    //dots[i].className = dots[i].className.replace(" active", "");
  //}
  //slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
  //setTimeout(showSlides, 2000); // Change image every 2 seconds
//}
