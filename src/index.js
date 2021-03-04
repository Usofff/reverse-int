module.exports = function reverse (n) {
    if(n<0){
        n=Math.abs(n);
    }
    let str = n.toString();
    let arr = [];
    arr = str.split('');
    arr.reverse();
    str= arr.join('');
    return +str;
}
