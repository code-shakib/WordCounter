import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';

      showAlert('Dark mode has been enabled', 'success');

      document.title = 'WordCounter - Dark Mode';

      // setInterval(() => {
      //   document.title = 'WordCounter - is Amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install WordCounter Now';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'WordCounter - Light Mode';
    }
  };

  return (
    <div className="App">
      {/* <Router> */}
      <NavBar title="WordCounter" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter text here for word count"
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
