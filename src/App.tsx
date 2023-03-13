import { useState } from 'react';
import searchImages from './api';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

function App() {
  // Images results state
  const [images, setImages] = useState([]);
  // Set Images with search results from SearchBar
  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className='m-5'>
      {/* Pass setImages to SearchBar to get search results */}
      <SearchBar onSubmit={handleSubmit} />
      {/* Pass images to Image List to render search results */}
      <ImageList images={images} />
    </div>
  );
}

export default App;
