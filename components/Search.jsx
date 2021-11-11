import { useState } from 'react';
import Searchcard from './Searchcard';

//fetch search results
const apiRequest = async (search) => {
  const api = `https://api.jikan.moe/v3/search/anime?q=${search}`;
  return await fetch(api).then((res) => res.json());
};

//display results when searched anime using handleSubmit
export default function Search() {
  const [animeSearch, setAnimeSearch] = useState('');
  const [apiData, setApiData] = useState({});
  const [gotData, setGotData] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGotData(false);
    setDataLoading(true);
    const data = await apiRequest(animeSearch).then((res) => res);
    setApiData(data);
    setDataLoading(false);
  };

  const displayResult = () => {
    if (apiData.status) {
      return <h3 className='text-center'>Enter atleast 3 characters</h3>;
    } else {
      return (
        <>
          <button className='btn btn-ghost mb-4 ml-16'>
            <a id='refresh' href='javascript:location.reload(true)'>
              clear results
            </a>
          </button>
          <div className='flex flex-wrap ml-8'>
            <Searchcard results={apiData?.results} />
          </div>
        </>
      );
    }
  };

  return (
    <main>
      <div className='relative flex flex-col items-center w-full h-60 flex-1 text-center'>
        <div className='absolute'>
          <h1 className='text-5xl mb-4 font-semibold'>Search Anime</h1>
          <form onSubmit={handleSubmit}>
            <div className='flex space-x-2'>
              <input
                type='text'
                value={animeSearch}
                onChange={(e) => setAnimeSearch(e.target.value)}
                placeholder='e.g Pokemon'
                className='w-full input input-accent input-bordered input-group-lg'
              />
              <button className='btn btn-accent'>go</button>
            </div>
          </form>
        </div>
      </div>
      <div>{gotData ? <></> : dataLoading ? <></> : displayResult()}</div>
    </main>
  );
}
