import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="h-20 flex items-center justify-center bg-[#0E0E10] text-white font-semibold uppercase font-display max-w-full mt-20">
      <p>
        Developed by{' '}
        <Link to="https://github.com/nclsmitestainer" className="text-red-900">
          Nicolas Mitestainer
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
