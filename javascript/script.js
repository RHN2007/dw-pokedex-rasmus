import Header from "./components/Header.js";

const rootElement = document.querySelector("#root")



function render() {
    rootElement.append(Header())
}

function init() {
    render()
}

init()