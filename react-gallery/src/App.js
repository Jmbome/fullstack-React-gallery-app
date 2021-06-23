import React,{Component} from 'react';
import axios from 'axios';
import Nav from '../src/Components/Nav';
import NotFound from '../src/Components/NotFound';
import Form from '../src/Components/Form';
import Results from '../src/Components/Results';
import { HashRouter, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import apiKey from '../src/Components/config.js';


class App extends Component{
  constructor() {
   

    super();
    this.state = {
      //Empty arrays to be fiiled by data from get request
      catPhotos: [],
      dogPhotos: [],
      zebraPhotos: [],
      giraffePhotos: [],

      //updates when a query search is made
      searchData:[],
      searchQuery:"",

      //show/hide loading text between get requests
      isLoading: true
    };
  } 

 

  componentDidMount() {
   
    //Fetch cat pictures
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          catPhotos: response.data.photos.photo,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

      // Fetch dog pictures
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&page=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            dogPhotos: response.data.photos.photo
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });

        // Fetch tiger pictures
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=zebras&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          zebraPhotos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

      // Fetch giraffe pictures
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=giraffe&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          giraffePhotos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
    
   performSearch=(query)=>{

    this.setState({ isLoading: true});

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          searchData: response.data.photos.photo,
          searchQuery: query,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

   }
    
   componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.performSearch(prevProps);
    }
  }

  render(){
    console.log(this.state.photos);
  return (
    <HashRouter>
    <div className="container">
      <Form onSearch={ this.performSearch } searchData={this.state.searchQuery} />
      <Nav />
      {
        /**
        *   Show Loading text if isLoading === true,  
        *   otherwise show proper <PhotoContainer /> component
        **/ 
        (this.state.isLoading) 
          ? <p>Loading...</p>
          :  <Switch>
              <Route exact path="/" render={ () => <Redirect to="/cats" /> } />
              <Route path="/cats" render={ () => <Results data={this.state.catPhotos} /> } />
              <Route path="/dogs" render={ () => <Results data={this.state.dogPhotos} /> } />
              <Route path="/zebras" render={ () => <Results data={this.state.zebraPhotos} /> } />
              <Route path="/giraffe" render={ () => <Results data={this.state.giraffePhotos} /> } />
              <Route path="/search/:query" render={ () => <Results 
                                                            data={this.state.searchData} 
                                                            searchQuery={this.state.searchQuery} 
                                                            newSearch={this.performSearch}
                                                          /> } />
              <Route component={ NotFound }/>
            </Switch>
      }
    </div>
  </HashRouter>
  );
  }
}

export default withRouter(App);
