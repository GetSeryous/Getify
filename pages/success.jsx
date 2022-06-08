import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext';
import {runFireworks} from '../lib/utlis';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
  // const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0); 
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order</h2>
        <p className="email-msg">Check your email inbox for recepit</p>
        <p className="description">
          If you have any questions, mail us
          <a className="email" href="mailto:okolipraiz@gmail.com">
            okolipraiz@gmail.com
          </a>
        </p>
        <button type='button' width='300px' className='btn'>Contiune Shopping</button>
      </div>
    </div>
  );
}


export default Success;
