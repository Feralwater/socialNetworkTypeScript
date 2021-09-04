import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import stor from "./redux/state";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                state={stor.getState()}
                dispatch={stor.dispatch.bind(stor)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree();

store.subscribe(rerenderEntireTree)