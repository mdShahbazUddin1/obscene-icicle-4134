let creatAcnt = document.getElementById("create");
let body = document.querySelector("body")
let loginPopUp = document.getElementById("login");
let close_popUp = document.getElementById("close")
creatAcnt.addEventListener("click", () => {
  loginPopUp.style.display = "block";
  body.style.position="fixed"
});

close_popUp.addEventListener("click",()=>{
    loginPopUp.style.display = "none"
body.style.position = "";
})
