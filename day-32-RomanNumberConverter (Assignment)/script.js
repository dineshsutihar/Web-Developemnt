let number = document.getElementById('number');
let convertBtn = document.getElementById('convert-btn');
let output = document.getElementById('output');


convertBtn.addEventListener('click', function () {
    let num = number.value;
    console.log(num);
    if (num === '' || isNaN(num)) {
        setStyleIncorrect();
        output.innerText = 'Please enter a valid number.'
    }else if (num < 1) {
        setStyleIncorrect()
        output.innerText = 'Please enter a number greater than or equal to 1.'
    } else if (num > 3999) {
        setStyleIncorrect()
        output.innerText = 'Please enter a number less than or equal to 3999.'
    }
    else {
        output.style.display = 'block';
        output.style.backgroundColor ='#3B3B4F';
        output.style.color = '#fff';
        output.style.borderColor='#fff';
        output.style.textTransform = 'uppercase';
        output.innerHTML = romanize(num);
    }
});

function setStyleIncorrect(){
    output.style.display = 'block';
    output.style.backgroundColor ='#FFADAD';
    output.style.color = '#850000';
    output.style.borderColor='#850000';
}

function romanize(num) {
    let roman = '';
    let romanNumList = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let a;
    for (let key in romanNumList) {
        a = Math.floor(num / romanNumList[key]);
        if (a >= 0) {
            for (let i = 0; i < a; i++) {
                roman += key;
            }
        }
        num = num % romanNumList[key];
    }
    return roman;

}