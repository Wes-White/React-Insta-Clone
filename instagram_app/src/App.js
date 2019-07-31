import React from 'react';
import './App.css';
import dummyData from '../src/dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: dummyData
    }
  }
  render(){
    return (
      <div className="App">
          <SearchBar data={this.state.data} />
          <PostContainer data= {this.state.data} />
          
          </div>
    );
  }

  }
  

export default App;


