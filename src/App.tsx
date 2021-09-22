import { Redirect, Route} from 'react-router-dom';
import s from './App.module.css';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import  UsersContainer  from './components/Users/UsersContainer';
 


function App() {
  console.log('APP');
  
  return (
    <div className={s.App}>
        <Header />
        <NavBar />
        <div className={s.content}>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
        </div>
      </div>
  );
}

export default App;
