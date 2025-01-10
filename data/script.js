fetch("test.txt")
    .then((data) => data.text())
    .then((res) => console.log(res));

async function fetchData() {
    const data = await fetch("test.txt");
    const res = await data.text();
    console.log();
}
fetchData();

//console.log("読み込みデータ");
