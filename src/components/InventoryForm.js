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
import * as XLSX from 'xlsx';

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
// Excel
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(items);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
    XLSX.writeFile(workbook, "LODI_Inventory.xlsx");
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">LODI Inventory Management</h1>
      
      <form onSubmit={editingItem ? handleUpdate : handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name"
            className="border rounded-md p-2 w-full"
            required
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            placeholder="Quantity"
            className="border rounded-md p-2 w-full"
            required
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded-md p-2 w-full"
          >
            <option value="inventory">Inventory</option>
            <option value="kitchen_fridge_freezer">Kitchen fridge/Freezer</option>
            <option value="downstairs_freezer">Downstairs Freezer</option>
            <option value="downstairs_fridge">Downstairs Fridge</option>
            <option value="downstairs_shelves">Downstairs Shelves</option>
          </select>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            {editingItem ? "Update Item" : "Add Item"}
          </button>
        </div>
        {editingItem && (
          <button
            type="button"
            onClick={() => {
              setEditingItem(null);
              setName("");
              setQuantity(0);
              setLocation("inventory");
            }}
            className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Cancel Edit
          </button>
          
        )}
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Inventory List</h2>
        <ul className="divide-y divide-gray-200">
          {items.map(item => (
            <li key={item.id} className="py-4 flex justify-between items-center">
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="ml-2 text-gray-600">Quantity: {item.quantity}</span>
                <span className="ml-2 text-gray-600">Location: {item.location}</span>
              </div>
              <div>
              <button
  onClick={() => handleEdit(item)}
  className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-300"
>
  Edit
</button>
<button
  onClick={() => handleDelete(item.id)}
  className="mr-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-300"
>
  Delete
</button>
<button
  onClick={downloadExcel}
  className="mt-2 md:mt-0 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
>
  Download Excel
</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InventoryForm;