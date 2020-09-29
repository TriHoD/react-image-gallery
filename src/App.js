import React,{useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import Search from './components/Search';

function App() {

  const [images, setImgages] = useState([]);
  const [keyWord, setkeyWord] = useState('cat');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getImages()
  }, [keyWord]);

  const getImages = async () => {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${keyWord}&image_type=photo&pretty=true`);
      const data = await response.json();
      setImgages(data.hits)
      setIsLoading(false);
    }
    catch (e) {
      console.error(e)
    };
  };



  return (
    <div className="container mx-auto">
      <Search setText={(text) =>setkeyWord(text)}/>

      {!isLoading && images.length === 0  && <h1 className="text-6xl text-center mx-auto mt-32">Oops no imgages found...</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <Card key={image.id}
                image={image}
          />
        ))}
      </div>}
    </div>
  );
}

export default App;
