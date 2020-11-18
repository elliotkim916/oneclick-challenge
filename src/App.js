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
    const fn = async () => {
      try {
        const res = await getData();

        if (res.length === 20) {
          setList(res);
        } else {
          throw res;
        }
      } catch(e) {
        setError(e.message);
      }
    };
    
    fn();
  }, []);

  // const getList = async () => {
  //   try {
  //     const results = getData();
      
  //     if (results.length === 20) {
  //       return results;
  //     } else {
  //       throw results;
  //     }
  //   } catch(e) {
  //     return e;
  //   }
  // };

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
