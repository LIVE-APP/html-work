function msg2(){
//if((navigator.userAgent.match(/Windows/i)) || (navigator.userAgent.match(/Windows/i))) {
//window.location="livetalk_win64.exe";
//}
if (navigator.userAgent.indexOf("WOW64") != -1 || 
    navigator.userAgent.indexOf("Win64") != -1 ){
window.location="livetalk_win64.exe";
 } else {
window.location = "livetalk-Setup_win32.exe";  
}

//Linux Version:
if(navigator.userAgent.match(/Linux/i)) {
    window.location = "app/livetalk-0.14.1.deb";
}
//Mac Version:
if(navigator.userAgent.match(/Mac/i)) {
    window.location = "app/livetalk-0.14.1.dmg";
}
}
  function msg() {
            window.location="livetalk://open";
        }
