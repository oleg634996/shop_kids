import { ImSearch } from 'react-icons/im';

function Header({togglModal}) {
  return (
    <header className="header">
      <div className="container">
        <div className=" logo">
          <img className="logo_img" src="img/panda_logo.png" alt="panda" />
          <p className=" logo_text">PANDA</p>
        </div>
        <div className=" header-menu">
           <button type="button" className="btn-menu" onClick={(event)=>{togglModal(event)}}>
        каталог
        </button>
        </div>
        <div className="header-search">
          <input type="text"placeholder="search..." className="input" />
          <button type="button" className=" btn-input" > <ImSearch/> </button>
        </div>
       
      </div>
    </header>
  );
}

export default Header;
