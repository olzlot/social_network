import React from 'react';
import { Route} from 'react-router-dom';
import s from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { StoreType } from './redux/store';
 
type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {

  const state = props.store.getState() 
  const {dialogsPage, profilePage, sidebar} = state

  return (
   
      <div className={s.App}>
        <Header />
        <NavBar sidebar={sidebar}/>
        <div className={s.content}>
          <Route path='/profile' render={() => <Profile data={profilePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
          <Route path='/dialogs' render={() => <Dialogs data={dialogsPage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
        </div>
      </div>
  );
}

export default App;
