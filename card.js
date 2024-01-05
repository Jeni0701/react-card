import React from 'react';
import pizza from "../image/piz.png"
import burger from "../image/burger.png"
import briyani from "../image/briyani.png"
import panner from "../image/panner.png"
import burrito from "../image/burrito.png"
import roll from "../image/roll.png"
import salad from "../image/salad.png"
import thai from "../image/thai.png"
import wings from "../image/wings.png"
import ques from "../image/quesadilla.png"
import potato from "../image/potato.png"
import pasta from "../image/pasta.png"
import './card.css'

const Card = () => {
  const foodItems = [
    {
      id: 1,
      name: 'Pizza',
      price:'₹ 150 ',
      // description: 'High-quality ingredients such as San Marzano tomatoes, fresh mozzarella cheese',
      image: pizza,
    },
    {
        id: 2,
      name: 'Burger',
      price:'₹ 200 ',
      // description: ' the calorie and fat content can be higher, especially if the patty is made from fatty cuts of beef.',
      image: burger,
    },
    {
      id: 3,
      name: 'Chicken Briyani',
      price:'₹ 160  ',
      // description: ' Biryani is a celebratory rice and meat dish cherished in the Indian sub-continent.',
      image:briyani ,
    },
    {
      id: 4,
      name: 'Panner Butter Masala',
      price:'₹ 130  ',
      // description: 'Paneer Masala is a popular North Indian dish with high nutritional value and great taste.',
      image:panner ,
    },
    {
      id: 5,
      name: 'Burrito',
      price:'₹ 200  ',
      description: '',
      image:burrito ,
    },
   {
      id: 6,
      name: 'California Roll',
      price:'₹ 395  ',
      description: '',
      image:roll ,
   },
   {
    id: 7,
    name: 'Caesar Salad',
    price:'₹ 249 ',
    description: '',
    image:salad ,
   },
   {
    id: 8,
      name: 'Pad Thai',
      price:'₹ 250  ',
      description: '',
      image:thai ,
   },
   {
    id: 9,
      name: 'Boneless Wings',
      price:'₹ 550  ',
      description: '',
      image:wings ,
   },
   {
    id: 10,
      name: 'Chicken Quesadilla',
      price:'₹ 450  ',
      description: '',
      image:ques ,
   },
   {
    id: 11,
    name: 'Pasta',
    price:'₹ 90  ',
    description: '',
    image:pasta,
   },
   {
    id: 12,
    name: 'Chilli Potato',
    price:'₹ 130  ',
    description: '',
    image:potato ,
   },
   
    
  ];

  return (
    <div className="container-fluid ">
      <h2 className="text text-center">Choose Your Fav & Taste It Now</h2>
      <div className="card-container">
        {foodItems.map((item) => (
          <div key={item.id} className="card">
            <img className="card-img-top" src={item.image} alt={`${item.name} image`} />
            <div className="card-body">
              <h5 className="card-title text-center text-info">{item.name}</h5>
              <p className="card-text text-center" style={{ color: 'red' }}>{item.price}</p>
              <p className="card-text text-center">{item.description}</p>
              <a style={{color:"white",fontWeight:"bold"}}href="#" className="btn btn-default">Add To Cart</a>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;                                                                                                                                                                               
                                                                                                                   