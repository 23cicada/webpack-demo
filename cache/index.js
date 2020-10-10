import _ from 'lodash';
// import dayjs from 'dayjs';
import Print from './print';

function component() {
    const element = document.createElement('div');
    // const time = dayjs().format('YYYY-MM-DD HH:mm:ss')
    // lodash，现在通过一个 script 引入
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
}

document.body.appendChild(component());