import  {AiOutlineShoppingCart,AiOutlineSearch, AiFillQuestionCircle} from'react-icons/ai';
import { useSearch } from './SearchContext';

export const Home = () => {
  const { openSearch } = useSearch();

  return (
  
  <div className="homepage">
 
    <img className='baglogo' alt="pic" src="imgs/baglogo.png" />
  
  <input type="text"  className="en" placeholder='catalogue' list="categories"/>
    <datalist id="categories">
    <option>Cosmetics</option>
    <option>Gadgets</option>
    <option>Cars</option>
    <option>Real Estate</option>

    </datalist>
   
      <div className="search">
      <input  className='sbox' type="text" placeholder='search ...'/>
      <button type="button" className='sbar' title="search" onClick={openSearch}><AiOutlineSearch/></button>
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