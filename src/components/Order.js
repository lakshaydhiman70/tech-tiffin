import React, { useState } from 'react';

const Order = () => {
    const [order, setOrder] = useState({ daal: 0, sabji: 0 });

    const handleOrderChange = (type) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            [type]: prevOrder[type] + 1,
        }));
    };

    return (
        <div>
            <h2>Order Lunch</h2>
            <div>
                <h3>Daal</h3>
                <button onClick={() => handleOrderChange('daal')}>Add Daal</button>
                <p>Count: {order.daal}</p>
            </div>
            <div>
                <h3>Sabji</h3>
                <button onClick={() => handleOrderChange('sabji')}>Add Sabji</button>
                <p>Count: {order.sabji}</p>
            </div>
        </div>
    );
};

export default Order;
