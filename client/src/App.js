import { Router } from '@reach/router';
import {useState, useEffect} from 'react';
import './App.css';
import AddNewAuthor from './views/AddNewAuthor';
import Main from './views/Main';
import EditAuthor from './views/EditAuthor';
import axios from 'axios';

function App() {

  const [authors, setAuthors] = useState([]);

    
  useEffect(()=>{
      axios.get("http://localhost:8888/authors")
      .then(res => {
          setAuthors(res.data);
      })
      .catch(err=> {
          console.log(err);
      })
  }, [])


  return (
    <div className="App">
      <Router>
        <Main path="/" authors={authors}/>
        <AddNewAuthor path="/new/"/>
        <EditAuthor path="/edit/:id/"/>
      </Router>
    </div>
  );
}

export default App;
