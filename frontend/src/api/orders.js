
import axios from "axios";

class OrdersAPI {
    static async fetchOrders() {
        const response = await axios.get("http://localhost:8080/api/orders");
        console.log(response.data);
        return response.data
    }

    //static async fetchSingleOrder() {
//
    //}
}

export default OrdersAPI;