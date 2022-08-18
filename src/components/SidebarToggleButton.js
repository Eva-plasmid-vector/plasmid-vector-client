import React, {useState} from 'react';
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';

const SidebarToggleButton = ({ onSidebar, showSidebar} ) => {
    
    
  return (
    <div className='operation'>
        <button className="sidebar-actions" id="toggle-sidebar"
        onClick={
         onSidebar
          }
        >
           {showSidebar ? 
          <SwitchLeftIcon className='toggle-sidebar-icon' />
            :   <SwitchRightIcon className='toggle-sidebar-icon' />
            
            }
         
        </button>
    </div>
  )
}

export default SidebarToggleButton