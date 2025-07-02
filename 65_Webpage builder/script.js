function createCard(title, cName, views, monthsOld, duration, thumbnail) {

  let viewStr;

  if (views < 1000000) {
    viewStr = views / 1000 + "K";
  } 
  else if (views >= 1000000) {
    viewStr = views / 1000000 + "M";
  }


  let html = `<div class="card">
                    <div class="image">
                       <img src="${thumbnail}" alt="" />
 
                       <div class="capsule">${duration}</div>
                    </div>
                    <div class="text">
                        <h1>${title}</h1>
                        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
                    </div>
                </div>   `;

  document.querySelector(".container").innerHTML += html;
  
}

createCard(
  "Phir Kabhi | Robin | Mobin",
  "TasteMusic",
  35467388,
  8,
  "6:23",
  "https://i.pinimg.com/736x/45/f9/b6/45f9b6f3b8a165ca74b9b212cb703d97.jpg"
);
