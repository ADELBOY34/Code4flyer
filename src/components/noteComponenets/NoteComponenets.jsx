import React, { useState } from 'react'
import "./NoteComponenets.css"
import { CiStickyNote } from "react-icons/ci";

function NoteComponenets({note}) {
  
  return (
     <>
     <div className='note-box'>
      <h3 className='NoteTitle'><CiStickyNote  /> Note</h3>
      {note}
     </div>
     </>
  )
}

export default NoteComponenets
