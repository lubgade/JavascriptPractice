function isPalindrome(str){
    str = str.replace(/\W/g, '').toLowerCase();
    console.log(str);
    return(str == str.split('').reverse().join(''));
}

console.log(isPalindrome('A car, a man, a maraca'));
console.log(isPalindrome('any other string'));

