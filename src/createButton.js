const createButton = (container, color) => {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.classList.add('btn')
    const colorText = document.createTextNode(color);
    btn.style.backgroundColor = color;
    btn.appendChild(colorText);
    container.appendChild(btn);
};

export { createButton };