// script.js

document.getElementById('download-btn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href="https://1drv.ms/i/s!AnT3uLNkdb5ogg7KKXihjWBcO8t0?e=cwkiwU";//The url of the file to download
    link.download ='rsume.jpg'; // The name of the downloaded file
    link.click();
})