Array.prototype.uniq = function () {
  let answer = [];
  for (let i = 0; i < this.length; i++) {
    if (!answer.includes(this[i])) {
      answer.push(this[i]);
    }
  }
  console.log(answer);
};

// [1, 2, 2, 3, 3, 3].uniq()

Array.prototype.twoSum = function () {
  let sum = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] == 0) {
        sum.push([i, j]);
      }
    }
  }
  console.log(sum);
};

Array.prototype.transpose = function () {
  //   let trans_a = new Array(this.prototype.length);
  let trans_a = [];
  for (let i = 0; i < this[0].length; i++) {
    trans_a.push([]);
  }
  for (let i = 0; i < this[i].length; i++) {
    for (let j = 0; j < this.length; j++) {
      trans_a[i][j] = this[j][i];
    }
  }
  console.log(trans_a);
};
