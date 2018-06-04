<body onload="getMobileOperatingSystem()">
<script>
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) 
       //do something for android
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) 
        //do something for ios
    else if (/windows phone/i.test(userAgent))
      alert("Windows Phone ! Seriously?")
    else
      alert("This is your regular website"); 
}
</script>
