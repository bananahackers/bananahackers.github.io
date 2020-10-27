var video = document.querySelector("video");
navigator.mediaDevices.getUserMedia({video: {mediaSource: "screen"}}).then(stream => {
  video.srcObject = stream;
  video.play();
});
