import React, { useState, useEffect } from 'react';
import "./productListing.css"

  export function ProductListing(props) {

    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(1);

    React.useEffect(() => {
      fetch(`https://api.prodo.in/products/category/${props.category_id}?limit=${props.limit}&page=1`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
        })
        .then((data) =>{ setProducts(data?.items);console.log(data?.items);})
        .catch((error) => console.log('the error is ' + error));
    }, []);

    React.useEffect(()=>{
      onPageChange(page);
    },[page])

    function onPageChange(page){
      fetch(`https://api.prodo.in/products/category/${props.category_id}?limit=${props.limit}&page=${page}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
        })
        .then((data) =>{ setProducts(data?.items);console.log(data?.items);})
        .catch((error) => console.log('the error is ' + error));
    }

    // Logic for displaying products
    const productsPerPage = 10;
    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentPoducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products?.length/productsPerPage); i++) {
      pageNumbers.push(i);
    }

    function handleClick(event){
      setPage(event.target.id);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
        >
          {number}
        </li>
      );
    });

    return(
      <div className="wrapper">
        <div className="product-list">
          {products !== null  && currentPoducts.map((item)=>{
            return(
            <div className="product-card">
              <img src={item.productImages[0]} alt="ddfddfdffd"/>
              <div className="product-name">
                <p>{item.productName}</p>
              </div>
              <div className="btn">
                Show Price
              </div>
            </div>)
        })}
        </div>
         {<ul id="page-numbers">
          {renderPageNumbers}
        </ul>}
      </div>
    )
  };
