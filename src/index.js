module.exports = function check(str, bracketsConfig) {
    let result;
    if (str.length % 2 !== 0) {
        result = false;
    }

    const map = new Map(bracketsConfig);
    let stack = [];
    const arr = str.split('');
    arr.forEach((el, i) => {
        if (map.has(el) && !(el === stack[stack.length - 1] && el === map.get(el))) {
            stack.push(el);
        } else if (el === map.get(stack[stack.length - 1])) {
            stack.pop();
        }
    });

    if (stack.length === 0 && str.length % 2 === 0) {
        result = true;
    } else {
        result = false;
    }
    console.log(result, stack);
    return result;
}
