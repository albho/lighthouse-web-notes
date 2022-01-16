const obj = {
  title: "happy",
  numbers: [1, 2, 3],
  func() {
    console.log(this.title);
  },
  trad: function () {
    console.log(this.title);
  },
  arrow: () => {
    console.log(this.title);
  },
  showNums() {
    this.numbers.forEach(function (num) {
      console.log(this.title, num);
    });
  },
  showNumsArrow() {
    this.numbers.forEach(num => console.log(this.title, num));
  },
};

// obj.func(); // happy
// obj.trad(); // happy
// obj.arrow(); // undefined
// obj.showNums(); // undefined 1, undefined 2, undefined 3
// obj.showNumsArrow(); // happy 1, happy 2, happy 3
