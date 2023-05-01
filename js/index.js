const results = data;
const list = [];
const listContainer = document.getElementById("container");

function getList() {
  
  for (let i = 0; i < results.length; i++) {
    const data = results[i];
    const type1 = data.types[0].type.name;
    const type2 = data.types[1].type.name;
    const character = new Character(data.id, data.name, data.sprites.other["official-artwork"].front_default, [type1, type2]);
    list.push(character);
  
  }

  for(let i = 0; i < list.length; i++) {
    const character = list[i]
    listContainer.innerHTML += character.toHtml(i) 
  }
}
function selected(pos) {
  const character = list[pos]
  window.location.href = `./detail.html?id=${data.id}`
}

getList();

