import { useState, useEffect } from 'react';

import CardMovie from '../components/CardMovie';
import CardMoreMovie from '../components/CardMoreMovie';

import Carousel from '../components/Carousel';

const moviesURL = import.meta.env.VITE_API;
const key = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [nowMovies, setNowMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  const getMovies = async (url, setState) => {
    const response = await fetch(url);
    const data = await response.json();

    setState(data.results);
  };

  useEffect(() => {
    const nowMoviesURL = `${moviesURL}now_playing?${key}&language=pt-BR`;
    const topRatedURL = `${moviesURL}top_rated?${key}&language=pt-BR`;
    const popularURL = `${moviesURL}popular?${key}&language=pt-BR`;

    getMovies(nowMoviesURL, setNowMovies);
    getMovies(topRatedURL, setTopRated);
    getMovies(popularURL, setPopular);
  }, []);

  return (
    <>
      {nowMovies.length === 0 && (
        <p className="text-center text-white font-display font-semibold text-xl pt-8">
          Carregando filmes...
        </p>
      )}
      {nowMovies.length > 0 && (
        <Carousel title="lançamentos">
          {nowMovies.map((movie) => (
            <CardMovie movie={movie} key={movie.id} />
          ))}
          <CardMoreMovie />
        </Carousel>
      )}

      {topRated.length === 0 && (
        <p className="text-center text-white font-display font-semibold text-xl pt-8">
          Carregando filmes...
        </p>
      )}
      {topRated.length > 0 && (
        <Carousel title="mais votados">
          {topRated.map((movie) => (
            <CardMovie movie={movie} key={movie.id} />
          ))}
          <CardMoreMovie />
        </Carousel>
      )}

      {popular.length === 0 && (
        <p className="text-center text-white font-display font-semibold text-xl pt-8">
          Carregando filmes...
        </p>
      )}
      {popular.length > 0 && (
        <Carousel title="populares">
          {popular.map((movie) => (
            <CardMovie movie={movie} key={movie.id} />
          ))}
          <CardMoreMovie />
        </Carousel>
      )}
    </>
  );
};
export default Home;
