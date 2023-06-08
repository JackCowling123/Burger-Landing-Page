const cookieContainer = document.getElementById('cookie-container');
const cookieButton = document.getElementById('cookie-btn');

setTimeout(ActivateClass,1000);

function ActivateClass() {
    cookieContainer.style.bottom="0";
}

cookieButton.addEventListener("click", DeactivateClass);

function DeactivateClass(){
    cookieContainer.style.bottom="-100%";
}