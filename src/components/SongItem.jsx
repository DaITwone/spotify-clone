// import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { useNavigate } from 'react-router-dom'

export default function SongItem({name,image,desc,id}) {
  // const {playWithId} = useContext(PlayerContext)
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/song/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}
// onClick={()=>navigate(`/album/${id}`)}

//onClick={()=>playWithId(id)}