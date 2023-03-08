import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(API_URL + 'posts');
      setData(res.data);
    })();
  }, []);

  return (
    <div className='App'>
      <h1>Posts Docker Test App</h1>
      {data?.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
