// make an array of each url
var images = [
  '_img/Smiling1.jpg',
  '_img/BigEyes2.jpg',
  '_img/ClosedEyes3.jpg',
  '_img/Singing4.jpg',
  '_img/SingingFist5.jpg',
  '_img/HandsChin6.jpg',
  '_img/Laughing7.jpg'
]
$( document ).ready(function() {
  // set a counter to zero
  var counter = 0;
  // make function to set the bg image
  function renderImage() {
    $('.IntroImgs').css(
      {'background-image': 'url(' + images[counter] + ')'}
    );
  };
  renderImage();
  $('.IntroImgs').click(function() {
    if (counter < (images.length - 1) ) {
      counter = counter + 1;
    } else {
      counter = 0;
    };
    renderImage();
  });

  for (i = 0; i < images.length; i++) {
    $('.Hidden').append(
      '<img src="' + images[i] + '"/>'
    );
  }
});
