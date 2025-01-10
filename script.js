fetch("test.txt")
    .then((data) => data.text())
    .then((res) => console.log(res));

console.log("読み込みテスト")