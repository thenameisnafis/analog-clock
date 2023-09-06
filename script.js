const degree = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () =>{
    let day = new Date();
    let hh = day.getHours() *30;
    let mm = day.getMinutes() * degree;
    let ss = day.getSeconds() * degree;

    hour.style.transform= `rotate(${hh + mm / 12}deg)`;
    min.style.transform= `rotate(${mm}deg)`;
    sec.style.transform= `rotate(${ss}deg)`;

    var x = document.getElementById("myAudio");
    x.play();
}

setClock();
setInterval(setClock,1000);

const switchTheme = (event) =>{
    const switchbtn = event.target;
    if(switchbtn.textContent.toLowerCase() === "light"){
        switchbtn.textContent = "dark";
        document.documentElement.setAttribute("data-theme", "dark");
    }else{
        switchbtn.textContent = "light";
        document.documentElement.setAttribute("data-theme", "light");
    }    
}

const switchModebtn = document.querySelector (".switch-btn");
switchModebtn.addEventListener("click", switchTheme, false);


let currentTheme = "dark";

if(currentTheme){
    document.documentElement.setAttribute("data-theme", currentTheme);
    switchModebtn.textContent = currentTheme;
}