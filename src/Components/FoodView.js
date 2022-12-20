import React, { useState } from 'react';
import './FoodView.css';

const getDatafromEntry = () => {
    const entry = localStorage.getItem("data");
    if (entry) {
      return JSON.parse(entry);
    } else {
      return [];
    }
  };

function FoodView() {
    const [data, setData] = useState(getDatafromEntry());
  return (
    <div className='foodview-container'>
        <h1 className='foodview-title'>List of Food Items</h1>
        <table className='foodview-table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Food Item</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
          {
              data.map((food) => (
                  <tr key={food.id} className='foodview-table'>
                    <td></td>
                    <td>{food.name}</td>
                    <td>Rs.{food.price}</td>
                    <td>{food.category}</td>
                    <td><img src='{food.image}' /></td>
                  </tr>
              ))
          }
          </tbody>
        </table>
    </div>
  )
}
export default FoodView