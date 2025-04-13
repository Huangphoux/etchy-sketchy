const container = document.querySelector(".container");

function makeGrid() {
    const items = document.querySelectorAll(".item");

    // delete old grid
    items.forEach((item) => {
        container.removeChild(item);
    });

    let itemNumber = prompt(
        "Enter the number of squares per side for the new grid.\nAny number larger than 100 will be rounded down to 100.",
        16
    );

    if (itemNumber > 100) {
        itemNumber = 100;
    }

    const itemSize = 500 / itemNumber;

    for (let width = 0; width < itemNumber; width++) {
        for (let height = 0; height < itemNumber; height++) {
            const item = document.createElement("div");

            item.style.width = itemSize + "px";
            item.style.height = itemSize + "px";
            item.style.backgroundColor =
                "color-mix(in srgb, Canvas, CanvasText 30%)";
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "white";
            });

            // set class="item", not style=.item
            item.setAttribute("class", "item");

            container.appendChild(item);
        }
    }
}

const button = document.querySelector("button");
button.addEventListener("click", makeGrid);
