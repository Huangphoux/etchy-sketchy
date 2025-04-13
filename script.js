const container = document.querySelector(".container");

for (let width = 0; width < 16; width++) {
    for (let height = 0; height < 16; height++) {
        const item = document.createElement("div");

        // set class="item", not style=.item
        item.setAttribute("class", "item");

        container.appendChild(item);
    }
}
