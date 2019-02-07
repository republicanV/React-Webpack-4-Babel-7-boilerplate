import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Minimal React Webpack 4 Babel 7 boilerplate';

ReactDOM.render(
    <div>{ title }</div>,
    document.getElementById('app')
);

module.hot.accept();