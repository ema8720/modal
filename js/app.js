// lightbox
(function(){
// all images
let imageList = [];
let counter = 0;
const images = document.querySelectorAll('.store-img');
const container = document.querySelector('.lightbox-container');
const items = document.querySelector('.lightbox-item');
const closeIcon = document.querySelector('.lightbox-close');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');

// add all images to the array by looping
images.forEach(function(img){
imageList.push(img.src);
});
// console.log(imageList);

// open modal image
images.forEach(function(img){
img.addEventListener('click', function(){
  // show modal
  container.classList.add('show');
  // get source
  let src = event.target.src;
  // console.log(src);
  counter = imageList.indexOf(src);
  // console.log(counter);
  // show modal with an image
  items.style.backgroundImage = `url(${src})`
  
  
 });
});
// close modal
closeIcon.addEventListener('click', function(){
  container.classList.remove('show');
})
// left button
btnLeft.addEventListener('click', function(){
  counter--;
  if (counter < 0){
    counter = imageList.length -1;
  }
  items.style.backgroundImage = `url(${imageList[counter]})`;
  console.log(counter);
});
// right button
btnRight.addEventListener('click', function(){
  counter++;
  if (counter > imageList.length -1 ){
    counter = 0;
  }
  items.style.backgroundImage = `url(${imageList[counter]})`;
  console.log(counter);
});
})();