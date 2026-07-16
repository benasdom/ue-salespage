import styled from 'styled-components';
import  {AiOutlineMore,AiOutlineShoppingCart,AiOutlineDown,AiFillStar,AiOutlineSearch, AiFillQuestionCircle} from'react-icons/ai';


export const Home = () => {
  
  return (
  
  <div className="homepage">
 
    <img className='baglogo' src="imgs/baglogo.png" />
  
  <input type="text"  className="en" placeholder='catalogue' list="categories"/>
    <datalist id="categories">
    <option>Cosmetics</option>
    <option>Gadgets</option>
    <option>Cars</option>
    <option>Real Estate</option>

    </datalist>
   
      <div className="search">
      <input  className='sbox' type="text" placeholder='search ...'/>
      <div className='sbar' title="search"><AiOutlineSearch/></div>
      </div>
      <div className="cart">
        <div title='Help'><AiFillQuestionCircle/></div>
        <div title='Accounts'>Accounts</div>
        <div className='cardit' title='In-cart'>
      <AiOutlineShoppingCart/>
      <span className="cartnum">0</span>
      </div>
      </div>

      </div>);
};
