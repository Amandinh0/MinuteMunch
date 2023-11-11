import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';



function DiningPopUp(props){

    const [breakfastItem, setbreakfastItem] = useState([]);
    const [lunchItem, setlunchItem] = useState([]); 
    const navigate = useNavigate(); 

    const handleBreakfastChange = (item) => {
        if (breakfastItem.includes(item)) {
            // If item is already selected, remove it
            setbreakfastItem(breakfastItem.filter((selectedItem) => selectedItem !== item));
          } else {
            // If item is not selected and the maximum selection limit is not reached, add it
            if (breakfastItem.length < 3) {
              setbreakfastItem([...breakfastItem, item]);
            }
          }
       
    };

    const handleLunchChange = (item) => {
        if (lunchItem.includes(item)) {
            // If item is already selected, remove it
            setlunchItem(lunchItem.filter((selectedItem) => selectedItem !== item));
          } else {
            // If item is not selected and the maximum selection limit is not reached, add it
            if (lunchItem.length < 3) {
              setlunchItem([...lunchItem, item]);
            }
          }
      };

      function AfterSubmit() {
        navigate('/consumerHome/confirmation', {
          state: { 
            breakfast: JSON.stringify(breakfastItem), 
            lunch: JSON.stringify(lunchItem)
          }
        });
      }

    return props.trigger ? (
      <div className="popup">
        <div className="popup-inner">

          <h1>Breakfast Items</h1>
          {props.hall.Breakfast ? (
        <ul>
        {props.hall.Breakfast.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={breakfastItem.includes(item)}
                onChange={() => handleBreakfastChange(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
          ) : (
            <p>No Breakfast items available.</p>
          )} 


          <h1>Lunch Items</h1>
          {props.hall.Lunch ? (
            <ul>
            {props.hall.Lunch.map((item, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={lunchItem.includes(item)}
                    onChange={() => handleLunchChange(item)}
                  />
                  {item}
                </label>
              </li>
            ))}
          </ul>
          ) : (
            <p>No Lunch items available.</p>
          )} 

          

        </div>
        <button onClick={AfterSubmit}>Submit</button>
        <button onClick={() => props.setTrigger(false)}>Close</button>
      </div>
    ) : (
      ""
    );

}

export default DiningPopUp; 