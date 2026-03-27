const BASE_URL = '/grocery'

export const placeOrder = async (orderData) => {
    try {
       const response = await fetch(`${BASE_URL}/orders`,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(orderData)
       });
       return await response.json()
    } catch (error) {
        console.log("Error Placing order:",error);
    }
}

export const getAllOrders = async () => {
    try {
        const response = await fetch(`${BASE_URL}/orders`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching orders:", error)
        return {success:false, message:"Fetching error"}
    }
}