import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useReactToPrint } from "react-to-print";

function CRUDComponent() {
  const [inventory, setinventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", description: "" });
  const componentRef = useRef();

  useEffect(() => {
    fetchinventory();
  }, []);

  const fetchinventory = async () => {
    const querySnapshot = await getDocs(collection(db, "inventory"));
    setinventory(
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  const addItem = async () => {
    if (newItem.name && newItem.description) {
      await addDoc(collection(db, "inventory"), newItem);
      setNewItem({ name: "", description: "" });
      fetchinventory();
    }
  };

  const updateItem = async (id, updatedItem) => {
    await updateDoc(doc(db, "inventory", id), updatedItem);
    fetchinventory();
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "inventory", id));
    fetchinventory();
  };
  // print
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Lodi</h1>
      <div className="mb-6">
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Name"
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
          placeholder="Description"
          className="border p-2 mr-2 rounded"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </div>
      <div ref={componentRef} className="space-y-4">
        {inventory.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <button
              onClick={() =>
                updateItem(item.id, { ...item, name: `Updated ${item.name}` })
              }
              className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
            >
              Update
            </button>
            <button
              onClick={() => deleteItem(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrint}
        className="mt-6 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Print to PDF
      </button>
    </div>
  );
}

export default CRUDComponent;
