import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";

const Button2 = ({ selectedItem }) => {
 // console.log({ selectedItem });
  const [items, setItems] = useState([])
  const [topclothes, setTopclothes] = useState({})

  const [botclothes, setBotclothes] = useState({})

  const [shoes, setShoes] = useState({})
  const [handbags, setHandbags] = useState({})
  const [hairstyle, setHairstyle] = useState({})

console.log({topclothes, botclothes,shoes});

 // console.log({ items });
  useEffect(() => {
    switch (selectedItem?.type) {

      case 'topclothes':
        setTopclothes(selectedItem)
        break;
      case 'botclothes':
        setBotclothes(selectedItem)
        break;
      case 'shoes':
        setShoes(selectedItem)
        break;
      case 'handbags':
        setHandbags(selectedItem)
        break;
      case 'hairstyle':
        setHairstyle(selectedItem)
        break;
      default:
        break;
    }

  }, [selectedItem])

  const Button = styled.button`
  margin-top:20px;
  padding: 10px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  transition: 0.5s;
  background-color: teal;
  color: #fff;
  width:100%;
  text-align:center;
  &:hover{
    background-color: #428bca;
    border-color:#fff;
  }
`;

 const handleCard=()=>{
  
 }
  return (
    <div>
      <Button onClick={handleCard}>Add to cart</Button>
    </div>
  );
};

export default Button2;