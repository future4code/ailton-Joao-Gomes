import './App.css';
import FirstScreen from './Components/FirstScreen/FirstScreen';
import MatchScreen from './Components/MatchScreen/MatchScreen';
import { useState } from 'react';

function App(props) {

  const [actualScreen, setActualScreen] = useState("firstScreen")

  const changeScreen = () => {
    switch (actualScreen) {
      case "firstScreen":
        return <FirstScreen goToMatchScreen={goToMatchScreen}></FirstScreen>;
      case "matchScreen":
        return <MatchScreen goToFirstScreen={goToFirstScreen}></MatchScreen>
      
    }
  }

  const goToMatchScreen = () => {
    setActualScreen("matchScreen")
  }
  const goToFirstScreen = () => {
    setActualScreen("firstScreen")
  }

  return (
    
    
    <div>
      {changeScreen()}
    </div>


  );
}

export default App;
