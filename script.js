//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        squares.forEach((otherSquare) => {
            if (otherSquare !== square) {
                otherSquare.classList.add("coffee");
            }
        });
    });

    square.addEventListener("mouseout", () => {
        squares.forEach((otherSquare) => {
            otherSquare.classList.remove("coffee");
        });
    });
});
