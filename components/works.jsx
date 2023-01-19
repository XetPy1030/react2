import React, { useState } from "react";

// An array is given. Output it as a list of ul. At the end of each li, make a button for editing. Let the input for editing appear in the text li on the first click on this button, and the modified text appears on the second click.
export function Work1() {
    const [works, setWorks] = useState([
        { id: 1, title: "work1" },
        { id: 2, title: "work2" },
        { id: 3, title: "work3" },
    ]);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState("");

    const editWork = (id, title) => {
        setEditId(id);
        setEditTitle(title);
        setEdit(true);
    };

    const saveWork = (id, title) => {
        const newWorks = works.map((work) => {
            if (work.id === id) {
                return { ...work, title: title };
            }
            return work;
        });
        setWorks(newWorks);
        setEdit(false);
    };

    return (
        <div>
            <ul>
                {works.map((work) => (
                    <li key={work.id}>
                        {edit && editId === work.id ? (
                            <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                        ) : (
                            work.title
                        )}
                        <button onClick={() => editWork(work.id, work.title)}>
                            {edit && editId === work.id ? "cancel" : "edit"}
                        </button>
                        {edit && editId === work.id ? (
                            <button onClick={() => saveWork(work.id, editTitle)}>save</button>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}

let initNotes = [
    {
        id: 1,
        fields: [
            { name: "name", value: "John", isEdit: false },
            { name: "age", value: 20, isEdit: false },
        ]
    },
    {
        id: 2,
        fields: [
            { name: "name", value: "Mary", isEdit: false },
            { name: "age", value: 25, isEdit: false },
        ]
    },
]

export function Work2() {
    const [notes, setNotes] = useState(initNotes);

    const rows = notes.map(note => {
        const cells = note.fields.map(field => {
            let elem;

            if (!field.isEdit) {
                elem = <span onClick={() => startEdit(note.id, field.name)}>
                    {field.value}
                </span>;
            } else {
                elem = <input
                    value={field.value}
                    onChange={(event) => changeCell(note.id, field.name, event)} onBlur={() => endEdit(note.id, field.name)}
                />;
            }
            
            return <td key={field.name}>{elem}</td>;
        });

        return <tr key={note.id}>{cells}</tr>;
    });

    function miniFunction(id, name, dict) {
        setNotes(notes.map(note => {
            if (note.id === id) {
                const fields = note.fields.map(field => {
                    if (field.name === name) {
                        return {...field, ...dict}
                    } else{
                        return field;
                    }
                });
                
                return { id, fields };
            } else {
                return note;
            }
        }));
    }


    function startEndEdit(id, name, isStart) {
        miniFunction(id, name, {isEdit: isStart})
    }


    function startEdit(id, name) {
        startEndEdit(id, name, true);
    }

    function endEdit(id, name) {
        startEndEdit(id, name, false);
    }
    
    function changeCell(id, name, event) {
        miniFunction(id, name, {value: event.target.value})
    }

    return <div>
        <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
}