
import "./App.css";
import NavBar from "./navBar";
import Products from "./products";
import MoreInfo from "./moreInfo";
import Cart from "./cart";
import MeetTeam from './MeetTeam';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from "react";






function App() {
  const emptyCart = () => {
    setCartProducts([]);
    setCartNum(0);
    const updatedProducts = products.map((product) => ({
      ...product,
      amount: 0,
    }));
    setProducts(updatedProducts);
  };
  //pravimo niz proizvoda
  const updateCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };
 const [cartProducts, setCartProducts] = useState([]);
 const refreshCart = () => {
const newProducts = products.filter((product) => product.amount > 0);
setCartProducts(newProducts);
 };
  const [cartNum, setCartNum] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Beauty Blender",
      description: "The Beauty Blender is a revolutionary makeup tool designed to effortlessly achieve a flawless and airbrushed finish. ",
      imageLink: "https://www.instyle.com/thmb/GxwIgSz4fZq-O6LcuJ9OqgYprZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/053023-silicone-sponge-lead-f29ba2a7d2de4638a94f0d808d0ac0b1.jpg",
      amount: 0,
    },
    {
      id: 2,
      title: "Foundation",
      description: " Discover the ultimate foundation for a radiant and flawless complexion with our premium Foundation product.",
      imageLink: "https://media.allure.com/photos/63ead77ebb96a575e80b11c6/3:2/w_3000,h_2000,c_limit/2-13-mature-skin-foundations.jpg",
      amount: 0,
    },
    {
      id: 3,
      title: "Setting Powder",
      description: "Elevate your makeup game with our Setting Powder product, the ultimate finishing touch for a long-lasting and flawless look.",
      imageLink: "https://www.hera.com/int/en/products/__icsFiles/afieldfile/2022/12/22/20220718_final_SOFT-FINISH-LOOSE-POWDER_pdp_detail_img03_pc.jpg",
      amount: 0,
    },
    {
      id: 4,
      title: "Concelear",
      description: "Our Concealer offers full coverage that effectively hides imperfections, dark spots, redness, and uneven skin tone.",
      imageLink: "https://s.abcnews.com/images/GMA/GMA_AmazonConcealer_081723_V01_GV_1692288671674_hpMain_16x9_992.jpg",
      amount: 0,
    },
  ]);
  const addToCart = (id) => {
    products.map((product) => {
     if(product.id === id){
         product.amount = product.amount + 1; 
         const a = cartNum + 1;
         setCartNum(a);
         if(product.amount === 1){
          updateCart(product);
         }else{
          refreshCart();
         }
        
         console.log("product id=", product.id, "amount=", product.amount);
     }
    });
 };
 const remFromCart = (id) => {
  products.map((product) => {
     if(product.id === id){
         if(product.amount > 0){
             product.amount = product.amount - 1;
             const a = cartNum - 1;
             setCartNum(a);
             refreshCart();
             console.log("product id=", product.id, "amount=", product.amount);
         }else{
           alert("Amount of product is already 0.");
        }
     }
  });
 };

  return (
    
    <BrowserRouter>
    <NavBar cartNum={cartNum} onEmptyCart={emptyCart}/>

    <MoreInfo moreInfoText="Discover a diverse selection of beauty products at Katy Beauty Shop. Your one-stop destination for achieving perfect skin. Reach out to us for any business inquiries at radosavljevic.katarina98@gmail.com." />
    <Routes>
    <Route
      path="/"
      element={
        <Products
        products={products}
        onAdd={addToCart}
        onRemove={remFromCart}
      />
      }
      />
   <Route path="/cart" 
   element={<Cart cartProducts={cartProducts}/>}/>
<Route path="/meetTeam" element={<MeetTeam />} />
    </Routes>
    </BrowserRouter>
    

  );
}

export default App;

