function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
        const element = document.createElement('div')
        element.innerHTML = _.join(['Hello', 'Webpack'], ' ')
        return element
    })
}

getComponent().then(component => {
    document.body.appendChild(component);
})