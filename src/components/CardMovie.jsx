import { Link } from 'react-router-dom';

import { IoStarSharp } from 'react-icons/io5';

const imageURL = import.meta.env.VITE_IMG;

const CardMovie = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      title={movie.title}
      className="flex border border-transparent flex-col flex-none max-w-36 h-80 bg-[#0E0E10] rounded text-white hover:bg-[#404040]/30 hover:border-[#404040] transition-all duration-300"
    >
      <img
        className="max-w-full h-52 block rounded-t"
        src={imageURL + movie.poster_path}
        alt={movie.title}
      />
      <div className="flex flex-col items-start justify-between h-28 p-2">
        <h2 className="overflow-hidden max-h-12 font-display font-medium text-sm/6">
          {movie.title}
        </h2>
        <span className="flex items-center gap-1 font-display font-medium text-xs">
          <IoStarSharp fill="#FFCF53" /> {movie.vote_average.toFixed(1)}
        </span>
      </div>
    </Link>
  );
};

export default CardMovie;
