import React from 'react';

const Menu = ({ items }) => {
    return (
        <div className="menu-container bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Today's Menu</h2>
            {items.length > 0 ? (
                <ul className="list-disc pl-5">
                    {items.map((item, index) => (
                        <li key={index} className="text-lg mb-2">{item}</li>
                    ))}
                </ul>
            ) : (
                <p>No items available</p>
            )}
        </div>
    );
};

export default Menu;
