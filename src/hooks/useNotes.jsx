import { useState } from "react"

const defaultNotes = [
    {
        id: 1,
        name: 'Nota 1',
        code: 'Prueeba 1',
        isFavorit: true,
    },
    {
        id: 2,
        name: 'Nota 2',
        code: 'Prueeba 2',
        isFavorit: true,
    }
]
export function useNotes() {

    const [notes, setNotes] = useState(defaultNotes)
    const [currentNoteId, setCurrentNoteId] = useState(1)

    const updateNote = () => {
        const findNote = notes.findIndex(note => note.id === currentNoteId)
        const newNote = structuredClone(notes)
        newNote[findNote.id].code += findNote.code

        setNotes(prev => ({ ...prev, ...newNote }))
    }
    return { notes, setNotes, updateNote }
}