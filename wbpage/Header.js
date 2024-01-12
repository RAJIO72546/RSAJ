document.write('<header id="portfolio">');
document.write('<a href="#"><img class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" style="width:65px;" src="img/logo.png"></a>');
document.write('<span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i class="fa fa-bars"></i></span>');
document.write('<div class="w3-container">');
document.write('<h1><b>Roller Skating Association Of Jharkhand</b></h1>');
document.write('<div class="w3-section w3-bottombar w3-padding-16">');
document.write(' <a href="index.html"><button id="index.html" class="w3-button w3-hover-green w3-white"><i class="fa fa-Home"></i><span class="w3-hide-small">  Home</span></button></a>');
document.write(' <a href="district.html"><button id="district.html" class="w3-button w3-hover-green w3-white"><i class="fa fa-university"></i><span class="w3-hide-small">  District</span></button></a>');
document.write(' <a href="DISCIPLINE.HTML"><button id="DISCIPLINE.HTML" class="w3-button w3-white w3-hover-green"><i class="fa fa-heart "></i><text class="w3-hide-small">  Discipline</text></button></a>');
document.write(' <a href="news.html"><button id="news.html" class="w3-button w3-white w3-hover-green"><i class="fa fa-newspaper-o"></i><text class="w3-hide-small">  News and Event</text></button></a>');
document.write(' <a href="update.html"><button id="update.html" class="w3-button w3-white w3-hover-green"><i class="fa fa-bell"></i><text class="w3-hide-small">  Updates</text></button></a>');
document.write(' <a href="contact.html"><button id="contact.html" class="w3-button w3-white w3-hover-green"><i class="fa fa-address-book-o "></i><text class="w3-hide-small">  Contact Us</text></button></a>');
document.write(' <a href="Gallery.html"><button id="Gallery.html" class="w3-button w3-white w3-hover-green"><i class="fa fa-film"></i><text class="w3-hide-small">  Gallery</text></button></a>');
document.write(' <a href="Form.html"><button id="Form.html" class="w3-button w3-white w3-hover-green"><i class="fa fa-film"></i><text class="w3-hide-small">  Form</text></button></a>');
document.write('</div>');
document.write('</div>');
document.write('</header>');

// Get the current url of the page
var url = window.location.href;

// Split the url by '/' and get the last part
var fileName = url.split('/').pop();

// Remove any query parameters or hash fragments from the file name
fileName = fileName.split('?')[0].split('#')[0];
//alert('The html page file name is ' + fileName);
document.getElementById(fileName).classList.remove ("w3-white");
document.getElementById(fileName).classList.add ("w3-green");


