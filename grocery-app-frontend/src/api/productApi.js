const BASE_URL = '/grocery';

export const getProducts = async(search = "", category = "") => {
    try {
        const response = await fetch(
            `${BASE_URL}/products?search=${search}&category=${category}`
        )
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("Error fetching products:",error)
    }
}