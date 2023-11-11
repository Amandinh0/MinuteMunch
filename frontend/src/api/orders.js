import axios from "axios";
const BASE_ROOT = "http://localhost:8080";


class OrdersAPI {
    static async fetchOrders() {
        const response = await axios.get(`${BASE_ROOT}/api/orders`);
        console.log(response.data);
        return response.data;
    }

    static async fetchSingleOrder(email) {
        const response = await axios.get(`${BASE_ROOT}/api/orders/${email}`);
        console.log(response.data);
        return response.data;
    }

    // static async postOrder(order) {
    //     const response = await axios.post(`${BA}`)
    // }
}

export default OrdersAPI;