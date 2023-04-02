let creatAcnt = document.getElementById("create");
let body = document.querySelector("body");
let loginPopUp = document.getElementById("login");
let close_popUp = document.getElementById("close");
let mainSection = document.getElementById("cdata");
creatAcnt.addEventListener("click", () => {
  loginPopUp.style.display = "block";
  // body.style.position="fixed"
});

close_popUp.addEventListener("click", () => {
  loginPopUp.style.display = "none";
  // body.style.position = "";
});

function Display() {
  fetch("Http://localhost:3000/tyre/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      mainSection.innerHTML = null;
      rendarData(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function rendarData(cardData) {
  const card = `
 <div class="card-data">
  ${cardData
    .map((item) => {
      return getData(
        item.image,
        item.brand,
        item.rating,
        item.brandImage,
        item.perfomance,
        item.stability,
        item.traction
      );
    }).join("")
  }

 </div>
  `;
  mainSection.innerHTML = card;
}

function getData(
  image,
  brand,
  rating,
  brandImage,
  perfomance,
  stability,
  traction
) {
  let card = `
   <div class="data-img">
    <img src=${image}alt="">
    </div>
    <div>
                            <img src=${brandImage} alt="">
                            <h2>${brand}</h2>
                            <div>${rating}</div>
                            <p>${perfomance}</p>
                            <p>${stability}</p>
                            <p>${traction}</p>
                         </div>

                         <div class="quotes">
                            <button class="h2">GET QUOTE</button>
                         </div>
  `;
  return card;
}
Display();
