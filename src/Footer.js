import React from 'react';
import  {AiOutlineMore,AiOutlineShoppingCart,AiOutlineDown,AiFillStar,AiOutlineSearch, AiOutlineRedEnvelope, AiFillRedEnvelope, AiOutlineMail} from'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaSearch, FaTwitch, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return <div className='footer'>
 <div className='ue'><img id='footimg' src='imgs/uepage.png'/></div>
 <div className="tab">
     <div className='footflex'>
         <div className="topped">Useful links</div>
         <div>Explore</div>
         <div>About</div>
         <div>Privacy policy</div>
         <div>View cart</div>
     </div>
     <div className='footflex'>
         <div className="topped">Accounts</div>
         <div>Help</div>
         <div>Sign-in</div>
         <div>My Orders</div>
     </div>
     <div className='footflex'>
         <div className="topped">Customer Services</div>
         <div>Payment methods</div>
         <div>Delivery</div>
         <div>Site Map</div>
     </div>
     <div className='footflex'>
    
     </div>
 </div>
 <div id='carts'>
     <div className='dsearch'>
 <AiOutlineMail className='scribe'/>

 <input type='email' id='downsearch' placeholder='Email subsciption'/>

 </div>
 <div className='subs'>
     subscribe
 </div>
 </div>

 <div className='social'>

    <a target='_blank' href='Instagram.com' className='gram'> <FaInstagram/></a>
    <a target='_blank' href='facebook.com' className='gram'> <FaFacebook/></a>
    <a target='_blank' href='Pinterest.com' className='gram'>  <FaPinterest/></a>
    <a target='_blank' href='Youtube.com' className='gram'>     <FaYoutube/></a>
 </div>

 <div className='powered'>Powered by <span id='ue'>UnityElites</span></div>


  </div>
};
