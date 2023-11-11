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
        const json = await this.stringify(order);

        const response = await axios.post(`${BASE_ROOT}/api/orders`, FAKE_ORDER);
        return response.data;
    }

    static async stringify(object) {
        const json =  await JSON.stringify(FAKE_ORDER);
        console.log(typeof(json));
        console.log(typeof(FAKE_ORDER));
        return json;
    }
}

export default OrdersAPI;