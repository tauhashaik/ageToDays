let input = document.getElementById('input');
let output = document.getElementById('output');
let calcbtn = document.getElementById('calcbtn');

calcbtn.addEventListener('click', ageToDays)

function ageToDays(){
    new Date().getDay()
    let age = parseInt(ageInput.value);
    if(!isNaN(age)){
        let days = age *365;
    daysOutput.value = days;
    } else{
        alert(`Please enter a number.`)
    }
}

