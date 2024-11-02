import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import OneMve from './components/OneMve';
import { TMDBProvider } from './contexts/TMDBContext';
import TopRatedMovies from './components/TopRatedMovies';
import ComingSoonMovies from './components/ComingSoonMovies';
import Dashboard from './pages/Home';

function App() {
  return (
    <TMDBProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Dashboard />} />

          <Route path="/toprated" element={<TopRatedMovies allView={true} />} />
          <Route path="/soonmovie" element={<ComingSoonMovies allView={true} />} />
          <Route path="/movie/:id" element={<OneMve />} />
        </Routes>
      </Router>
    </TMDBProvider>
  );
}

export default App;
