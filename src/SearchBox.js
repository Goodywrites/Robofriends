import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba br5 b-alice-blue bg-'
                type='search' 
                placeholder='Search RoboFriends' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;