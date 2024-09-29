import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

function InventoryForm() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("inventory");
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "inventory"));
    const inventoryData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(inventoryData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && quantity) {
      await addDoc(collection(db, "inventory"), {
        name,
        quantity: parseInt(quantity),
        location,
      });
      setName("");
      setQuantity(0);
      setLocation("inventory");
      fetchItems();
    }
  };

  const handleDelete = async (id) => {
    const itemDoc = doc(db, "inventory", id);
    await deleteDoc(itemDoc);
    fetchItems();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setName(item.name);
    setQuantity(item.quantity);
    setLocation(item.location);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (editingItem && name && quantity) {
      const itemDoc = doc(db, "inventory", editingItem.id);
      await updateDoc(itemDoc, {
        name,
        quantity: parseInt(quantity),
        location,
      });
      setEditingItem(null);
      setName("");
      setQuantity(0);
      setLocation("inventory");
      fetchItems();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">LODI Inventory</h1>
      
      <form onSubmit={editingItem ? handleUpdate : handleSubmit} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="border p-2 mr-2"
          required
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          placeholder="Quantity"
          className="border p-2 mr-2"
          required
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 mr-2"
        >
          <option value="inventory">Inventory</option>
          <option value="kitchen_fridge_freezer">Kitchen fridge/Freezer</option>
          <option value="downstairs_freezer">Downstairs Freezer</option>
          <option value="downstairs_fridge">Downstairs Fridge</option>
          <option value="downstairs_shelves">Downstairs Shelves</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2">
          {editingItem ? "Update Item" : "Add Item"}
        </button>
        {editingItem && (
          <button
            type="button"
            onClick={() => {
              setEditingItem(null);
              setName("");
              setQuantity(0);
              setLocation("inventory");
            }}
            className="bg-gray-500 text-white p-2 ml-2"
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">Inventory List</h2>
        <ul>
          {items.map(item => (
            <li key={item.id} className="mb-2">
              {item.name} - Quantity: {item.quantity} - Location: {item.location}
              <button
                onClick={() => handleEdit(item)}
                className="ml-2 bg-yellow-500 text-white p-1 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="ml-2 bg-red-500 text-white p-1 text-sm"
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

export default InventoryForm;