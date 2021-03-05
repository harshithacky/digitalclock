let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let session = 'AM';
    if(hours >= 12){
        hours = hours - 12;
        session = 'PM';
    }
    
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;

    let today = date.toDateString();
    document.getElementById('date').innerHTML = today;
    document.getElementById('session').innerHTML = session;
}

setInterval(clock,1000);