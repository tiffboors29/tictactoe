'use strict';

 // displays 'message' in alert box above boardgame
  var displayAlert = function(message) {
    $('#alertBox').html(message);
  };


  // displays 'score' in scorebox in r-sidebar
  var displayScore = function(score) {
    $('#scoreBox').html(score);
  };



$(document).ready(function() {

  // reloads page for brand new game with new/different players
  $('#newGame').on('click', function() {
    window.location.reload(true);
  });

});

















// $('#playComp').on('click', function() {


//   var compChoices = function() {
//     if ($('#tile1').hasClass('x-layer') && $('#tile3').hasClass('x-layer')) {
//       if (isAvailable($('#tile2')) === true) {
//         $('#tile2').addClass('o-layer');
//       } else {
//         find($('.default-tile')).addClass('o-layer');
//       }

//     } else if ($('#tile1').hasClass('x-layer') && $('#tile7').hasClass('x-layer')) {
//       $('#tile4').addClass('o-layer');
//     } else if ($('#tile1').hasClass('x-layer') && $('#tile9').hasClass('x-layer')) {
//       $('#tile5').addClass('o-layer');
//     } else if ($('#tile1').hasClass('x-layer') && $('#tile2').hasClass('x-layer')) {
//       $('#tile3').addClass('o-layer');
//     } else if ($('#tile1').hasClass('x-layer') && $('#tile4').hasClass('x-layer')) {
//       $('#tile7').addClass('o-layer');
//     } else if ($('#tile2').hasClass('x-layer') && $('#tile3').hasClass('x-layer')) {
//       $('#tile1').addClass('o-layer');
//     } else if ($('#tile2').hasClass('x-layer') && $('#tile5').hasClass('x-layer')) {
//       $('#tile8').addClass('o-layer');
//     } else if ($('#tile3').hasClass('x-layer') && $('#tile6').hasClass('x-layer')) {
//       $('#tile9').addClass('o-layer');
//     } else if ($('#tile3').hasClass('x-layer') && $('#tile9').hasClass('x-layer')) {
//       $('#tile6').addClass('o-layer');
//     } else if ($('#tile3').hasClass('x-layer') && $('#tile5').hasClass('x-layer')) {
//       $('#tile7').addClass('o-layer');
//     } else if ($('#tile3').hasClass('x-layer') && $('#tile9').hasClass('x-layer')) {
//       $('#tile5').addClass('o-layer');
//     } else if ($('#tile4').hasClass('x-layer') && $('#tile5').hasClass('x-layer')) {
//       $('#tile6').addClass('o-layer');
//     } else if ($('#tile4').hasClass('x-layer') && $('#tile6').hasClass('x-layer')) {
//       $('#tile4').addClass('o-layer');
//     } else if ($('#tile7').hasClass('x-layer') && $('#tile9').hasClass('x-layer')) {
//       $('#tile8').addClass('o-layer');
//     } else if ($('#tile7').hasClass('x-layer') && $('#tile8').hasClass('x-layer')) {
//       $('#tile9').addClass('o-layer');
//     } else if


//   };




