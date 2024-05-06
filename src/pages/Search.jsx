import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardMovie from '../components/CardMovie';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchedMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-br`;

    getSearchedMovie(searchQueryURL);
  }, [query]);

  return (
    <main className="container">
      <section>
        <h2 className="text-white font-display font-medium text-l my-10">
          Esses são os resultados para:{' '}
          <span className="text-red-700">{query}</span>
        </h2>
        <div className="flex flex-none flex-wrap gap-8">
          {movies.length > 0 &&
            movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};

export default Search;
