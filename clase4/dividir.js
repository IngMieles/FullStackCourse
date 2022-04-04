const dividir = function (num1, num2){
    if(num2 !== 0){
        return num1 / num2;
    }
    return ('error division entre 0');
};

module.exports = dividir;