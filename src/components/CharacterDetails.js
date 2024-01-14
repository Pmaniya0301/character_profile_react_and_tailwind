// src/components/CharacterDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetails() {
    const { characterId } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error('Error fetching character details:', error);
            }
        };

        fetchCharacterDetails();
    }, [characterId]);

    if (!character) {
        return <div className='pt-5 pb-5 pr-2'>Loading...</div>;
    }

    return (
        <div className='m-[5px] p-[25px] sm:m-[20px] sm:p-[20px] bg-[#222222] rounded-md border-[3px] sm:border-[5px] border-solid border-[#d5d5d5]' >

            <img className='max-w-56 sm:max-w-72 rounded-full' src={character.image} alt={character.name} />
            <p className='text-3xl sm:text-5xl font-extrabold text-[#ff6600] mt-[10px] mb-[5px]'>{character.name}</p>


            <p className='text-lg sm:text-2xl mb-[5px] font-bold text-[#d0ff00]'>Status :&nbsp; {character.status}</p>
            <p className='text-lg sm:text-2xl mb-[5px] font-bold text-[#d0ff00]'>Species :&nbsp; {character.species}</p>
            <p className='text-lg sm:text-2xl mb-[5px] font-bold text-[#d0ff00]'>Gender :&nbsp; {character.gender}</p>
            <p className='text-lg sm:text-2xl mb-[5px] font-bold text-[#d0ff00]'>Origin :&nbsp; {character.origin.name}</p>
            <p className='text-lg sm:text-2xl mb-[5px] font-bold text-[#d0ff00]'>Location :&nbsp; {character.location.name}</p>

            <h3 className='text-lg sm:text-2xl mb-[5px] font-bold text-[#d0ff00]'>Episodes : &nbsp;</h3>
            <ul className='characterDetailsUl'>
                {character.episode.map(episode => (
                    <li className='list-disc text-sm ml-[40px] mb-[1px] pl-[3px] font-semibold text-[#ff6600]' key={episode}>{episode}</li>
                ))}
            </ul>

            <p className='text-sm sm:text-2xl mb-[5px] mt-1 font-bold text-[#d0ff00]'>URL :&nbsp;   {character.url}</p>
            <p className='text-lg sm:text-2xl mb-[5px] font-bold text-[#d0ff00]'>Created :&nbsp; {character.created}</p>
        </div>
    );
}

export default CharacterDetails;
