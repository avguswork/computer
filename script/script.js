const timer = () => {
    const days = document.querySelector('#day')
    const hours = document.querySelector('#hour')
    const minutes = document.querySelector('#minute')
    const seconds = document.querySelector('#second')
    
    
    let day = 18;
    let hour = 18;
    let minute = 18;
    let second = 18;
    const counter = () => {
        
        // if(second >= 1){
        //     second = second - 1
        // }
        // else{
        //     second = 59
        //     minute = minute - 1
        // }

        // second >= 1? second = second - 1: second = 59 
        
        if(second >=1){
            second = second - 1
        }

        else{
            second = 59
            minute = minute - 1
            if(minute <= 0){
                minute = 59
                hour = hour - 1
                if(hour <= 0){
                    hour = 24
                    day = day - 1
                }
            }

            
            
        }
        
        
        console.log(second)
        seconds.innerHTML = second
        minutes.innerHTML = minute
        hours.innerHTML = hour
        days.innerHTML = day
    }
        setInterval(counter , 1000) 
    }
    

timer()