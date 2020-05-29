import React from 'react';


const SearchBox = ({ changeInput }) => {
  return (
    <div className="search-box">
      <input type='serach' className="search-bar" placeholder='search' onChange={changeInput} />
    </div>
  );
}

export default SearchBox;