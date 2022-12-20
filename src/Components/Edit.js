import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const getDataforSingleEntry = (entryId) => {
    const data = localStorage.getItem("data");
    // console.log("getdatafor Single entry:" + data);
    if (data) {
      return JSON.parse(data).filter((entry) => {
        return parseInt(entry.id) === parseInt(entryId);
      })[0];
    } else {
      return {};
    }
  };
  
  const getTotalDatafromEntry = () => {
    const data = localStorage.getItem("data");
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
  const entryId = searchParam.get("entry");

  const [totalEntries, setTotalEntries] = useState(getTotalDatafromEntry());

  const [editEntry, setEditEntry] = useState(getDataforSingleEntry(entryId));
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
                            <EditIcon onClick={handleEdit} className="editicon"></EditIcon>
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

export default Edit