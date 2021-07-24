//Main Script
window.addEventListener("load", myInit, true); function myInit(){
fetchCount();
todaysDate();
 };

function setInterval(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout(todaysDate,refresh)
}

function todaysDate() {
    var now = new Date();
    const nowUTC = now.toUTCString();
    document.getElementById('date').innerHTML = nowUTC ;
    setInterval();
 }

console.log("starting main script");

function fetchCount() {
    const worker = new Worker("worker.js");
    worker.onmessage = function(event) {
        console.log("Received result back from worker.js: " + event.data);
        document.getElementById("visitor_count").innerHTML = event.data;
    }
    console.log("posting msg to worker.js");
    apiUri='https://7l2enkiaj0.execute-api.ap-south-1.amazonaws.com/Prod/visits';
    worker.postMessage(apiUri);
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
