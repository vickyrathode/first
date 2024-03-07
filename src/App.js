import React, { useState } from 'react';
import Navbar from './components/NavBar';
import Alert from './components/Alert';
// import About from './components/About';
import Vikki from './components/Vikki';

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
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'light' ? 'white' : '#283150';
    showAlert(`${newMode} mode is enabled!`, 'success');
  };

  return (
    <div>
      <Navbar title="FIRST WEB" about="abouttextutile" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About mode={mode} /> */}
        <Vikki title1="Enter the text here to analyze below" showAlert={showAlert} mode={mode} />
      </div>
    </div>
  );
}

export default App;
