import React, { useState } from 'react';

export default function User({
    id,
    name,
    surName,
    age,
    isBan,
    banUser,
    editUser,
    isEdit,
    saveUser,
}) {
    // Add the ability to edit user data via input (in edit mode, an input appears in which data is entered. Otherwise span with data)
    const [editName, setEditName] = useState(name);
    const [editSurName, setEditSurName] = useState(surName);
    const [editAge, setEditAge] = useState(age);

    function editUserHandler() {
        editUser(id, editName, editSurName, editAge);
    }

    if (isEdit) {
        return (
            <span>
                <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                />
                <input
                    type="text"
                    value={editSurName}
                    onChange={(e) => setEditSurName(e.target.value)}
                />
                <input
                    type="number"
                    value={editAge}
                    onChange={(e) => setEditAge(e.target.value)}
                />
                <button onClick={() => saveUser(id, editName, editSurName, editAge)}>Save</button>
            </span>
        );
    }

    return (
        <span>
            <h1 style={{
                'color': isBan ? 'red' : 'black',
            }}>{name}</h1>
            <h2>{surName}</h2>
            <h3>{age}</h3>
            <button onClick={() => banUser(id)}>BAN</button>
            <button onClick={() => editUserHandler()}>EDIT</button>
        </span>
    );
}