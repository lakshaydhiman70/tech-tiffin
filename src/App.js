import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Menu from './components/Menu';
import config from './config';

const App = () => {
    const [menuItems, setMenuItems] = useState([]);  // Default to an empty array
    const [loading, setLoading] = useState(true);    // Add loading state

    useEffect(() => {
        axios.get(`${config.API_URL}/api/menu`)
            .then(response => {
                if (response.data && response.data.items) {
                    setMenuItems(response.data.items);  // Access the items array
                } else {
                    console.error('Unexpected data format:', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the menu items:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Header />
            {loading ? (
                <p>Loading menu...</p>  // Handle loading state
            ) : (
                <Menu items={menuItems} />
            )}
        </div>
    );
};

export default App;
