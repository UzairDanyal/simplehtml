// var data = [
//   { name: "uuu", email: "u@gmail" },
//   { name: "ooo", email: "o@gmail" },
//   { name: "iii", email: "i@gmail" },
//   { name: "jjjjjjj", email: "jjjjjj@gmail" },
// ];

// const tbl = document.createElement("table");
// var tr, td;

// const path = "https://dog.ceo/api/breeds/image/random";

const path = "https://dog.ceo/api/breeds/image/random";

function remove() {
  this.remove();
  console.log("remove");
}

function addToFavorites() {
  let check = true;
  console.log(this);
  const clone = this.cloneNode(true);
  console.log(clone);
  const children = document.getElementById("favorites").children;
  const newAdd = clone.getAttribute("src");
  if (children.length) {
    for (var i = 0; i < children.length; i++) {
      const curr = children[i].getAttribute("src");
      if (curr == newAdd) {
        check = false;
        console.log("exist");
        break;
      }
    }
  }
  if (!children.length || check) {
    clone.addEventListener("click", remove);
    document.getElementById("favorites").appendChild(clone);
    console.log("added");
  }
}


async function main(p) {
  const res = await fetch(p);
  const finalr = await res.json();
  console.log(finalr);
  const img = document.createElement("img");
  img.setAttribute("src", finalr.message);
  img.addEventListener("click", addToFavorites);
  document.getElementById("root").appendChild(img);
}

for (var i = 0; i < 10; i++) {
  main(path, i);
}
//main(path);

// const finalr = main().then((x) => {console.log(x.message)
//     const img = document.createElement('img');
//     img.setAttribute("src",x.message)
//     document.getElementById('root').appendChild(img);
//  })

// for (var i = 0; i < 10; i++) {
//   const finalr = main().then((x) => {console.log(x.message)
//     const img = document

// });
// }

// for (var i = 0; i < 10; i++) {
//   var path = "";

//   var img = document.createElement("img");
//   img.src = path;
// }

// of is for object

// for (const row of data) {
//   tr = document.createElement("tr");

//   // in is for array
//   for (const key in row) {
//     if (Object.hasOwnProperty.call(row, key)) {
//       const value = row[key];
//       console.log(value);
//       td = document.createElement("td");
//       td.innerText = value;
//       tr.appendChild(td);
//       tbl.appendChild(tr);
//     }
//   }
// }

// for(var i=0; i<data.length; i++){
//     console.log(data[i].name);
//     tr = document.createElement("tr");
//     td = document.createElement("td");
//     td.innerText = data[i].name;
//     tr.appendChild(td);
//     tbl.appendChild(tr);
// }
