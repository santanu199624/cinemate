import  Allroutes  from "./routes/Allroutes";

import './App.css';
import Header from "./components/Header";
import {Footer} from "./components/Footer";

export function App() {
  return (
    <div className="App">
      <Header />
      <Allroutes />
      <Footer />
      
    </div>
  );
}


