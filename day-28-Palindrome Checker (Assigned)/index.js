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
    const cleanedText = text.replace(/[\W_]/g, '').toLowerCase(); // remove all non-alphanumeric characters and underscores
    const reversedText = cleanedText.split('').reverse().join('');
    return cleanedText === reversedText;
}