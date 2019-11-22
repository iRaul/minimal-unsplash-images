import React, { useState, useEffect } from 'react';

interface ImageType {
  id: string
  urls: {
    small: string
  }
}

const App: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=minimal&client_id=${process.env.REACT_APP_KEY}`);
      const json = await response.json();
      const res = json.results;

      setImages(res);
    }

    getImages();
  }, []);

  return (
    <ul>
      {
        images.map((image: ImageType) => <li key={image.id}><img src={image.urls.small} /></li>)
      }
    </ul>
  );
}

export default App;
