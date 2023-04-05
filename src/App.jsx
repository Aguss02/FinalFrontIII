import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DataContext from "./context/DataContext";
import { useState, useEffect } from "react";

function App() {
  const [dentistData, setdentistData] = useState([]);

  const fetchDentist = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setdentistData(data);
  };

  useEffect(() => {
    fetchDentist();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <DataContext.Provider value={dentistData}>
        <Outlet />
      </DataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
