function navbar() {
    const navbar = document.createElement("div");
    navbar.appendChild(makeBtn("home", 1));
    navbar.appendChild(makeBtn("menu", 2));
    navbar.appendChild(makeBtn("link", 3));
    return navbar;
}

function makeBtn(string, num) {
    const button = document.createElement("button");
    button.textContent = string;
    button.setAttribute("data-what", num);
    return button;
}

export default navbar;