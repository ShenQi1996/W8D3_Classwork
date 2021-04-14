function print(num) {
  return num;
}

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  let anser = [];
  //   anser.push(this.myEach(test1));
  this.myEach(function (ele) {
    anser.push(callback(ele));
  });
  return anser;
};

Array.prototype.myReduce = function (callback, acc) {
  let answer = 0;
  if (typeof acc === "undefined") {
    acc = this[0]
  } else {
    this.unshift(acc)
  };


  this.myEach(function (ele) {
    answer = answer + ele;
  });

  return answer; 
}

