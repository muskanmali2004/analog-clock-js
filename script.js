const deg=6;
const hr=document.querySelector('#hr');
const mn=document.querySelector('#mn');
const sc=document.querySelector('#sc');
setInterval(()=>{
    let day= new Date();
    let ms =day.getMilliseconds() *deg;
    let hh= day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss= day.getSeconds() * ms/1000;

    hr.Style.transform =`rotateZ(${(hh)+ (mm/12)}deg)`;
    mn.Style.transform =`rotateZ(${mm})`;
    mn.Style.transform =`rotateZ(${ss}deg)`;

},1000)
