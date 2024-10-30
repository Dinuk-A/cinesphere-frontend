import './App.css';
import PopularMves from './components/PopularMves';
import { TMDBProvider } from './contexts/TMDBContext';

function App() {
  return (

    <TMDBProvider>
      <PopularMves></PopularMves>
    </TMDBProvider>

  );
}

export default App;
