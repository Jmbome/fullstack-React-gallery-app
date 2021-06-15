import React,{Component} from 'react';
import axios from 'axios';
import Nav from '../src/Components/Nav';
import NotFound from '../src/Components/NotFound';
import Form from '../src/Components/Form';
import Results from '../src/Components/Results';
import apiKey from '../src/Components/config.js';

class App extends Component{
  constructor() {
    super();
    this.state = {
      photos: []
    };
  } 

  componentDidMount() {
    axios.get('ttps://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=248f59d18a18f99816c0a677f8ba3d46&tags=animals&format=json&nojsoncallback=1&api_sig=ec52a61fab4808d14db01b343b4020a5')
      .then(response => {
        this.setState({
          photos: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render(){
    console.log(this.state.photos);
  return (
    <div>
    <Form />
    <Nav />
    <Results data={this.state.photos} />
    <NotFound />
    </div>
  );
  }
}

export default App;
