import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import PopularMves from './components/PopularMves';
import OneMve from './components/OneMve'; 
import { TMDBProvider } from './contexts/TMDBContext';
import TopRatedMovies from './components/TopRatedMovies';

function App() {
  return (
    <TMDBProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TopRatedMovies  allView={false} />} />
          <Route path="/toprated" element={<TopRatedMovies  allView={true} />} />
          <Route path="/movie/:id" element={<OneMve />} /> 
        </Routes>
      </Router>
    </TMDBProvider>
  );
}

export default App;
