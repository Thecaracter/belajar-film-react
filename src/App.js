
import './App.css';
import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from 'react';
const App = () => {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])
  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
        // <div key={i}>
        //   <div>{movie.title}</div>
        //   <div>{movie.poster_path}</div>
        //   <div>{movie.release_date}</div>
        //   <div>{movie.vote_average}</div>
        // </div>
        <div className='Movie-wrapper' key={i}>
          <div className='Movie-title'>{movie.title}</div>
          <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
          <div className='Movie-date'> Hadir {movie.release_date}</div>
          <div className='Movie-rate'>{movie.vote_average}</div>
        </div >
      )
    })
  }
  const search = async (q) => {
    if (q.length > 3) {
      const ngetik = await searchMovie(q)
      setPopularMovies(ngetik.results)

    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rizqi mantap</h1>
        <input
          placeholder='Cari disini Ngab'
          className='Movie-search'
          onChange={({ target }) => search(target.value)}></input>
        <div className='Movie-container'>

          <PopularMoviesList></PopularMoviesList>

        </div>
      </header>
    </div>
  );
}

export default App;
