

$(function() {
  var rando = _.random(0, 20)*5
  var mySlider = $("input.slider").slider( { min: 0, max: 100, step: 5, value: rando } );
  $('#myModal').modal('show')

  // console.log(mySlider.getValue());

  var target = 0;
  var timeoutID;

  mySlider.on('slideStart', function(e) {
    var start = e.value;
      do {
        target = _.random(0, 20)*5;
      } while (target === start);
      $('.gateKeeper').text("Your target is: " + target);
      console.log(e.value);
     });

  mySlider.on('slideStop', function(e) {
      if (e.value === target ) {
        $('.gateKeeper').text('Very well, human. You may proceed. This time.');
        timeoutID = window.setTimeout(openSesame, 5000);

      } else {
        $('.gateKeeper').text('Incorrect. Please move your slider to the Target value.');
      }

      console.log("You landed at: " + e.value);
     });

     function openSesame() {
       $('#myModal').modal('hide');
     }

});
