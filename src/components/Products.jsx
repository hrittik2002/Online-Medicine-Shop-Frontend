import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

const Products = ({cat , filters , sort}) => {
  const [products , setProducts] = useState([]);
  const [filteredProducts , setFilteredProducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat ? `https://online-medicine-shop-rest-api.vercel.app/api/products?category=${cat}`  : `https://online-medicine-shop-rest-api.vercel.app/api/products`);
        setProducts(res.data)
      }
      catch(err){
        console.log("error :(")
        console.log(err)
      }
    }
    getProducts()
  },[cat])
  
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((items) => 
        Object.entries(filters).every(([key , value])=>
          items[key].includes(value)
        ))
    )
  },[products,cat,filters])

  
  useEffect(()=>{
    // sort by newest
    if((sort === "newest")){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      )
    }
    // sort by price
    else if((sort === "asc")){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>a.price - b.price)
      )
    }
    // sort by oldest
    else{
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=>b.createdAt - a.createdAt)
      )
    }
  }, [sort])

  return (
    <Container>
        { cat ? filteredProducts.map(item=>(
            <Product item={item} key={item.id}/>
        )) : 
        products.slice(0,8).map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products