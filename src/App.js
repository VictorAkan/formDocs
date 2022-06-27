import Navbar from "./components/SplitScreen"
import './App.css';
// import SideBar from "./components/SideBar";
import UncontrolledForm from "./Pages/UncontrolledForm";
import Introduction from "./Pages/Intro";
import { useState } from "react";
import ControlledForm from "./Pages/ControlledForm";
import Onboarding from "./onboarding"
import { Routes,Route } from "react-router-dom"
import Counter from "./Pages/Counter";
import Docs from "./Pages/Docs"
import Home from "./Pages/Home"



function App() {
  const [formValue, setFormValue] = useState()
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    setFormValue('')
  }
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} className="d-flex" >
        {/* <Route index element={<SideBar />}/> */}
        <Route path="/docs" element={<Introduction />} />
        <Route path="/docs/fPage" element={<UncontrolledForm />} />
        <Route path="/docs/sPage" element={<ControlledForm formValue={formValue} onSubmit={onSubmit} />} />
        <Route path="/docs/tPage" element={<Onboarding />} />
        <Route path="/docs/dPage" element={<Counter />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
