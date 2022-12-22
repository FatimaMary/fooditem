import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './FoodView.css';
import { useNavigate } from 'react-router-dom';

const getDatafromEntry = () => {
    const data = localStorage.getItem("foodData");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

function FoodView() {
    const [data, setData] = useState(getDatafromEntry());
    const navigate = useNavigate();

   const handleRemove = (id) => {
      const entryArr = data.filter((singleEntry) =>{ 
        return parseInt(singleEntry.id) !== parseInt(id)});
      setData(entryArr);
      localStorage.setItem("foodData", JSON.stringify(entryArr));
  }
  const handleEdit = (id) => {
    navigate(`/edit?entry=${id}`)
    // console.log("Clicked")
}

  const addNewItem = () => {
    navigate ("/foodentry")
  }

  return (
    <div className='foodview-container'>
        <h1 className='foodview-title'>List of Food Items</h1>
        <div className='foodview-btn-div'>
          <button className='foodview-btn' onClick={addNewItem}>Add New</button>
        </div>
        <table className='foodview-table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Food Item</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
          {
              data.map((food) => (
                  <tr key={food} className='foodview-table'>
                    <td></td>
                    <td>{food.name}</td>
                    <td>Rs.{food.price}</td>
                    <td>{food.category}</td>
                    <td><img src='{food.image}' /></td>
                    <td className='icons'>
                            <EditIcon onClick={handleEdit(food.id)} className="editicon"></EditIcon>
                            <DeleteIcon onClick={() => handleRemove(food.id)} className='deleteicon'></DeleteIcon>
                        </td>
                  </tr>
              ))
          }
          </tbody>
        </table>
    </div>
  )
}
export default FoodView