
const menu = require('../../MenuList.json')
function MenuList() {
    console.log(menu)
  return (
    <>
      <ul className='menu-list'>
        {menu.map(({type,img,id}) => {
          return (
            <li key={id} className='menu-list__item'>
              <div className='menu-list__card'>
                <img src={img} alt={type} className='menu-list__img' />
                <div className='card-title'>
                  <h3 className='menu-list__title'>{type}</h3>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default MenuList;
