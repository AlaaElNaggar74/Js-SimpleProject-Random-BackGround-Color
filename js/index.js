let bacbody = document.getElementsByClassName("smaldiv");
let heder = document.getElementsByClassName("ghed");
let but = document.getElementById("but");

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];

function genrat() {
  for (let i = 0; i < bacbody.length; i++) {
    let x = arr[Math.round(Math.random() * (arr.length - 1))];
    let x1 = arr[Math.round(Math.random() * (arr.length - 1))];

    let y = arr[Math.round(Math.random() * (arr.length - 1))];
    let y1 = arr[Math.round(Math.random() * (arr.length - 1))];

    let c = arr[Math.round(Math.random() * (arr.length - 1))];
    let c1 = arr[Math.round(Math.random() * (arr.length - 1))];

    let qw = `#${x}${x1}${y}${y1}${c}${c1}`;

    bacbody[i].style.backgroundColor = qw;
    heder[i].innerHTML = qw;
  }
}



but.addEventListener("click", () => {
  genrat();
});
