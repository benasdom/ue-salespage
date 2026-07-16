import React from 'react';
import { AiFillEnvironment,AiOutlineStar,AiOutlineShoppingCart, AiOutlineBars, AiOutlineLogout } from "react-icons/ai";
import  {FaBars, FaSearch, FaSignOutAlt, FaStar} from'react-icons/fa';
import { useState,useEffect } from 'react';
export const Navbar = () => {

  const [ranges, setranges] = useState("");
  const [cursorY, setcursorY] = useState("");
  const [alfa, setalfa] = useState("");
  const [gadgets, setgadgets] = useState([{
    title:"",
    price:{currency:"",current_price:""},
    thumbnail:"",
    url:"",
  }]);
  const [cosmetics, setcosmetics] = useState([{ title:"",
  price:{currency:"",current_price:""},
  thumbnail:"",
  url:"",}]);

  const getcosmeticsapi=()=>{
     fetch("https://benasdom.github.io/commerceapi/cosmeticsapi.json").then((res)=>res.json()).then((res)=>setcosmetics(res.data));
  
  }
  const getgadgetsapi=()=>{
    fetch("https://benasdom.github.io/commerceapi/gadgetsapi.json").then((res)=>res.json()).then((res)=>setgadgets(res));
 
 }
 useEffect(() => {
  
  
    getcosmeticsapi();
    getgadgetsapi();

  

    
  },[])



  

function rangeset(vals){
// setranges(ranges.value=vals)
  setranges(document.querySelector("#emp").innerText=vals + "%" +"");

  setalfa(1);
  document.onmouseup=()=>{
    setalfa(0);
  }


  }

  function curs(cals){
    setcursorY(cals);
  }



  
 const showmenu=()=>{

  const menu=document.querySelector(".lilnav")
   if(menu.style.display=="none"){
    menu.style.cssText="display:flex";

   }
   else{
    menu.style.cssText="display:none";

   }
 }
 const [iaddto, setiaddto] = useState("Added to cart");

  return <div>
    <div id="popup"><div className='logsbox'><div>Wish to Logout?</div><div className='outicon'><AiOutlineLogout style={{color:"dodgerblue"}}/></div><div className='flexlog'><div id="logouthere">Yes</div>
    <div id="dontlogout" >No</div></div></div></div>
    <div className='menubars'>

    <label htmlFor="checks" onClick={showmenu} className='barrs' ><FaBars/></label>
    <input type="checkbox" id="checks"/>
    </div>
    <div className='lilnav'>
    <div id="piccontent" >
      <img title="users-image"  id='picid'src='imgs/profile.png' loading='lazy'/>
    </div>
    <div id="content"  title="user"  >User</div>
      <div className='menu'>
            
      <div title='Explore' className='menus'>
       Explore
      </div>
    <a title="Send-mail" href="mailto:ben.k.asumadu@gmail.com" className='menus'> <div>Mail us</div></a>
    <div  title="Customer-service"  className='menus'>Customer service</div>
    <div title="Delivery" className='menus'><AiFillEnvironment style={{paddingRight:"10px"}}/>Deliver to Ghana</div>
    <div title="become a seller" className='menus'>Sell</div>
 
    </div>

    <div title="Google Sign-in" className="g-signin2 " data-onsuccess="onSignIn" data-theme="dark">awaiting....</div>
    <button title="Google Sign-out" className=" menuss"id='menuss'><p id="outs">SignOut</p><FaSignOutAlt/></button>
  </div>
  <div className='wrap'>
   <div className='wrapped'>
     <div className='wrapleft' title="Add to cart feature">Add <AiOutlineShoppingCart/></div>
     <div className='boxa' title='rotation feature'>
       
      <div id="full"> 100%</div>
       <input id="rangeset" min="0" max="100" onChange={(range)=>{rangeset(range.target.value);curs(range.target.value)}} type="range"/>
      <div id="emp" style={{
        opacity:alfa,
        marginTop:-cursorY+30+"px",
        position:"relative",
      }}>0%</div>
     </div>
     <div className='centerwrap' title='product feature'>
       <img id="headset" src="imgs/headset.png" />
       </div>
     <fieldset>
       <div className='itemcolor' title='color variation feature'>
 <div className="black"><label htmlFor="black">black</label><input type='radio' id="black" name='colored' /> </div>
 <div className="white"><label htmlFor="white">white</label> <input type='radio' id="white" name='colored'/> </div>
 </div>
       <legend><div className='wrapright' title='description feature'>Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, Lightsync RGB, Blue VO!CE mic technology and PRO-G audio drivers - Black
     </div>
     <div className='named'>
       <h3>HeadSet</h3>
     </div>
     <div className='ratings' title='rating feature'>
       <span className='rateval' id="rateval">4.8</span>
     <AiOutlineStar id="colstar"/>
     <AiOutlineStar id="colstar"/>
     <AiOutlineStar id="colstar"/>
     <AiOutlineStar id="colstar"/>
     <AiOutlineStar id="colstar"/>
   

     </div>
     </legend>
     </fieldset>
     
     </div>
     {/* sideoptions */}
     <div className='sidewrap'>

         <a id='sideone' className='sidecontent'>
         <div className='sideinfo'>
         <p className='gadgets'>Quality gadgets</p>
           <h2 className='details'>Get your amazing devices here !</h2></div>
         <img src="https://www.bimmertimes.com/wp-content/uploads/2012/12/BMW-i8-Concept-Roadster-LA-AUTOSHOW-2012-BIMMERTIMES-53-1024x678.jpg"/></a>
         <a id='sideone' className='sidecontent'>
         <div className='sideinfo'>
         <p className='gadgets'>Dont miss out</p>
           <h2 className='details'>We have the best prices !</h2></div>
         <img src="https://www.tuvie.com/wp-content/uploads/autonomous-passenger-drone-by-robert-kovacs2.jpg"/></a>
     </div>
     {/* sideoptions */}

     
 </div>

<div className='noticea'>
  <div className='glass'>
<div className='noteb'>
  <h1 className='servic' data-text="Do you like our services?">Do you like our services?</h1></div>
<div className='noteb'><p id="doyou" data-text="We give users the ability to buy and sell on our system" >We give users the ability to buy and sell on our system</p></div>
<div className='notebb'><a href='#' className='buy'>buy</a><a href='#' className='sell'>sell</a></div>
</div>
</div>
{/* box */}
<div className='uepics'>

<img src="imgs/ueo.png"/>
<img  src="imgs/ueb.png"/>

</div>
{/* box */}

<div className='boxeshere'>
  <div className='boxersa'>
<div className='onea'><img id='carda' src='imgs/cardb.png'/></div> <p className='par'>Elite-commerce allows you to buy and sell
  your products on their system. To get started you have to sign-up with your G-mail account. From there you are good to go</p>
</div>


  <div className='boxersa'>
  <div className='oneb'><img id='carda' src='imgs/carda.png'/></div> <p className='par'>Do you wish to buy the best gadgets and cosmetics... Look no further we got you covered. All you need to do is go to our gadgets catalogue</p>


  </div>
<div className='boxersa'>
<div className='onec'><img id='carda' src='imgs/shop.png'/></div> <p className='par'>Wish to live in your dream house?... If you are looking for a house to buy you can get that from our real estate catalogue</p>

</div>
<div className='boxersa'>
<div className='oned'><img id='carda' src='imgs/car.png'/></div> <p className='par'>We also have a catalogue for rides... wish to test our wheels, you can buy them from our cars catalogue</p>

</div>

</div>


     {/* data slider */}
<div className='slidea'>
  <div className='aslider' >
<div className='aslida' id="afirst">
<div className='picimage'><div className='picleft'><h1>The most amazing gadgets</h1><h3>Lets get you some modern trends</h3></div><div className='picright'><img src='imgs/drone.png'/></div></div>
</div>
<div className='aslida' id="bfirst">
<div className='picimage'><div className='picleft'><h1>You deserve the best</h1><h3>Dont wait any longer</h3></div><div className='picright'><img alt='bot' src='imgs/rob.png'/></div></div>
</div>
<div className='aslida' id="cfirst">
<div className='picimage'><div className='picleft'><h1>This is awesome!</h1><h3>Are you ready ...</h3></div><div className='picright'><img alt='cosmetics' src='imgs/cosmetics.png'/></div></div>
</div>
<div className='aslida' id="dfirst">
<div className='picimage'><div className='picleft'><h1>Made a choice yet?</h1><h3>Let's crack it open</h3></div><div className='picright'><img src='imgs/headset.png'/></div></div>
</div>


  </div>
</div>
     {/* data slider */}


 <div className='wraped'>
    <div className='wrapcontents'>
    <div className='categos'>Gadgets</div>

    <div className='contents'>
    <div className='allitems'>
    {
            gadgets
          .map((a,b,c)=>{
            return(
              <div className='items' key={b+"-indexb"}>
              <div className='proimage'>
                <div className='topaddto'>
                  <div className='showadded'><div className="show1"><AiOutlineStar/></div><div className="show2"><AiOutlineStar/></div></div>
                </div>
                  <img width="100%"  src={a.thumbnail}/>
                  <div className='iaddto' >
                  <span id='iaddto'>Add to cart</span>  
                    <AiOutlineShoppingCart/></div>
                  </div>
                  <div className='detailing'>
                <div className='itemstext' title={a.title}><div>Brand :</div><div className='itemtextres'>{`${a.title}`.split("").splice(0,20).join("")}</div></div>
                <div className='itemstext'><div>ItemName :</div><div className='itemtextres'>{`${a.url}`.split("").splice(0,20).join("")}</div></div>
                <div className='itemstext'><div>Price :</div><div className='itemtextresprice'>{a.price.current_price+" "+a.price.currency}</div></div>
                </div>
                </div>
            )
          })
          }
         </div>
         </div>
        <div className='categos'>cosmetics</div>
       <div className='contents'>
         <div className='allitems'>
          {
           cosmetics
          .map((a,b,c)=>{
            return(
              <div className='items' key={b+"-index"}>
              <div className='proimage'>
                <div className='topaddto'>
                  <div className='showadded'><div className="show1"><AiOutlineStar/></div><div className="show2"><AiOutlineStar/></div></div>
                </div>
                  <img width="100%"  src={a.thumbnail}/>
                  <div className='iaddto' >
                  <span id='iaddto'>Add to cart</span>  
                    <AiOutlineShoppingCart/></div>
                  </div>
                  <div className='detailing'>
                <div className='itemstext' title={a.title}><div>Brand :</div><div className='itemtextres'>{`${a.title}`.split("").splice(0,20).join("")}</div></div>
                <div className='itemstext'><div>ItemName :</div><div className='itemtextres'>{`${a.url}`.split("").splice(0,20).join("")}</div></div>
                <div className='itemstext'><div>Price :</div><div className='itemtextresprice'>{a.price.current_price+" "+a.price.currency}</div></div>
                </div>
                </div>
            )
          })
          }
       
         
                  </div>
         </div>
      
     </div>
     </div>
    
  </div>
};


// SCRAPED COSMETICS RELATED APIS
// -------------------------
// sunscreen api
// https://benasdom.github.io/commerceapi/sunscreenapi.json

// beard products api
// https://benasdom.github.io/commerceapi/bproductsapi.json

// facial serum api 
// https://benasdom.github.io/commerceapi/fserumapi.json
// ------------------------




// AMAZON API CODE
// ---------------------------
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b921225e51msh69b9eec4762f00ep139a9bjsn457b0c910a66',
// 		'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
// 	}
// };

// fetch('https://amazon23.p.rapidapi.com/product-search?query=xbox&country=US', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// ---------------------------
