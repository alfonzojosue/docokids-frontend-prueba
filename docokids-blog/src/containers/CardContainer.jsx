import React from 'react'
import '../styles/CardContainer.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const CardContainer = () => {
    
    
  const [data, setData] = useState([]);

	useEffect(() =>{
    const obtenerLista = async (res) => {    
        await axios.get("http://apidocokids.herokuapp.com/v1/home/blogs/?page=2")
           .then(res => setData(res.data.results));
       
    }
    obtenerLista()
}, [])
  
  
 
console.log(data)


  return (
    <>
    <section className="section-Blog">
        <Card data={data}/>
    </section>
   
    </>
  )
  
}

export default CardContainer