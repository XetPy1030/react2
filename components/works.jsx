import { useState } from 'react';
import User from './user';

export default function Users() {
    const [initUsers, setInitUsers] = useState([
        { id: 1, name: 'John', surName: 'Doe', age: 25, isBan: false, isEdit: false },
        { id: 2, name: 'Jane', surName: 'Doe', age: 23, isBan: false, isEdit: false },
        { id: 3, name: 'Jack', surName: 'Doe', age: 27, isBan: false, isEdit: false },
    ]);

    function banUser(id) {
        const newUsers = initUsers.map((user) => {
            if (user.id === id) {
                user.isBan = true;
            }
            return user;
        });
        setInitUsers(newUsers);
    }

    // Add the ability to edit user data via input (in edit mode, an input appears in which data is entered. Otherwise span with data)
    function editUser(id, name, surName, age) {
        const newUsers = initUsers.map((user) => {
            if (user.id === id) {
                user.name = name;
                user.surName = surName;
                user.age = age;
                user.isEdit = true;
            }
            return user;
        });
        setInitUsers(newUsers);
    }

    function saveUser(id, name, surName, age) {
        const newUsers = initUsers.map((user) => {
            if (user.id === id) {
                user.name = name;
                user.surName = surName;
                user.age = age;
                user.isEdit = false;
            }
            return user;
        });
        setInitUsers(newUsers);
    }

    console.log(initUsers);

    const usersHtml = initUsers.map((user) => {
        return (
            <User
                key={user.id}
                id={user.id}
                name={user.name}
                surName={user.surName}
                age={user.age}
                isBan={user.isBan}
                banUser={banUser}
                editUser={editUser}
                isEdit={user.isEdit}
                saveUser={saveUser}
            />
        );
    });

    return (
        <div>
            {usersHtml}
        </div>
    );
}