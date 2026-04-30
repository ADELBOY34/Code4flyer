import React from 'react'
import "./NoteComponenets.css"
import { CiStickyNote } from "react-icons/ci";

function NoteComponenets({ note }) {
  return (
    <div className='note-box'>
      <h3 className='NoteTitle'>
        <CiStickyNote /> Note
      </h3>
      <p>{note}</p>
    </div>
  )
}

export default NoteComponenets