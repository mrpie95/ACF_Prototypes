
function myMap()
{
  myCenter=new google.maps.LatLng(41.878114, -87.629798);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}


function openMenu(id) {
  for (var i = 1; i <= 6; i++) {
    if (id == i){
      document.getElementById("menu"+id).style.display = "block";
      document.getElementById("menu"+id).className += " w3-animate-opacity";
    }
    else{
      document.getElementById("menu"+i).style.display = "none";
      document.getElementById("menu"+i).className += " w3-animate-opacity";
    }
  }
}

// Modal Image Gallery
function openMessage(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("img01");
  captionText.innerHTML = "MEOW MOEW";
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};


function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
        navbar.style.display = "block";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
        navbar.style.display = "none";
    }
}


// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

jQuery(document).ready(function() {
 
var offset = 250;
 
var duration = 300;
 
jQuery(window).scroll(function() {
 
if (jQuery(this).scrollTop() > offset) {
 
jQuery('.back-to-top').fadeIn(duration);
 
} else {
 
jQuery('.back-to-top').fadeOut(duration);
 
}
 
});
 
 
 
jQuery('.back-to-top').click(function(event) {
 
event.preventDefault();
 
jQuery('html, body').animate({scrollTop: 0}, duration);
 
return false;
 
})
 
});
