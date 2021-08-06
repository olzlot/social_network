import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
// import state, { addNewPost, AppStateType, changeValue, subcriber } from './redux/state';


// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const state = store.getState() 

export const reRender = () => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
                {/* <App state={state} changeValue={store.changeValue.bind(store)} addNewPost={() => store.addNewPost()} /> */}
                {/*                changeValue={(post) => store.ChangeValue(post)}          ОДИН ЭФФЕКТ                     ОДИН ЭФФЕКТ */}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(reRender)


reRender()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
