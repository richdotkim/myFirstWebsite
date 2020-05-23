
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
const options = {};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0){
      entry.target.style.animation = 'anim1 3s forwards ease-out';
    }else{
      entry.target.style.animation = 'none';
    }
  });
}, options);
  // if(entries.intersectionRatio > 0){
  //   entries.target.style.animation = 'anim1 2s forwards ease-out';
  // }else{
  //   entries.target.style.animation = 'none';
  // }

observer.observe(images);


