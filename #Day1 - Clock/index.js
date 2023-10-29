const hrHand=document.querySelector('#hrH');
const minHand=document.querySelector('#minH');
const secHand=document.querySelector('#secH');

const hr = document.getElementById("hr");
const mn = document.getElementById("min");
const sc =  document.getElementById("sec");
const ampm= document.getElementById("ampm");

const setClock=(() => {
    let date = new Date();
let hh=date.getHours()*30;
// alert(`${hh}`);
let mm=date.getMinutes()*6;
let ss=date.getSeconds()*6;

hrHand.style.transform = `rotateZ(${hh +(mm/12)}deg)`;
minHand.style.transform = `rotateZ(${mm}deg)`;
secHand.style.transform = `rotateZ(${ss}deg)`;

});

const setTime=(()=>{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    let am= h>=12 ? 'PM':'AM';
    if(h>12) h=h-12;
    h=(h<10) ? '0'+h :h;
    m=(m<10) ? '0'+m :m;
    s=(s<10) ? '0'+s :s;
    // ampm= ampm>12 ? 'PM':'AM';
    hr.innerHTML=h;
    mn.innerHTML=m;
    sc.innerHTML=s;
    ampm.innerHTML=am;
   

    
})

setInterval(setClock,1000);
setInterval(setTime,1000);


