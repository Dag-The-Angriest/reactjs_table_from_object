import './App.css';
import Header from './Header'
import Content from './Content';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'


  const [isLoading, setIsLoading] = useState(true);
  const [fetchError,  setFetchError] = useState(null);
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async (id) => {
      try {
        
        const response = await fetch (`${API_URL}${reqType}`);
        if (!response.ok) throw Error('Did not receive expected data');
        const data = await response.json();
        // const list = usersList.map((name) => name.id === id ? { ...id, name } : name);
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();

  }, [reqType])

  return (
    <div className="App">
      <Header
        reqType={reqType}
        setReqType={setReqType}
      />
      <Content
        items={items}
        
      />
    </div>
  );
}

export default App;
