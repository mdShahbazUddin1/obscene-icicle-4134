let creatAcnt = document.getElementById("create");
let body = document.querySelector("body")
let loginPopUp = document.getElementById("login");
let close_popUp = document.getElementById("close")

// slider

const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".prev-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// 
creatAcnt.addEventListener("click", () => {
  loginPopUp.style.display = "block";
  // body.style.position="fixed"
});

close_popUp.addEventListener("click",()=>{
    loginPopUp.style.display = "none"
// body.style.position = "";
})
