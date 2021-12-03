import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import ContentDetail from './Page/ContentDetail';
import Movie from './Page/Movie';
import Search from './Page/Search';
import Trending from './Page/Trending';
import TvSeries from './Page/TvSeries';

function App() {
  return (
    <div className="App" id="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Trending/>} exact />
        <Route path="/movies" element={<Movie/>} exact/>
        <Route path="/series" element={<TvSeries/>} exact/>
        <Route path="/search" element={<Search/>} exact/>
        <Route path="/details/:type/:id" element={<ContentDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
