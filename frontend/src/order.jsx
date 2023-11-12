import React, {Component} from 'react';

// let foodList = [];
// let drinkList = [];
// let diningSwipes = 0;
// let eta = "0:00";
// let payout = 0.00;
// let phoneNumber = "000-000-0000";
// let email = null;
// let name = null;
// let diningHall = null;


class Order extends Component{
    constructor(residenceArea, residenceHall, foodList, drinkList, diningSwipes, eta, payout, phoneNumber, email, name, diningHall){
        super();
        this.state = {
            location: {
                residenceArea:residenceArea,
                residenceHall:residenceHall
            },
            foodList:foodList,
            drinkList:drinkList,
            diningSwipes:diningSwipes,
            eta:eta,
            payout:payout,
            phoneNumber:phoneNumber,
            email:email,
            name:name,
            diningHall:diningHall
        }
    }   
}

export default Order;
