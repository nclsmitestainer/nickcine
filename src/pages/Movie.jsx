import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Description from '../../public/description.svg?react';
import Star from '../../public/star.svg?react';
import Wallet from '../../public/wallet.svg?react';
import Graph from '../../public/graph.svg?react';
import Time from '../../public/time.svg?react';

const moviesURL = import.meta.env.VITE_API;
const key = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${key}&language=pt-BR`;
    getMovie(movieURL);
  });

  return (
    <main className="container text-white">
      {movie && (
        <>
          <section className="flex justify-between mt-10 gap-28">
            <div className="flex flex-none flex-col max-w-[520px]">
              <div className="w-full h-full">
                <img
                  className="rounded"
                  src={imageURL + movie.backdrop_path}
                  alt={movie.title}
                />
              </div>
              <h2 className="text-center mt-5 font-semibold font-display text-xl max-w-[500px]">
                {movie.title}
              </h2>
              <p className="text-center mt-2 font-medium text-base">
                {movie.tagline}
              </p>
              <ul className="flex justify-between mt-10">
                {movie.genres.map((genre) => (
                  <li
                    className="text-sm uppercase font-body font-bold"
                    key={genre.id}
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex max-w-[600px] flex-col">
              <p
                id="description"
                className="text-sm flex max-h-full gap-2 items-start justify-start"
              >
                <Description className="w-[22px] mt-[2px] h-[22px] flex-none" />
                {movie.overview}
              </p>

              <span
                id="vote"
                className="text-sm flex max-h-full gap-2 items-start justify-start mt-6"
              >
                <Star className="w-[22px] mt-[2px] h-[22px] flex-none" />
                {movie.vote_average.toFixed(1)}
              </span>
              <p
                id="budget"
                className="text-sm flex max-h-full gap-2 items-start justify-start mt-8"
                title="Orçamento"
              >
                <Wallet classname="w-[22px] mt-[2px] h-[22px]" />
                {movie.budget == 0
                  ? 'Sem informações'
                  : formatCurrency(movie.budget)}
              </p>
              <p
                id="revenue"
                className="text-sm flex max-h-full gap-2 items-start justify-start mt-5"
                title="Receita"
              >
                <Graph classname="w-[22px] mt-[2px] h-[22px]" />
                {movie.revenue == 0
                  ? 'Sem informações'
                  : formatCurrency(movie.revenue)}
              </p>
              <p
                id="runtime"
                className="text-sm flex max-h-full gap-2 items-start justify-start mt-8"
              >
                <Time classname="w-[22px] mt-[2px] h-[22px]" />
                {movie.runtime} minutos
              </p>
            </div>
          </section>

          <section className="flex justify-center items-center gap-8 container !mt-32">
            {movie.production_companies.map((companie) => (
              <div className="max-w-40" key={companie.id}>
                <img src={imageURL + companie.logo_path} alt={companie.name} />
              </div>
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default Movie;
