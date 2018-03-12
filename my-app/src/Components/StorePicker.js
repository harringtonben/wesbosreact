import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form class="store-selector">
                {/* this is the form to get into our store */}
                <h2>
                    Please Enter a Store
                </h2>
                <input type="text" required placeholder="Store Name"/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;