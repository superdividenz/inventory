import React from 'react';

const InventoryItem = ({ item }) => {
  return (
    <li>
      {item.name} - {item.quantity || 'N/A'}
    </li>
  );
};

export default InventoryItem;
