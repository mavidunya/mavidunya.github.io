/**
 * MENU SCROLL
 */

$(document).ready(function () {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
})

/**
 * RESPONSİVE DROPDOWN MENU
 */

$(function () {
  $(".menu-btn").click(function () {
    $(".menu").slideToggle(500);
  })
})