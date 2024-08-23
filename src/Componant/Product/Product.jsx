import React, { useEffect, useState } from "react";
import './Product.css';
import { MdArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoHeart } from "react-icons/go";

function HandleProduct() {
    const[product,setProduct] = useState([]);
    let [data, setIsData] = useState([]);
    let [isfilterd,setFilterd] = useState([]);
    let [item,setIsItem] = useState('');


    let ProductItem = async()=>{
        try{
            await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setProduct(json);
                console.log(json)
            })
        }catch(error){
            console.log(error);
            
        }
    }
   useEffect(()=>{
    ProductItem();
    
   },[]);

//    console.log("ProductItem:", product);

// let handleItem = ["NEWEST FIRST","POPULAR","PRICE:LOW TO HIGH","PRICE: HIGH TO LOW"];
 
let filterd = async()=>{
    try{

        await fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>{
            setIsData(json);
            console.log(json);
        });

    }catch(error){
        console.log(error.message);
        
    }
}

useEffect(()=>{
    filterd();
},[]);

 
let handleCategory = async(item)=>{
 try{
    await fetch(`https://fakestoreapi.com/products/category/${item}`)
    .then(res=>res.json())
    .then(json=>{
        setFilterd(json);
        console.log(json);
    });

 }catch(error){
    console.log(error);
    
 }

}
  useEffect(()=>{
     handleCategory(item);
  },[item]);

  console.log("filterd",isfilterd);
  
   return(
    <div>
        <div className="all-item">
        <div className="product-itm">
        <div>
        <p className="item-produt">3425 Items</p>
        </div>
         <div className="iterenal">
       
<p className="arror">
<MdArrowForwardIos style={{marginTop: "0.8rem",gap:"2rem",marginLeft:"1rem"}}/>
</p>
   <p className="show-filter"> SHOW FILTER</p>
   
            </div> 
           
        </div>
        <div>
       {/* <p className="recom">RECOMMENDED &nbsp; <MdKeyboardArrowDown style={{cursor:"pointer"}}/></p>  */}
       
           <p className="recom">
           <select onChange = {(e)=> setIsItem(e.target.value)}>
                <option>RECOMMEND</option>
                {data.map((d,index)=>(
                   <option key={index} value={d} style={{padding:"10px",textTransform:"uppercase"}}>{d}</option>
                ))}
            </select>
           </p>
      
       </div>
        </div>
        
        <div className="container">
            {isfilterd?.length > 0 ? (
            isfilterd.map((p)=>(
                    <div className="card" key={p.id}>
                        <div>
                            <img src={p.image} alt="product-img" width="300px" height="350px"/>
                            <h4 className="b">{p.title}</h4>
                           <div className="" style={{display:"flex",justifyContent:"space-around"}}>
                           <p className="des-do"><a href="#">Sign in</a> or Create an account to see pricing</p>
                            <p style={{}}><GoHeart style={{marginTop:"-5px",fontSize:"25px",cursor:"pointer"}}/> </p>
                           
                            </div>
                             </div>
                    </div>
                
                      ))):(
                        
                            product.map((p)=>(
                             
                                 <div className="card" key={p.id}>
                                     <div>
                                         <img src={p.image} alt="product-img" width="300px" height="350px"/>
                                         <h4 className="b">{p.title}</h4>
                                        <div className="" style={{display:"flex",justifyContent:"space-around"}}>
                                        <p className="des-do"><a href="#">Sign in</a> or Create an account to see pricing</p>
                                         <p style={{}}><GoHeart style={{marginTop:"-5px",fontSize:"25px",cursor:"pointer"}}/> </p>
                                        
                                         </div>
                                          </div>
                                 </div>
                
                      )))
                    }
        </div>
    </div>
   ); 
}

export default HandleProduct;