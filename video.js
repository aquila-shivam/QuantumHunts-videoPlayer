var videoSource = new Array();
videoSource[0] = './video/trailer.mp4';
Addvideo = {key:1, dir:'./video/ad_videos/KFC Rockin Commercial 10 Sec.mp4'};
let key = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById("videos");
 
function playVideo(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.setAttribute("type",'video/mp4');
    element.autoplay = true;
    element.load();
    element.play();
}
function add()
 {
     element.setAttribute("src", Addvideo.dir);
     element.setAttribute("type",'video/mp4');
     element.load();
     element.play();
     console.log("working");
    
 }

 const ad=setTimeout((add),30000);