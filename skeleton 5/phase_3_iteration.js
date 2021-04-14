Array.prototype.bubbleSort = function () {
    let unsorted= true; 
    while (unsorted) {
        unsorted = false;
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = i + 1; j < this.length; j++) {
                if (this[i] > this[j]) {
                    [this[i], this[j]] = [this[j], this[i]];
                    unsorted = true;
                }
            }
        }
    }
    return this; 
};

String.prototype.subStrings = function () {
    let subarray = [];
    
}