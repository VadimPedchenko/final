const clockDisplay = document.querySelector(".clock");
setInterval(
    () => (clockDisplay.innerText=new Date().toLocaleString()),
1000
);