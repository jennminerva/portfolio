// make an array of each url
var images = [
  '_img/1.jpeg',
  '_img/2.jpeg',
  '_img/3.jpeg',
  '_img/4.jpeg',
  '_img/5.jpeg',
  '_img/6.jpeg',
  '_img/7.JPG'
]
$( document ).ready(function() {
  // set a counter to zero
  var counter = 0;
  console.log(counter);
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
      console.log(counter);
    } else {
      counter = 0;
      console.log(counter);
    };
    renderImage();
  });

  for (i = 0; i < images.length; i++) { 
    $('.Hidden').append( 
      '<img src="' + images[i] + '"/>'
    );
  }
});
