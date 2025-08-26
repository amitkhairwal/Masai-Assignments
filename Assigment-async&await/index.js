async function dataFetching(url){
    try {
        let data=await fetch(url)
        let res=await data.json()
        return res
    } catch (error) {
        console.log("Failed to fetch products. Please try again later",error.message)
    }
    }

    async function productsName() {
      let data= await dataFetching('https://fakestoreapi.com/products')
      
      data.forEach((element)=>console.log(element.title))
      let sum=data.reduce((acc,curr)=>acc +=curr.price,0)
console.log("Total price of all the products are:",sum)
      
    }

    productsName()
   
 