// src/components/CharacterCard.js

import React from 'react';
import { useHistory } from 'react-router-dom';

function CharacterCard({ character }) {
    const history = useHistory();

    const handleDetailsClick = () => {
        history.push(`/characters/${character.id}`);
    };

    return (
        <div className=' block m-[5px] p-[5px] sm:flex border-[5px] border-solid border-[#d5d5d5] border-r-[#777777] border-b-[#777777] sm:p-[20px] sm:m-[20px] bg-[#222222] rounded-xl shadow-lg shadow-[#444444]'>
            <img className='max-w-40 sm:max-w-60 rounded-lg mr-3 border-[4px] border-[#777777] border-r-[#d5d5d5] border-b-[#d5d5d5] inline shadow-lg shadow-gray-800' src={character.image} alt={character.name} />
            <ul>
                <li className='text-xl sm:text-3xl text-[#ff6600] font-bold mb-[2px] sm:mb-[5px]'>{character.name}</li>
                <li className='text-lg sm:text-2xl font-bold text-[#d0ff00] mb-[2px] sm:mb-[5px]'>Type : &nbsp; {character.type}</li>
                <li className='text-lg sm:text-2xl font-bold text-[#d0ff00] mb-[2px] sm:mb-[5px]'>Total Episodes :&nbsp; {character.episode.length}</li>
                <li className='text-lg sm:text-2xl font-bold text-[#d0ff00] mb-[2px] sm:mb-[5px]'>Location :&nbsp; {character.location.name}</li>
                <li className='CharacterDetailsText2'>
                    <button className='bg-[#383f16] text-[#d0ff00] border-[3px] border-[#000000] border-t-[#777777] border-l-[#777777] rounded-[20px] sm:h-[40px] sm:w-[120px] h-[30px] w-[100px] text-sm sm:text-lg font-bold shadow-sm hover:shadow-md hover:shadow-[#383838] hover:bg-[#65770c] sm:hover:h-[42px] sm:hover:w-[125px] hover:rounded-[21px] ease-in-out duration-75' onClick={handleDetailsClick}>
                        Details
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default CharacterCard;

