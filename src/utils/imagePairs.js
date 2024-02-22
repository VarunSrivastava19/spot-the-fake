export default class ImgList {
  imagePairs = [
    { real: `${1}-correct.png`, fake: `${1}-fake.png` },
    { real: `${2}-correct.png`, fake: `${2}-fake.png` },
    { real: `${3}-correct.png`, fake: `${3}-fake.png` },
    { real: `${4}-correct.png`, fake: `${4}-fake.png` },
    { real: `${5}-correct.png`, fake: `${5}-fake.png` },
    { real: `${6}-correct.png`, fake: `${6}-fake.png` },
    { real: `${7}-correct.png`, fake: `${7}-fake.png` },
    { real: `${8}-correct.png`, fake: `${8}-fake.png` },
    { real: `${9}-correct.png`, fake: `${9}-fake.png` },
    { real: `${10}-correct.png`, fake: `${10}-fake.png` },
  ];

  get images() {
    let currentIndex = this.imagePairs.length;
    let temp, randIdx;
    while (currentIndex !== 0) {
      randIdx = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temp = this.imagePairs[currentIndex];
      this.imagePairs[currentIndex] = this.imagePairs[randIdx];
      this.imagePairs[randIdx] = temp;
    }
    return this.imagePairs;
  }

  get randomImg() {
    let cp = this.imagePairs.slice(0);
    return function () {
      if (cp.length < 1) cp = this.imagePairs.slice(0);
      let index = Math.floor(Math.random() * cp.length);
      let pair = cp[index];
      cp.splice(index, 1);
      return {
        ...pair,
        remaining: cp.length,
      };
    };
  }
}
