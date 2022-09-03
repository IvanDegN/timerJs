document.addEventListener('DOMContentLoaded', () =>{

    const birthDate = new Date('16 june 2002 19:00:00');
    console.log(birthDate);
    
    const hours = document.querySelector('.timer__hours__time');
    const minutes = document.querySelector('.timer__minutes__time');
    const seconds = document.querySelector('.timer__seconds__time');

    const hoursText = document.querySelector('.timer__hours__text');
    const minutesText = document.querySelector('.timer__minutes__time');
    const secondsText = document.querySelector('.timer__seconds__time');

    const getDate = () =>{
        const currentDate = new Date();
        console.log(currentDate);
    }
    
    getDate();
})

