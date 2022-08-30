import React from 'react'
// import  from 'react-router-dom';


const NaviList = ({ pastRelease, setCurrentCat, currentCat}) => {
  



  let categoryList = [];

  pastRelease.map((value, key, index)=>{ key = {index}
    if(categoryList.includes(value.type) === true){
      return''
    }
    else{
      categoryList.push(value.type);
     
    }
    return categoryList
  })


  return (
    
    <ul className='navi-ul'>
        
          <li 
            className={currentCat=== ''? 'navi-li active': 'navi-li'}
            onClick={()=>{
              
              setCurrentCat('')
              
            }}
            >
            Show All
        </li>

        {categoryList.map((categoryList) => (
          
            <li 
            key={categoryList.toString()}
            className={categoryList ===(currentCat)? 'navi-li active': 'navi-li'}
            onClick={()=>{             
              setCurrentCat(categoryList);
            }
            }
              >
               {categoryList}
            </li>

            
           
        ))}
    </ul>
  )
}

export default NaviList