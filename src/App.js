//Please use react-folder-tree => v^4.1.0 instead of latest version => for better styling
import FolderTree, { testData } from "react-folder-tree";
import CustomizeDataTreeBrowser from "./CustomizeDataTreeBrowser";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles.css';

import { links } from './data';

export default function App() {
  const [sideBarOpen,setSideBarOpen]=useState(false)
  const changeStatus = () =>
  {
    setSideBarOpen(!sideBarOpen)
  }
  return (

    <>
    <div>
    <button onClick={()=>setSideBarOpen(true)} className='sidebar-button'><FaBars/></button>
    </div>

    <aside className={sideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
    <div className='sidebar-header'>
    <ul className='social'>
      {links.map((link) => {
        const { id, url, text, icon } = link;
        return (
          <li key={id}>
            <a href={url}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
 
     <button className='close-btn' onClick={()=>setSideBarOpen(false)}>
        <FaTimes />
      </button> 
   </div> 
<div className="App">
  <CustomizeDataTreeBrowser />
  </div> 
  </aside>


    
    </>
    
        
     
  );
}
