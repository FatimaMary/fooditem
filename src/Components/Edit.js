import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import StarRating from './StarRating';

const getDataforSingleEntry = (foodId) => {
  const data = localStorage.getItem("foodData");
  // console.log("getdatafor Single entry:" + data);
  if (data) {
    return JSON.parse(data).filter((entry) => {
      return parseInt(entry.id) === parseInt(foodId);
    })[0];
  } else {
    return {};
  }
};

const getTotalDatafromEntry = () => {
  const data = localStorage.getItem("foodData");
  // console.log("getTotaldataentry:" + data);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Edit() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const foodId = searchParam.get("entry");

  const [totalEntries, setTotalEntries] = useState(getTotalDatafromEntry());
  const [editEntry, setEditEntry] = useState(getDataforSingleEntry(foodId));
  const [name, setName] = useState(editEntry.name);
  const [price, setPrice] = useState(editEntry.price);
  const [category, setCategory] = useState(editEntry.category);
  // const [image, setImage] = useState(editEntry.image);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    let newEdit = {
      id: editEntry.id,
      name,
      price,
      category,
      // image
    };
    console.log(newEdit);
    // setEditEntry(newEdit);

    const updatedtotalEntry = totalEntries.map((singleEntry) => {
      if (parseInt(singleEntry.id) === parseInt(foodId)) {
        return newEdit;
      } else {
        return singleEntry;
      }
    });

    localStorage.setItem("foodData", JSON.stringify(updatedtotalEntry));
    // console.log("updated total entry : " + JSON.stringify(updatedtotalEntry));
    navigate(`/?entry=${editEntry.foodId}`);
  };

  return (
    <div className='foodentry-container'>
      <h1 className='foodentry-head'>Edit Food Item</h1>
      <form className='foodentry-form' onSubmit={handleSubmitEdit}>
        <div className='foodentry-row'>
          <label className='foodentry-row-label'>Food Name:</label>
          <input className='foodentry-row-input' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='foodentry-row'>
          <label className='foodentry-row-label'>Price:</label>
          <input className='foodentry-row-input' type='text' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
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
          <StarRating className='foodentry-row-input-star' />
        </div>
        {/* <div className='foodentry-row'>
          <label className='foodentry-row-label'>Image</label>
          <input className='foodentry-row-input' type='file' name="image" value={image} onChange={(e) => setImage(e.target.value)} />
        </div> */}
        <div className='foodentry-row-btn'>
          <button className='foodentry-btn'>Edit Food list</button>
        </div>
      </form>
    </div>

  )
}

export default Edit