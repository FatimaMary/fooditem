import React, { useEffect, useState } from 'react'
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';

const getDatafromEntry = () => {
    const entry = localStorage.getItem("foodData");
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
    const navigate = useNavigate();

    const [data, setData] = useState(getDatafromEntry());
    const imgFilehandler = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        // console.log("image selected")
      }
      

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submited")
        let newFoodEntry = {
            id: data.length +1,
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
            "foodData", JSON.stringify([...data, newFoodEntry])
        );
        setData();
        navigate("/foodview")
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
                    <option value="Non-Veg">Non-Veg</option>
                </select>
            </div>
            <div className='foodentry-row'>
                <label className='foodentry-row-label'>Rating:</label>
                <StarRating className='foodentry-row-input-star'/>
            </div>
            <div className='foodentry-row'>
                <label className='foodentry-row-label'>Image</label>
                <input className='foodentry-row-input' type='file' name="image" value={image} onChange={imgFilehandler}/>
            </div>
            <div className='foodentry-row-btn'>
            <button className='foodentry-btn'>Add to Food list</button>
            </div>
        </form>
    </div>
  )
}

export default FoodEntry