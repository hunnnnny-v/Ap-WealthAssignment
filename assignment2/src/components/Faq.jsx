/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import "../styles/faq.css";
// import apple from "../assets/apple.jpeg";
// import pineapple from "../assets/pinepplle.jpeg";
// import kiwi from "../assets/kiwii.jpeg";

// import grapess from "../assets/grapess.jpeg";

// Reusable Faq component
const Faq = ({ fruit, details, image, onEdit, onDelete, onSave, editMode }) => {
  const [editFruit, setEditFruit] = useState(fruit);
  const [editDetails, setEditDetails] = useState(details);

  const handleSave = () => {
    onSave({ fruit: editFruit, details: editDetails, image });
  };

  return (
    <div className="card">
      <div className="card-content">
        <img src={image} alt={fruit} className="fruit-image" />
        {editMode ? (
          <>
            <input
              type="text"
              placeholder="Fruit Name"
              value={editFruit}
              onChange={(e) => setEditFruit(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nutritional Value"
              value={editDetails.nutritionalValue}
              onChange={(e) =>
                setEditDetails({
                  ...editDetails,
                  nutritionalValue: e.target.value,
                })
              }
            />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <h3>{fruit}</h3>
            <p>
              <strong>Nutritional Value:</strong> {details.nutritionalValue}
            </p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};


const FaqList = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch('/api/fruits')
      .then(response => response.json())
      .then(data => setFruits(data));
  }, []);

  const handleEditFruit = async (index) => {
    const updatedFruits = [...fruits];
    updatedFruits[index].editMode = true;
    setFruits(updatedFruits);
  };

  const handleSaveFruit = async (index, updatedFruit) => {
    const response = await fetch(`/api/fruits/${fruits[index]._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFruit)
    });
    const updatedFruitData = await response.json();
    const updatedFruits = [...fruits];
    updatedFruits[index] = updatedFruitData;
    setFruits(updatedFruits);
  };

  const handleDeleteFruit = async (index) => {
    await fetch(`/api/fruits/${fruits[index]._id}`, { method: 'DELETE' });
    const updatedFruits = fruits.filter((_, i) => i !== index);
    setFruits(updatedFruits);
  };

  // const handleEditFruit = (index) => {
  //   const updatedFruits = [...fruits];
  //   updatedFruits[index].editMode = true;
  //   setFruits(updatedFruits);
  // };

  // const handleSaveFruit = (index, updatedFruit) => {
  //   const updatedFruits = [...fruits];
  //   updatedFruits[index] = { ...updatedFruit, editMode: false };
  //   setFruits(updatedFruits);
  // };

  // const handleDeleteFruit = (index) => {
  //   const updatedFruits = fruits.filter((_, i) => i !== index);
  //   setFruits(updatedFruits);
  // };

  return (
    <form className="faq-form">
      <div className="faq-container">
        <h2 className="faq-section-heading">Frequently Asked Questions</h2>

        <div className="faq-list">
          {fruits.map((item, index) => (
            <Faq
              key={index}
              fruit={item.fruit}
              details={item.details}
              image={item.image}
              editMode={item.editMode}
              onEdit={() => handleEditFruit(index)}
              onDelete={() => handleDeleteFruit(index)}
              onSave={(updatedFruit) => handleSaveFruit(index, updatedFruit)}
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default FaqList;
