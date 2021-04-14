
Array.prototype.uniq (array) {
    let answer = [];
    for (let i = 0, i < array.length, i++) {
        if !answer.includes(array[i]) {
            answer.push(array[i]);
        }
    }
    return answer; 
};

console.log([1,2,2,3,3,3.uniq()])