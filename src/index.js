function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Hello Webpack';

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = function() {
        alert('click!')
    };

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());