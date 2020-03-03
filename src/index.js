module.exports = function check(str, bracketsConfig) {
    
    let newConfigArr = bracketsConfig.map(function(item) {
        return item.join("");
    })

    let reducedLength = str.length / 2;
    let i = 0;
    while (i < reducedLength) {
        for (let j = 0; j < newConfigArr.length; j++) {
            str = str.replace(newConfigArr[j], "");
        }
        i++;
    } 
    
    return (str.length == 0) ? true : false;
}
