import React from 'react';
import ReactDOM from 'react-dom';

const applesPrice = React.createElement('li', {}, '$1.75 per lb');
const apples = React.createElement('ul', {}, applesPrice);

const orangesPrice = React.createElement('li', {}, '$.75 per lb');
const oranges = React.createElement('ul', {}, orangesPrice);

const mangosPrice = React.createElement('li', {}, '$1.25 per lb');
const mangos = React.createElement('ul', {}, mangosPrice);

ReactDOM.render(
    React.createElement(
        'ul', 
        {}, 
        React.createElement('li', {}, 'apples', apples),
        React.createElement('li', {}, 'oranges', oranges),
        React.createElement('li', {}, 'mangos', mangos)
    ), 
    document.getElementById('root')
);
