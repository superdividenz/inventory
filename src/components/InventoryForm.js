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
            type="text"
            value={quantity}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[a-zA-Z0-9\s]*$/.test(value)) {
                setQuantity(value);
              }
            }}
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
            <option value="boathouse">Boathouse</option>
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
              setQuantity("");
              setLocation("inventory");
            }}
            className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Inventory List</h2>
          <button
            onClick={downloadExcel}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Download Excel
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map(item => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.quantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InventoryForm;