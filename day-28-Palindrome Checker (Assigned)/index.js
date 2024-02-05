const buttom = document.querySelector('#check-btn');
const inputText = document.querySelector('#text-input');
const resutl = document.querySelector('#result');

buttom.addEventListener('click', () => {
    const text = inputText.value;
    if (!text) {
        alert('Please input a value');
        return;
    }
    const result = isPalindrome(text);
    if (result) {
        resutl.innerHTML = `<b>${text}</b> is a palindrome.`;
        return;
    }else{
        resutl.innerHTML = `<b>${text}</b> is not a palindrome.`;
        return;
    }
    
});

function isPalindrome(text) {
    const cleanedText = text.replace(/\W/g, '').toLowerCase(); // remove all non-alphanumeric characters here W is for non-alphanumeric characters
    const reversedText = cleanedText.split('').reverse().join('');
    return cleanedText === reversedText;
}