import React, { useEffect, useState } from 'react'
import StarRating from './StarRating';

const getDatafromEntry = () => {
    const entry = localStorage.getItem("data");
    if (entry) {
      return JSON.parse(entry);
    } else {
      return [];
    }
  };

function FoodEntry() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [image, setImage] = useState();

    const [data, setData] = useState(getDatafromEntry());

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submited")
        let newFoodEntry = {
            name,
            price,
            category,
            image
        };
        setName("");
        setPrice("");
        setCategory("");
        setImage("");

        localStorage.setItem(
            "data", JSON.stringify([...data, newFoodEntry])
        );
        setData();
    }

  return (
    <div className='foodentry-container'>
        <h1 className='foodentry-head'>Add Food Item</h1>
        <form className='foodentry-form' onSubmit={handleSubmit}>
            <div className='foodentry-row'>
                <label className='foodentry-row-label'>Food Name:</label>
                <input className='foodentry-row-input' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='foodentry-row'>
                <label className='foodentry-row-label'>Price:</label>
                <input className='foodentry-row-input' type='text' name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className='foodentry-row'>
                <label className='foodentry-row-label'>Category:</label>
                <select className='foodentry-row-input' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="veg">Veg</option>
                    <option value="nv">Non-Veg</option>
                </select>
            </div>
            <div className='foodentry-row'>
                <label className='foodentry-row-label'>Rating:</label>
                <StarRating className='foodentry-row-input-star'/>
            </div>
            <div className='foodentry-row'>
                <label className='foodentry-row-label'>Image</label>
                <input className='foodentry-row-input' type='file' name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div className='foodentry-row-btn'>
            <button className='foodentry-btn'>Add to Food list</button>
            </div>
        </form>
    </div>
  )
}

export default FoodEntry