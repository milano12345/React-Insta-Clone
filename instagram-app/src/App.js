import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer'

function App() {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map(post => <PostContainer post={post}/>)}
        
    </div>
  );
}

export default App;
