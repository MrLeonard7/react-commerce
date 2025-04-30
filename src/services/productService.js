export const getAllProducts = async () => {
    const url = "https://fakestoreapi.com/products"
    try {
        const data = await fetch(url)
          .then((response) => response.json())
          .then((data) => data)

        return data
        
    } catch (error) {
        console.error("Error fetching products:", error.message)
    }
    
}

