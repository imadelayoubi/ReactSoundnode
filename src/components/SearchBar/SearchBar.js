import React, { Component } from 'react';

class Searchbar extends Component {
    render() {
        return (
            <nav className='searchbar'>
                <div>
                    <input type='text' placeholder='Search your music'></input>
                    <button className='Search-button'> Search </button>
                </div>
            </nav>
        )
    }
}

export default Searchbar