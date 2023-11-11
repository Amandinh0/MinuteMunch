import { useState } from 'react';
import foodMenus from '../data/menus.json'; 
import DiningPopUp from './DiningPopUp';



function ConsumerPage(){

    const [buttonPopup, setbuttonPopup] = useState(false); 
    const[hallName, sethallName] = useState(null);


    const wooClicked =()=>{
        // <DiningPopUp hallName={foodMenus.Worcester} drinks={foodMenus.Drinks}/>
        sethallName(foodMenus.Worcester);
        setbuttonPopup(true); 

    }
    const frankClicked =()=>{
        sethallName(foodMenus.Franklin);
        setbuttonPopup(true); 
    
    }
    
    const hampClicked =()=>{
        sethallName(foodMenus.Hampshire);
        setbuttonPopup(true);
        
    }
    
    const berkClicked =()=>{
        sethallName(foodMenus.Berkshire);
        setbuttonPopup(true);
        
    }
    


    return(
        <>
            
            <button className='button-dining woo' onClick={wooClicked}> Worcester </button>
            <button className='button-dining frank' onClick={frankClicked}> Franklin </button>
            <button className='button-dining hamp' onClick={hampClicked}> Hampshire </button>
            <button className='button-dining berk' onClick={berkClicked}> Berkshire </button>
            <DiningPopUp trigger={buttonPopup} setTrigger={setbuttonPopup} hall={hallName}/>
        </>
    )
}


export default ConsumerPage