setInterval(function(){
var currentTime = new Date();
var h = ("0"+currentTime.getHours()).slice(-2);
var m = ("0"+currentTime.getMinutes()).slice(-2);
var s = ("0"+currentTime.getSeconds()).slice(-2);
document.getElementById("clock").innerText = h+":"+m+":"+s;;
}, 1000);