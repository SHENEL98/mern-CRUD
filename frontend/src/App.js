import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent'
import AllStudents from './components/AllStudents';
import UpdateStudent from './components/UpdateStudent';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    
    <Router>
      <div>
        <Header/> 
        <Routes>
          <Route path="/" element={<AllStudents />} /> 
          <Route path="/add" element={<AddStudent />} /> 
          <Route path="edit/:id" element={<UpdateStudent />} />
        </Routes>

      </div>
    </Router>
    
  );
}

export default App;
