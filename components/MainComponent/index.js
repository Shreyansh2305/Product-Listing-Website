import React from 'react';
import './mainContent.css';
import { useNavigate } from "react-router-dom";
import {productListing } from "../../HOC/productListing";
import { Router, Routes, Route, Switch } from "react-router-dom";
 
export default function MainComponent() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://api.prodo.in/categories')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((data) =>{ setData(data);console.log(data);})
      .catch((error) => console.log('the error is ' + error));
  }, []);

  function handleClick(){
    
  }
  return (
    <div>
      {data !== null &&
        data.map((category) => (
          <div className="category"
            onClick={handleClick}>
              <p>{category.categoryName}</p>
          </div>
        ))}
    </div>
  );
}
