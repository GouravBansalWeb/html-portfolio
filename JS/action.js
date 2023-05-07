alert("Welcome to Gourav's Portfolio");



function date()
{
var d=new Date();
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
var dat=d.getDate();
var mth=d.getMonth();
var yr=d.getFullYear();
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dy=days[d.getDay()];
var session="Am";
if (dat<=12)
{
    session="Pm";
}
if(h>12)
{
h=h-12;
}
var hour=(h<10) ? "0"+h:h;
var minute=(m<10)?"0"+m:m;
var second=(s<10)?"0"+s:s;
var dat=(dat<10)?"0"+dat:dat;
var mth=(mth<10)?"0"+mth:mth;


document.getElementsByTagName("h5")[0].innerText="Date "+" "+":-" +" "+dat+"/"+mth+"/"+yr;
document.getElementsByTagName("h5")[1].innerText="Time "+" "+":-" +" "+hour+":"+minute+":"+second+" "+session+" ";
document.getElementsByTagName("h5")[2].innerText=" Day"+" "+":-"+" "+dy ;
    setTimeout(date,1000);
}
