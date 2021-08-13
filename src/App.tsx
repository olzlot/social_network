import { Route} from 'react-router-dom';
import s from './App.module.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
 


function App() {

  return (
   
      <div className={s.App}>
        <Header />
        <NavBar />
        <div className={s.content}>
          <Route path='/profile' render={() => <Profile/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        </div>
      </div>
  );
}

export default App;
