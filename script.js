const container = document.querySelector(".container");

const itemSize = 50;

for (let width = 0; width < 16; width++) {
    for (let height = 0; height < 16; height++) {
        const item = document.createElement("div");

        item.style.width = itemSize + "px";
        item.style.height = itemSize + "px";
        item.style.backgroundColor = "white";

        // set class="item", not style=.item
        item.setAttribute("class", "item");

        container.appendChild(item);
    }
}

container.style.width = itemSize * 16 + "px";
container.style.width = itemSize * 16 + "px";
