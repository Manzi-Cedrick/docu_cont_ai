import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
const DropdownNotification = () => {
  
  return (
    <div>
        <div className='bg-white border-2 border-bdr p-3 rounded-full'>
            <span className='text-slate-800'><FaBell/></span>
        </div>
    </div>
  );
};

export default DropdownNotification;
