export const getAllProducts = async () => {
    const url = "https://fakestoreapi.com/products"
    try {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => console.log(data))
        
    } catch (error) {
        console.error("Error fetching products:", error.message)
    }
    
}

