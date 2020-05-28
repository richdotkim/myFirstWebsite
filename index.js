
function deferVideo() {

  //defer html5 video loading
$("video source").each(function() {
  var sourceFile = $(this).attr("data-src");
  $(this).attr("src", sourceFile);
  var video = this.parentElement;
  video.load();
  // uncomment if video is not autoplay
  //video.play();
});

}
window.onload = deferVideo;

const images = document.querySelector('.anim');
const images2 = document.querySelector('.fiu')
const images3 = document.querySelector('.fiu2')
const options = {};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0){
      entry.target.style.animation = 'anim1 2s forwards ease-out';
    }else{
      entry.target.style.animation = 'none';
    }
  });
}, options);

const observer2 = new IntersectionObserver((entries, observer2) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0){
      entry.target.style.animation = 'fadeInUp 1s forwards ease-out';

    }else{
      entry.target.style.animation = 'none';
    }
  });
}, options);

const observer3 = new IntersectionObserver((entries, observer3) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0){
      entry.target.style.animation = 'fadeInUp 1s forwards ease-out';

    }else{
      entry.target.style.animation = 'none';
    }
  });
}, options);

observer.observe(images);
observer2.observe(images2);
observer3.observe(images3);