import {publicRequest} from "../requestMethods";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProduct] = useState([])

  useEffect(() => {
    const getProducts = async() => {
      try{
        const res = await publicRequest.get(cat 
          ? `products?category=${cat}`
          : 'products')
        setProducts(res.data)
      }catch(err){

      }
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    cat && setFilteredProduct(
      products.filter(item => Object.entries(filters).every(([key, value]) => (
        item[key].includes(value)
      )))
    )
  }, [cat, filters, products])

  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item.id}/>
      )): products.slice(0, 8).map((item) => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  );
};

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default Products;
