import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';

class App extends React.Component {
    render() {
        return (
            <div classname="catch-of-the-day">   
                <div classname="menu">
                    <Header />
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
}

export default App;