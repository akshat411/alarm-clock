function play() {
    var audio = new Audio('twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3');    
    audio.play();
    }

function optionplay(audioUrl) {
            var audio = new Audio(audioUrl);
            audio.play();
        }
    var dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var audioUrl = this.getAttribute('href');
            optionplay(audioUrl);
        });
    });
    
    
    
    var dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var audioUrl = this.getAttribute('href');
            optionplay(audioUrl);
        });
    });



    
const setalarm = (s)=>{
    let d= new Date().getTime()
    // document.getElementById('time').innerHTML= d.toTimeString()
    
    setInterval(() => {
        secondsleft=new Date().getTime()-(d+s*1000)
        if(secondsleft<0) {
            document.getElementById('alarm').innerHTML="Your alarm will be ringing in about: " +Math.floor(-secondsleft/1000)+ " sec" ;
            startTimer(Math.floor(-secondsleft/1000)); 
        }
    });

    setTimeout(() => {
        play()
        document.getElementById('alarm').innerHTML="Click on above if want to reset!"
    }, s*1000);
}

let buttons = document.getElementsByClassName('playbutton');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function () {
    let s=prompt("enter your alarm time!!")

 if(s){
     setalarm(parseInt(s))
    }
});
}

function startTimer(duration) {
    var timer = duration;
    var progressBar = document.querySelector('.progress-bar');
    var progressBarWidth = 0;

    var interval = setInterval(function () {
        progressBarWidth = (duration - timer) / duration * 100;
        progressBar.style.width = progressBarWidth + '%';

        if (--timer < 0) {
            clearInterval(interval);
        }
    }, 1000);
}
// startTimer();


let Button = document.getElementsByClassName('setAlarmButton');

for (let i = 0; i < Button.length; i++) {
    Button[i].addEventListener('click', function() {
        var alarmDescriptionInput = this.parentElement.querySelector('.form-control');
        var description = alarmDescriptionInput.value.trim();
        if (description) {
            alarmDescriptionInput.setAttribute('disabled', 'disabled');
            alarmDescriptionInput.setAttribute('placeholder', description);
            this.style.display = 'none';
        } else {
            alert('Please provide a description.');
        }
    });
}