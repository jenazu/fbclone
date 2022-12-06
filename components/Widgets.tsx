import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Contact from './Contact';

const contacts = [
    {src: 'https://links.papareact.com/f0p', name: "jeff"},
    {src: 'https://links.papareact.com/kxk', name: "elon"},
    {src: 'https://links.papareact.com/zvy', name: "bill"},
    {src: 'https://links.papareact.com/snf', name: "mark"},
    {src: 'https://links.papareact.com/d0c', name: "harry"},
    {src: 'https://links.papareact.com/6gg', name: "queen"},
    {src: 'https://links.papareact.com/r57', name: "jane"},
]

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
       <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
            <VideocamIcon className='h-6'/>
            <SearchIcon className='h-6'/>
            <MoreHorizIcon className='h-6'/>
        </div>
       </div>
       {contacts.map((contact, index) => (
        <div>
             <Contact key={index} src={contact.src} name={contact.name}/>
        </div>
       ))}
    </div>
  )
}

export default Widgets
