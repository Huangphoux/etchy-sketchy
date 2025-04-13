const container = document.querySelector(".container");

const itemSize = 30;

for (let width = 0; width < 16; width++) {
    for (let height = 0; height < 16; height++) {
        const item = document.createElement("div");

        item.style.width = itemSize + "px";
        item.style.height = itemSize + "px";
        item.style.backgroundColor =
            "color-mix(in srgb, Canvas, CanvasText 30%)";

        // set class="item", not style=.item
        item.setAttribute("class", "item");

        container.appendChild(item);
    }
}

container.style.width = itemSize * 16 + "px";
container.style.height = itemSize * 16 + "px";

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "white";
    });
});
