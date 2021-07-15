import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/SearchBar/SearchBar';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>Soundnode</h1>
      <Searchbar />
      <MusicPlayer />
    </div>
  );
}

export default App;
