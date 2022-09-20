import React from 'react'
import { useState, useEffect } from 'react';
import Data from '../../Data'
//style 
import "./Birthday.css"

function Birthday() {
  const { items } = Data;
  //state
  const [data, setData] = useState(items);
  const [sum, setSum] = useState(0);
  // function
  useEffect(() => {
    setSum(items.filter(item => item).length)
  }, [items]);
  
  const remove = () => {
    setData([])
    setSum(0)
  }

  return (
    <div className='container'>
      <div className='main'>
        <h2> {sum} birthday tody</h2>
        {
          data.map((item) => (
            <div id={item.id} className="items">
              <img src={item.img} alt='item.name' />
              <div className='data'>
                <p>{item.name}</p>
                <p>{item.age} years</p>
              </div>
            </div>
          ))
        }
        <button onClick={remove}>Clear All</button>
      </div>
    </div>
  )
}

export default Birthday