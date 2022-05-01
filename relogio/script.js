const hoursHand= document.querySelector('.hand.hours')
const minutesHand= document.querySelector('.hand.minutes')
const secondsHand= document.querySelector('.hand.seconds')

const setRotation= (element, rotationPercetange) => {
    element.style.setProperty('--rotation', rotationPercetange * 360);
}

const setClock= () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    const hoursPercentage= (minutesPercentage + currentDate.getHours()) / 12;

    setRotation (secondsHand, secondsPercentage)    
    setRotation (minutesHand, minutesPercentage)    
    setRotation (hoursHand, hoursPercentage)    
}

setClock();

setInterval(setClock, 1000)