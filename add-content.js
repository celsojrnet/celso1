// greeting time in header
var today = new Date();
var hourNow = today.getHours();
var year = today.getFullYear();
var greeting;

if (hourNow => 18) {
  greeting = 'Good Evening!';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon!';
} else if (hourNow => 0) {
  greeting = 'Good Morning!';
} else {
  greeting = 'Welcome!';
}

document.write ('<h3>' + greeting + '</h3>');


// <!-- slider show- testimonials -->

$(".horizon-swiper > div:gt(0)").hide();

setInterval(function() {
$('.horizon-swiper > div:first')
.slideToggle(1000)
.next()
.fadeIn(3000)
.end()
.appendTo('.horizon-swiper');
},  4000);
