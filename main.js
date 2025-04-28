
// Button
let time = document.querySelector(".time-view");
// Clock
let clock = document.querySelector("#clock");

time.addEventListener('click', () =>{
    if(clock.style.display === 'none'){
        clock.style.display = 'block';
    }else{
        clock.style.display = 'none';

    }
});


function displayTime() {
    let timeView = document.getElementById('timeView');
    console.log(timeView);
    let today = new Date();
    timeView.innerHTML = today.getHours() + ' hours : ' + today.getMinutes() + ' minutes : ' + today.getSeconds() + ' seconds';
    
    //Set Timeout
    setTimeout(displayTime,1000);
}

displayTime();

// function checkTime(){
//     resPhoto = document.querySelector('#resPhoto');
//     let today =  new Date();

//     if (today.getHours >= 5) {
        
//     }
// }
