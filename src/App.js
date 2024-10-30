import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PopularMves from './components/PopularMves';
import OneMve from './components/OneMve'; // Import the OneMve component
import { TMDBProvider } from './contexts/TMDBContext';

function App() {
  return (
    <TMDBProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PopularMves />} />
          <Route path="/movie/:id" element={<OneMve />} /> 
        </Routes>
      </Router>
    </TMDBProvider>
  );
}

export default App;
