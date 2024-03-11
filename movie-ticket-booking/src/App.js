import Index from './component/index';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import AddMovieForm from './component/AddMovieForm';
import Movie from './component/Movie';
import AddTheater from './component/AddTheater';
// import MoviesPage from './component/MoviesPage';
// import BookingForm from './component/BookingForm';
import Navbar from './component/Navbar';
import MainContent from './component/MainContent';
import UpdateT from './component/UpdateT';
import ShowMovies from './component/ShowMovies';
import Movieupdate from './component/Movieupdate';
import MovieBookingForm from './component/MovieBookingForm';
import Congrats from './component/Congrats';
// import Navigation from './component/Navigation';
// import TheaterTableRow from './component/TheaterTableRow';
// import EditTheater from './component/EditTheater';


function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Index/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/addmovie" element={<AddMovieForm/>} />
    <Route path="/addTheater" element={<AddTheater/>} />
    <Route path="/movie" element={<Movie/>} />
    <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/maincontent" element={<MainContent/>}/>
    <Route path="/updatet" element={<UpdateT/>}/>
    <Route path="/showmovie" element={<ShowMovies/>}/>
    <Route path="/updatemovie" element={<Movieupdate/>}/>
    <Route path="/movietbookingform" element={<MovieBookingForm/>}/>
    <Route path="/congrats" element={<Congrats/>}/>
    </Routes>
    </Router>
    </>
    
  );
}

export default App;
