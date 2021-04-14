function print(num) {
  return (num = num + 1);
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
