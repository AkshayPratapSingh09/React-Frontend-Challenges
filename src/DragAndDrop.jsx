import React, { useState } from 'react'

const DragAndDrop = () => {

    const [notes,setNotes] = useState([
        {
            id:1,
            text:"First Task"
        },
        {
            id:2,
            text:"Second Task"
        },
        {
            id:3,
            text:"Third Task"
        },
    ])

  return (
    <>
    <Notes notes={notes} setNotes={setNotes} />
    </>
  )
}

export default DragAndDrop