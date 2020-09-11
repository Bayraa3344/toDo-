var clicked = true;
function create() {
  if (clicked === true) {
    var inpValue = document.getElementById("text").value;
    var p = document.createElement("p");
    var btn = document.createElement("button");

    btn.style.position = "absolute";
    btn.style.marginLeft = "150px";
    btn.style.marginTop = "-37px";
    btn.onclick = function () {
      p.innerHTML = "";
      btn.style.display = "none";
    };
    if (inpValue === "") {
      p.innerHTML = "";
      btn.style.display = "none";
    }
    btn.innerHTML = "Delete it";
    //   btn.style.p ="absolute";
    p.innerHTML = inpValue;
    document.getElementById("added").append(p);
    document.getElementById("added").append(btn);
  }
  console.log(inpValue);
  console.log(p);
  console.log(clicked);
}
