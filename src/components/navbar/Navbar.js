import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ['Home', 'Skills & Projects',  'Experience'];

  return (
    <div className="navbar flex px-20 py-4">
      <div className='designation font-bold text-lg flex-1 w-64'>Developer.</div>
      <ul className='nav-menu flex flex-1 w-32 gap-20 text-secondary font-semibold'>
      {navItems.map((item, index) => (
          <li key={index} 
          className={activeIndex === index ? 'active' : ''}
          onClick={() => setActiveIndex(index)}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
