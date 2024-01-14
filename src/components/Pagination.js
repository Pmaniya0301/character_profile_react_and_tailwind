// src/components/Pagination.js

import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className='pl-[20px] pb-[10px] flex justify-between bottom-[10px] pr-[20px] disabled:cursor-not-allowed'>
            <button className='bg-[#d5d5d5] text-[#222222] border-[3px] border-[#000000] border-t-[#777777] border-l-[#777777] rounded-[20px] h-[30px] w-[80px] text-sm font-bold shadow-sm hover:shadow-md hover:shadow-[#383838] hover:bg-[#bbbbbb] ' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>&nbsp;
            <span className='paginationOfText'>{currentPage} of {totalPages}</span>&nbsp;
            <button className='bg-[#d5d5d5] text-[#222222] border-[3px] border-[#000000] border-t-[#777777] border-l-[#777777] rounded-[20px] h-[30px] w-[80px] text-sm font-bold shadow-sm hover:shadow-md hover:shadow-[#383838] hover:bg-[#bbbbbb] ' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
