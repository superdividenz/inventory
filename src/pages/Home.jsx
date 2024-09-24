import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"; // Import necessary Firestore functions

const Messages = () => {
  // Renamed from messages to Messages
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [editItemName, setEditItemName] = useState("");

  // Fetch items from Firestore
  const fetchItems = async () => {
    const itemsCollection = collection(db, "messages");
    const snapshot = await getDocs(itemsCollection);
    const itemsList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(itemsList);
  };

  useEffect(() => {
    fetchItems(); // Call fetchItems when the component mounts
  }, []);

  // Add new item to Firestore
  const addItem = async () => {
    if (newItem) {
      await addDoc(collection(db, "messages"), { name: newItem });
      setNewItem("");
      fetchItems(); // Re-fetch items after adding
    }
  };

  // Update item in Firestore
  const updateItem = async (id) => {
    if (editItemName) {
      const itemDoc = doc(db, "messages", id);
      await updateDoc(itemDoc, { name: editItemName });
      setEditItemId(null);
      setEditItemName("");
      fetchItems(); // Re-fetch items after updating
    }
  };

  // Delete item from Firestore
  const deleteItem = async (id) => {
    const itemDoc = doc(db, "messages", id);
    await deleteDoc(itemDoc);
    fetchItems(); // Re-fetch items after deleting
  };

  return (
    <div className=" mt-10 p-4 md:p-6 bg-gray-100 rounded-lg shadow-md mx-auto max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Feedback Board
      </h2>
      <div className="flex flex-col md:flex-row mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          className="border border-gray-300 rounded-md p-2 flex-grow mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addItem}
          className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition duration-200"
        >
          Add Item
        </button>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="py-2 flex flex-col md:flex-row justify-between items-center bg-white rounded-md shadow-sm p-2"
          >
            {editItemId === item.id ? (
              <div className="flex w-full">
                <input
                  type="text"
                  value={editItemName}
                  onChange={(e) => setEditItemName(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={() => updateItem(item.id)}
                  className="bg-green-600 text-white rounded-md p-2 ml-2 hover:bg-green-700 transition duration-200"
                >
                  Update
                </button>
              </div>
            ) : (
              <span className="text-lg">{item.name}</span>
            )}
            <div className="flex mt-2 md:mt-0">
              <button
                onClick={() => {
                  setEditItemId(item.id);
                  setEditItemName(item.name);
                }}
                className="bg-yellow-500 text-white rounded-md p-2 ml-2 hover:bg-yellow-600 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="bg-red-600 text-white rounded-md p-2 ml-2 hover:bg-red-700 transition duration-200"
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

export default Messages; // Updated export to match the new name
