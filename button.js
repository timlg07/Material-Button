function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = (event.clientX - button.offsetLeft - radius) + "px";
    circle.style.top = (event.clientY - button.offsetTop - radius) + "px";
    circle.classList.add("ripple");

    circle.addEventListener('animationend', button.removeChild.bind(button, circle));

    button.appendChild(circle);
}

addEventListener('load', () => {
    const buttons = document.getElementsByClassName("ripple-button");
    for (const button of buttons) {
        button.addEventListener("click", createRipple);
    }
});
