let creatAcnt = document.getElementById("create");
let loginPopUp = document.getElementById("login");
let close_popUp = document.getElementById("close")
creatAcnt.addEventListener("click", () => {
  loginPopUp.style.display = "block";
});

close_popUp.addEventListener("click",()=>{
    loginPopUp.style.display = "none"
})
