//Runtime: 252 ms; mem: 50.7 MB


var intToRoman = function(num) {      
    
    let highestPower = Math.floor(Math.log10(num));
    let constructionArray = [];
    
    if (highestPower >= 3) {
        let count = Math.floor((num / 1000));
        constructionArray.push("M".repeat(count));
        num -= (count * 1000);
        highestPower = Math.floor(Math.log10(num));
    }
    
    if (highestPower === 2) {
        if (num >= 900) {
            constructionArray.push("CM")
            num -= 900;
        }
        if (num >= 500 && num < 900) {
            constructionArray.push("D")
            num -= 500;
        }
        if (num >= 400 && num < 500) {
            constructionArray.push("CD")
            num -= 400;
        }
        if (num < 400 && num > 99) {
            let count = Math.floor((num / 100));
            constructionArray.push("C".repeat(count));
            num -= (count * 100);
        }
        
        highestPower = Math.floor(Math.log10(num));
    }
    
    if (highestPower === 1) {
        if (num >= 90) {
            constructionArray.push("XC");
            num -=  90;
        }
        if (num >= 50 && num < 90) {
            constructionArray.push("L");
            num -= 50;
        }
        if (num >= 40 && num < 50) {
            constructionArray.push("XL");
            num -= 40;
        }
        if (num < 40 && num > 9) {
            count = Math.floor(num / 10);
            constructionArray.push("X".repeat(count));
            num -= (count * 10);
        }
        highestPower = Math.floor(Math.log10(num));
    }
    
    if (highestPower === 0) {
        if (num === 9) {
            constructionArray.push("IX");
            num -= 9;
        }
        
        if (num >= 5 && num < 9) {
            constructionArray.push("V");
            num -= 5;
        }
        if (num === 4) {
            constructionArray.push("IV");
            num -= 4;
        }
        if (num < 4 && num >= 1) {
            constructionArray.push("I".repeat(num));
            num -= num;
        }
        highestPower = -1;
    }
    
    console.log(num, constructionArray, highestPower)
    return constructionArray.join("");
};