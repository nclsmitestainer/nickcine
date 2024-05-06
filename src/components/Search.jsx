import { useContext } from 'react';
import SearchContext from '../contexts/Search';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const { showSearch, setShowSearch, search, setSearch } =
    useContext(SearchContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
    setShowSearch(false);
  };

  const handleClickSearch = (e) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div
        className={`z-50 px-4 opacity-0 pointer-events-none transition-all duration-500 flex items-center justify-center container sticky ${
          showSearch ? 'show' : 'hidden'
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className="search__form w-full flex items-center gap-x-2 bg-input shadow-search-form pe-4 ps-4 rounded-lg -translate-y-4 transition-all duration-500"
        >
          <button type="submit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1484 13.9688C16.8516 12.8625 17.2641 11.55 17.2641 10.1391C17.2641 6.19688 14.0719 3 10.1344 3C6.19219 3 3 6.19688 3 10.1391C3 14.0813 6.19219 17.2781 10.1297 17.2781C11.5594 17.2781 12.8906 16.8563 14.0062 16.1344L14.3297 15.9094L19.4203 21L21 19.3922L15.9141 14.3016L16.1484 13.9688ZM14.1281 6.15C15.1922 7.21406 15.7781 8.62969 15.7781 10.1344C15.7781 11.6391 15.1922 13.0547 14.1281 14.1188C13.0641 15.1828 11.6484 15.7687 10.1437 15.7687C8.63906 15.7687 7.22344 15.1828 6.15937 14.1188C5.09531 13.0547 4.50937 11.6391 4.50937 10.1344C4.50937 8.62969 5.09531 7.21406 6.15937 6.15C7.22344 5.08594 8.63906 4.5 10.1437 4.5C11.6484 4.5 13.0641 5.08594 14.1281 6.15Z"
                fill="#000"
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Qual filme você deseja ?"
            className="w-full py-4 pl-2 bg-input placeholder:text-[#5A5E72]"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>

        <img
          src="/close.svg"
          alt="close"
          className="cursor-pointer p-4"
          onClick={handleClickSearch}
        />
      </div>
      <div
        className={`fixed w-full h-full bg-black/10 backdrop-blur-xl z-30 top-0 right-0 transition-all duration-100 ${
          showSearch ? 'block' : 'hidden'
        }`}
        onClick={handleClickSearch}
      ></div>
    </>
  );
};

export default Search;
