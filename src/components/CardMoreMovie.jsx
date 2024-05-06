import { Link } from 'react-router-dom';

const CardMoreMovie = () => {
  return (
    <div className="flex items-center justify-center min-w-36 h-80 bg-transparent rounded">
      <Link className="text-blue-500 hover:underline transition">Ver mais</Link>
    </div>
  );
};

export default CardMoreMovie;
