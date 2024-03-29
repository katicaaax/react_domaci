import React from "react";
import {ImCheckboxChecked} from "react-icons/im";
import {FaMinusSquare} from "react-icons/fa";
import Products from "./products";

const OneProduct = ({product, onAdd, onRemove}) => {
    //pravimo promenljivu za stilizovanje
    const design = {margin: 10, borderStyle: "dashed"};

  return (
    //prosledjujemo promenljivu za stilizovanje
    <div className="card" style = {design}> 
        <img className="card-img-top" src={product.imageLink} alt="Product Photo" style={{ width: '250px', height: '200px' }}/>
        <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p>
            <button className="btn" onClick= {() => onAdd(product.id)}>
                < ImCheckboxChecked />
            </button>
            <button className="btn" onClick={() => onRemove(product.id)}>
                <FaMinusSquare />
                </button>
        </div>
    </div>
  );
};

export default OneProduct;