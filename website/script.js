//window.onload = fetchCount;

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
//const nowLocale = now.toLocaleString('en-US');
const nowUTC = now.toUTCString();
//document.getElementById('date').innerHTML = "Today is " +   nowUTC ;
document.getElementById('date').innerHTML = nowUTC ;
setInterval();
//console.log("Today: " +now);
 }



  //alert("starting main script");
 console.log("starting main script");

function fetchCount() {

  //alert("inside fetchcount");

const worker = new Worker("worker.js");

  //alert("worker initialized");

worker.onmessage = function(event) {

 // alert("Got: " + event.data);
 console.log("Received result back from worker.js: " + event.data);

// document.getElementById("visitor_count").innerHTML = "You're guest # " +   event.data + " to check out my profile page !";
document.getElementById("visitor_count").innerHTML = event.data;

 }

 // alert(" posting msg to worker");
 console.log("posting msg to worker.js");

apiUri='https://7l2enkiaj0.execute-api.ap-south-1.amazonaws.com/Stage/visits';
worker.postMessage(apiUri);


//alert("terminating web worker from main script");
// immediately terminate the main JS file
//worker.terminate();
}



function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
