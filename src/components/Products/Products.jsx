import React,{useState,useEffect} from 'react';
import { Card } from '../Card/Card';
import silla1 from '../../Images/silla.jpg';

export const Products = () => {

  const URL = 'https://fullmarket-productsapi-default-rtdb.firebaseio.com/productos.json';
  
  const [products, setProducts] = useState([])
  
  const mostrar = async () => {
    await fetch(URL)
    .then(res => res.json())
    .then(data => setProducts(data.producto))
  }

  useEffect(() => {
    mostrar();    
  },[])

  return (
    <main className='main-products'>       
      {         
         products.map(element => (
            <Card
              key = {element.Caracteristicas+1}
              nameProduct = {element.Caracteristicas}
              stateProduct = {element.Estado}
              imgProduct = {element.Imagen}
            />
         ))
       }    
    </main>
  )
}
