import axios from "axios";
import { FAKE_ORDER } from "./fakeData";

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

    static async postOrder(order) {
        const response = await axios.post(`${BASE_ROOT}/api/orders`, order);
        console.log("posted", order);
        return response.data;
    }

    static async deleteOrder(email) {
        const response = await axios.delete(`${BASE_ROOT}/api/orders/${email}`);
        console.log(response.data);
        return response.data;
    }
}

export default OrdersAPI;