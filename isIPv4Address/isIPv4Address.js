function isIPv4Address(inputString) {
    let arr = inputString.split('.');
    if (arr.length !== 4) { return false}
    let min = 0;
    let max = 255;
    for (let i = 0; i < 4; i ++) {
        if (arr[i] === '') { return false }
        if (arr[i].length !== Number(arr[i]).toString().length) {return false}
        if (arr[i].search(/[a-zA-Z]/) !== -1) {return false}
        if (Number(arr[i]) < min || Number(arr[i]) > max) {return false}
    }
    return true;
}

export default isIPv4Address;