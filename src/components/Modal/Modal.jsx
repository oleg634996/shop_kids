import { useEffect } from "react";
import MenuList from "../MenuList/MenuList";
function Modal ({togglModal}){
    useEffect(() => {
        const handleKeyDown = event => {
          if (event.code === 'Escape') {
            togglModal();
          }
        };
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [togglModal]);

    return  <div className=" overlay" onClick={event =>{
        if (event.target.className) {
            togglModal();
          }
    }}>
      <div className="modal">
      <MenuList/>
      </div>
    </div>
}

export default Modal