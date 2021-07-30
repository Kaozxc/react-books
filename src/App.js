import './App.css';
import React,{Component, useState, useEffect} from 'react';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

{/* class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits:[],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    fetch(API + DEFAULT_QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading, error} = this.state;
    if (error) {
      return <p> {error.message}</p>;
    }
    if (isLoading) {
      return <p> Loading bro </p>;
    }
*/}
  function App() {
    const [data, setData] = useState({ hits: [] });

    useEffect(async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
      setData(result.data); 
    }, []);

    return (
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    );
  }

{/*    return (
      <ul>
        {hits.map(hit => 
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a> 
          </li>
        )}
      </ul>
    );
  }
}
*/}

export default App;
