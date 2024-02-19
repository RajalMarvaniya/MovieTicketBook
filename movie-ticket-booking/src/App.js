import Index from './component/index';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import AddMovieForm from './component/AddMovieForm';


function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Index/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/addmovieform" element={<AddMovieForm/>} />
    </Routes>
    </Router>
    </>
    
  );
}

export default App;
