function getComponent() {
    return import(/* webpackChunkName: "another" */ './another').then(({default: fn}) => {
        const element = document.createElement('div')
        element.innerHTML = fn()
        return element
    })
}

getComponent().then(component => {
    document.body.appendChild(component);
})