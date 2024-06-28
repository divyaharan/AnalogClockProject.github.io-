
function analog_clock(){
    let d=new Date();
    let hour=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();

    const hrrotation=(hour*30)+(0.5*min);
    const minrotation=(min*6);
    const secrotation=(sec*6);

    document.querySelector("#hours").style.transform= `rotate(${hrrotation}deg)`;
    document.querySelector("#minutes").style.transform=`rotate(${minrotation}deg)`;
    document.querySelector("#seconds").style.transform=`rotate(${secrotation}deg)`;
}
setInterval(analog_clock,1000);
analog_clock();


