import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <h1 className='intro'> Let's Vibe ►</h1>
                <div>
                    <button className='home-button'> Home </button>
                    <button className='favorite'> Your favorite music </button>
                    <button className='Contact-us'> Contact us </button>
                </div>
            </nav>
        )
    }
}

export default Navbar