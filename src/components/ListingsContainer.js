import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchTerm}) {

  const [listings, setListings] = useState([])

  useEffect( ()=> {fetch('http://localhost:6001/listings')
                  .then(resp => resp.json())
                  .then( data => setListings(data))
                }, []
             )

  function deleteFromState(item){
    const filteredItems = listings.filter( (x) => x.id !== item.id)
    setListings(filteredItems)
  }
  
  return (
    <main>
      <ul className="cards">
        {listings.filter((listing)=> listing.description.toLowerCase().includes(searchTerm.toLowerCase())).map( (listing) => { 
          return <ListingCard listing = {listing} key={listing.id} onDelete={deleteFromState}/>})}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
