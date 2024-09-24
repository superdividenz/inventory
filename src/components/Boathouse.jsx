// Boathouse.jsx
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase"; // Make sure this path is correct

function Boathouse() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 0 });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "boathouse"));
    const inventoryData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(inventoryData);
  };

  const addItem = async () => {
    if (newItem.name && newItem.quantity) {
      await addDoc(collection(db, "boathouse"), {
        name: newItem.name,
        quantity: parseInt(newItem.quantity),
      });
      setNewItem({ name: "", quantity: 0 });
      fetchItems();
    }
  };

  const updateItem = async (id, updatedQuantity) => {
    const itemDoc = doc(db, "boathouse", id);
    await updateDoc(itemDoc, { quantity: parseInt(updatedQuantity) });
    fetchItems();
  };

  const deleteItem = async (id) => {
    const itemDoc = doc(db, "boathouse", id);
    await deleteDoc(itemDoc);
    fetchItems();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-3/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white py-2 px-6">
          <h1 className="text-xl font-bold text-center">Boathouse</h1>
        </div>

        <div className="p-6">
          {/* Form to add new item */}
          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Add New Item
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Quantity"
                value={newItem.quantity}
                onChange={(e) =>
                  setNewItem({ ...newItem, quantity: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addItem}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Add Item
              </button>
            </div>
          </div>

          {/* List of items with update and delete options */}
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Inventory
          </h3>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <div className="text-lg font-medium text-gray-800">
                  {item.name}
                </div>
                <input
                  type="text"
                  value={item.quantity}
                  onChange={(e) => {
                    const value = e.target.value;
                    updateItem(item.id, value);
                  }}
                  className="border border-gray-300 rounded-md p-2 w-full md:w-1/4 mt-2 md:mt-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-2 md:mt-0 md:ml-4 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Boathouse;
