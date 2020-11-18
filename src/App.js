import { useEffect, useState } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import ListItem from './shared/ListItem';
import { getData } from './api';

Amplify.configure(awsconfig);

const App = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listOfItems = await getData();

        if (listOfItems.length === 20) {
          setList(listOfItems);
        } else {
          throw listOfItems;
        }
      } catch(e) {
        setError(e.message);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h1>OneClick Challenge</h1>
      </header>

      { 
        error ? 
        <h3>{error}</h3> : 
        list.map((item, index) => <ListItem item={item} key={index} />) 
      }      
    </div>
  );
}

export default withAuthenticator(App);
