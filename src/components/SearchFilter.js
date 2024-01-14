// src/components/SearchFilter.js

import React from 'react';

function SearchFilter({ filters, onFilterChange }) {
    return (
        <div className='max-w-[1200px] text-xl font-extrabold pl-2 sm:pl-6 sm:pt-2'>
            <div className='mb-1 block pt-1'>Search and Filter By :&nbsp; </div>
            <div className='block sm:inline'>
                <label className='pb-[5px] mr-3 justify-between items-center max-w-full mx-auto'>
                    Name :&nbsp;
                    <input className='bg-[#d5d5d5] border-[3px] border-[#222222] border-t-[#777777] border-l-[#777777] rounded-[20px] h-[25px] w-[175px] text-lg font-bold shadow-sm hover:shadow-sm hover:shadow-[#222222] focus:shadow-[#222222] focus:shadow-lg' type="text" value={filters.name} onChange={(e) => onFilterChange('name', e.target.value)} />
                </label>
            </div>
            <div className='block sm:inline'>
                <label className='pb-[5px] mr-3 justify-between items-center max-w-full mx-auto'>
                    Location :&nbsp;
                    <input className='bg-[#d5d5d5] border-[3px] border-[#222222] border-t-[#777777] border-l-[#777777] rounded-[20px] h-[25px] w-[175px] text-lg font-bold shadow-sm hover:shadow-sm hover:shadow-[#222222] focus:shadow-[#222222] focus:shadow-lg' type="text" value={filters.location} onChange={(e) => onFilterChange('location', e.target.value)} />
                </label>
            </div>
            <div className='block sm:inline'>
                <label className='pb-[5px] mr-3 justify-between items-center max-w-full mx-auto'>
                    Episodes :&nbsp;
                    <input className='bg-[#d5d5d5] border-[3px] border-[#222222] border-t-[#777777] border-l-[#777777] rounded-[20px] h-[25px] w-[175px] text-lg font-bold shadow-sm hover:shadow-sm hover:shadow-[#222222] focus:shadow-[#222222] focus:shadow-lg' type="text" value={filters.episodes} onChange={(e) => onFilterChange('episodes', e.target.value)} />
                </label>
            </div>
        </div >
    );
}

export default SearchFilter;
