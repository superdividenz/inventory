import React, { useEffect, useState } from 'react';
import { db } from './firebase'; 
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'; // Import necessary Firestore functions

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItemId, setEditItemId] = useState(null);
  const [editItemName, setEditItemName] = useState('');

  // Fetch items from Firestore
  const fetchItems = async () => {
    const itemsCollection = collection(db, 'inventory');
    const snapshot = await getDocs(itemsCollection);
    const itemsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsList);
  };

  useEffect(() => {
    fetchItems(); // Call fetchItems when the component mounts
  }, []);

  // Add new item to Firestore
  const addItem = async () => {
    if (newItem) {
      await addDoc(collection(db, 'inventory'), { name: newItem });
      setNewItem('');
      fetchItems(); // Re-fetch items after adding
    }
  };

  // Update item in Firestore
  const updateItem = async (id) => {
    if (editItemName) {
      const itemDoc = doc(db, 'inventory', id);
      await updateDoc(itemDoc, { name: editItemName });
      setEditItemId(null);
      setEditItemName('');
      fetchItems(); // Re-fetch items after updating
    }
  };

  // Delete item from Firestore
  const deleteItem = async (id) => {
    const itemDoc = doc(db, 'inventory', id);
    await deleteDoc(itemDoc);
    fetchItems(); // Re-fetch items after deleting
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Inventory Items</h2>
      <div className="flex mb-4">
        <input 
          type="text" 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)} 
          placeholder="Add new item" 
          className="border border-gray-300 rounded-l-md p-2 flex-grow"
        />
        <button 
          onClick={addItem} 
          className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600"
        >
          Add Item
        </button>
      </div>
      <ul className="list-disc pl-5">
        {items.map(item => (
          <li key={item.id} className="py-1 flex justify-between items-center">
            {editItemId === item.id ? (
              <div className="flex">
                <input 
                  type="text" 
                  value={editItemName} 
                  onChange={(e) => setEditItemName(e.target.value)} 
                  className="border border-gray-300 rounded-md p-1"
                />
                <button 
                  onClick={() => updateItem(item.id)} 
                  className="bg-green-500 text-white rounded-md p-1 ml-2 hover:bg-green-600"
                >
                  Update
                </button>
              </div>
            ) : (
              <span>{item.name}</span>
            )}
            <div>
              <button 
                onClick={() => { setEditItemId(item.id); setEditItemName(item.name); }} 
                className="bg-yellow-500 text-white rounded-md p-1 ml-2 hover:bg-yellow-600"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteItem(item.id)} 
                className="bg-red-500 text-white rounded-md p-1 ml-2 hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
