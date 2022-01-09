import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [searchTerm, setSearchTerm] = useState("")
  
  function handleSearch(searched){
    setSearchTerm(searched);
    console.log("from App.js: " + searchTerm)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;

/*

App
  |
  |---Header
  |    |---Search
  |
  |---ListingsContainer 
      |--- ListingCard

For the 4th deliverable, pass the search term up from Search to App to be used down in the listings 
*/