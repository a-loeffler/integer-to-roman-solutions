//This has the fastest runtime so far: 136 ms, mem: 47.8 MB

var intToRoman = function(num) {
    
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
    
    let normalizedNum = (num + 10000).toString();
        
    let constructionArray = ["", "", "", ""];
    
    constructionArray[3] = hash[Number(normalizedNum[4])]
    
    constructionArray[2] = hash[Number(normalizedNum[3]) * 10]
    
    constructionArray[1] = hash[Number(normalizedNum[2]) * 100]
    
    constructionArray[0] = "M".repeat(Number(normalizedNum[1]))
    

    
    return constructionArray.join("");
    
};