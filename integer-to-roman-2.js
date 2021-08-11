//This method implemented a hash and broke down the number up front
//runtime: 160ms, mem: 47.2 MB

var intToRoman = function(num) {      
    let constructionArray = num.toString().split("");
    
    let string = "";
    
    let ones = Number(constructionArray[constructionArray.length - 1]);
    
    let tens = Number(constructionArray[constructionArray.length - 2] * 10);
    
    let hundreds = Number(constructionArray[constructionArray.length - 3] * 100);
    
    let thousands = Number(constructionArray[constructionArray.length - 4]);
    
    let hash = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        NaN: "",
        0: "",
    }
    
    return string + "M".repeat(thousands) + hash[hundreds] + hash[tens] + hash[ones]
    
};