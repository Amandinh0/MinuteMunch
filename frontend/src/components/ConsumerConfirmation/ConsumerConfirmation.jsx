import { useLocation } from "react-router-dom";
import OrdersAPI from "../../api/orders";


function ConsumerConfirmation(props){

    function postOrder(){
        console.log(JSON.stringify(parsedBreakfast),JSON.stringify(parsedLunch ));
    }

    const location = useLocation();
    const { breakfast, lunch } = location.state;

    const parsedBreakfast = JSON.parse(breakfast);
    const parsedLunch = JSON.parse(lunch);



    return(
            <div>
              <h1>Confirmation Page</h1>
        
              {parsedBreakfast.length > 0 && (
                <div>
                  <h2>Breakfast items:</h2>
                  <ul>
                    {parsedBreakfast.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
        
              {parsedLunch.length > 0 && (
                <div>
                  <h2>Lunch items:</h2>
                  <ul>
                    {parsedLunch.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
        
              <button onClick={postOrder}>Order</button>
            </div>

            // <p>Breakfast items: {JSON.stringify(parsedBreakfast)}</p>
            //<p>Lunch items: {JSON.stringify(parsedLunch)}</p>
    );
}

export default ConsumerConfirmation; 



