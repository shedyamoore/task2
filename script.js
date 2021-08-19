// speed of the movement of the moon
// high speed will affect smoothness
const SPEED = 5;
// angle of the moon 
const ANGLE = 3;
$(window).bind("scroll", function (e) {
  parallaxScroll();
});

function parallaxScroll() {
    // getting the scroll bar position
  var scrolled = $(window).scrollTop();
  if (scrolled > 100){
      return;
  }

  let position_bottom;
  // formula to calculate the inclind path toward left
  let position_left = ANGLE * scrolled * (SPEED );
  // value from the bottom of the screen
  if (scrolled < 50) {
    position_bottom = 180 + scrolled * SPEED;
  } else {
    position_bottom = (180 + 50 * SPEED) - ((scrolled - 50) * SPEED);
  }
  // setting bottom and left position of the moon
  $("#moon_section").css("bottom", position_bottom + "px");
  $("#moon_section").css("left", position_left + "px");
}
