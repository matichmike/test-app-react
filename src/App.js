import React, { useState, useEffect } from "react";
import { getPatients } from "./services";
import Table from './components/Table';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
  const [patients, setPatients] = useState("");

  useEffect(() => {
    getPatients().then((res) => {
      setPatients(res.data.entry);
    });
  }, []);
    
  return (
    <div className="App">
      {!patients
        ? <Loader 
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
      />
        : <Table 
        patients={patients}
      />
  }
    </div>
    
    
  )
  
}

export default App;
