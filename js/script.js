document.addEventListener('DOMContentLoaded', () =>{

    const birthDate = new Date('16 June')
    birthDate.setFullYear(birthDate.getFullYear() + 22)
    
    const hours = document.querySelector('.timer__hours__time');
    const minutes = document.querySelector('.timer__minutes__time');
    const seconds = document.querySelector('.timer__seconds__time');
    const days = document.querySelector('.timer__days__time');

    const hoursText = document.querySelector('.timer__hours__text');
    const minutesText = document.querySelector('.timer__minutes__text');
    const secondsText = document.querySelector('.timer__seconds__text');
    const daysText = document.querySelector('.timer__days__text');

    const getWords = (time, t1, t2, t3) =>{
        if(time > 4 && time < 21 ) return t3;
        else
        {   
            time %= 10
            switch(true)
            {
            case time == 1: return t1;
            case time > 1 && time < 5: return t2;
            default: return t3;
            }
        }
        
        
    }

    const getDate = () =>{
        const currentDate = new Date();
        let countDays = Math.floor(Math.abs((currentDate - birthDate) / 1000 / 60 / 60 / 24 ));
        let countMinutes = Math.floor(Math.abs(currentDate - birthDate) / 1000 / 60 ) % 60;
        let countHours = Math.floor(Math.abs(currentDate - birthDate) / 1000 / 60 / 60 ) % 24;
        let countSeconds = Math.floor(Math.abs(currentDate - birthDate) / 1000 ) % 60;
        
        hours.textContent = countHours;
        minutes.textContent = countMinutes;
        seconds.textContent = countSeconds;
        days.textContent = countDays;

        daysText.textContent = getWords(countDays,'день', 'дня', 'дней');
        minutesText.textContent = getWords(countMinutes, 'минута', 'минуты', 'минут');
        hoursText.textContent = getWords(countHours, 'час', 'часа', 'часов');
        secondsText.textContent = getWords(countSeconds, 'секунда', 'секунды', 'секунд');

    }

    setInterval(getDate, 1000);
    
})






