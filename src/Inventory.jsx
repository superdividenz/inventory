import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore database

function BoathouseInventory() {
  // State to manage inventory
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 0 });

  // Fetch inventory items from Firestore (boathouse collection)
  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "boathouse"));
      const inventoryData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(inventoryData);
    };
    fetchItems();
  }, []);

  // Add a new item to Firestore (boathouse collection)
  const addItem = async () => {
    if (newItem.name && newItem.quantity) {
      await addDoc(collection(db, "boathouse"), {
        // Added quantity to the document
        name: newItem.name,
        quantity: parseInt(newItem.quantity), // Ensure quantity is stored as a number
      });
      setNewItem({ name: "", quantity: 0 }); // Reset form
      // Fetch updated data
      const querySnapshot = await getDocs(collection(db, "boathouse"));
      const inventoryData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(inventoryData);
    }
  };

  // Update an existing item in Firestore (boathouse collection)
  const updateItem = async (id, updatedQuantity) => {
    const itemDoc = doc(db, "boathouse", id);
    await updateDoc(itemDoc, { quantity: updatedQuantity });
    // Refresh data
    const querySnapshot = await getDocs(collection(db, "boathouse"));
    const inventoryData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(inventoryData);
  };

  // Delete an item from Firestore (boathouse collection)
  const deleteItem = async (id) => {
    const itemDoc = doc(db, "boathouse", id);
    await deleteDoc(itemDoc);
    // Refresh data
    const querySnapshot = await getDocs(collection(db, "boathouse"));
    const inventoryData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(inventoryData);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-3/4 mx-auto">
        {/* Set width to 75% and center */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Boathouse Inventory
        </h1>
        {/* Form to add new item */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Add New Item</h3>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="border rounded p-2 w-full md:w-1/3"
            />
            <input
              type="text" // Changed to "number" for better input handling
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) =>
                setNewItem({ ...newItem, quantity: e.target.value })
              }
              className="border rounded p-2 w-full md:w-1/3"
            />
            <button
              onClick={addItem}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Item
            </button>
          </div>
        </div>
        {/* List of items with update and delete options */}
        <h3 className="text-xl font-semibold mb-4">Inventory</h3>
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded shadow-md" // Added shadow for depth
            >
              <div className="text-lg font-medium">{item.name}</div>
              <input
                type="text" // Changed to "number" for better input handling
                value={item.quantity}
                onChange={(e) => {
                  const value = e.target.value;
                  updateItem(item.id, value);
                }}
                className="border rounded p-2 w-full md:w-1/4 mt-2 md:mt-0"
              />
              <button
                onClick={() => deleteItem(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0 md:ml-4"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BoathouseInventory;
