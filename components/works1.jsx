import { useEffect, useState } from "react"

function Task61() {
    const [arr, setArr] = useState(['a'])

    return <div>
        <p>{arr.toString()}</p>
        <button onClick={() => {
            let newarr = Object.assign([], arr)
            newarr.push('a')
            setArr(newarr)
        }}>+</button>
        <button onClick={() => {
            let index = 0;
            let newarr = Object.assign([], arr)
            newarr.splice(index, 1);
            setArr(newarr)
        }}>-</button>
        <button onClick={() => {
            let index = 1;
            let newarr = Object.assign([], arr)
            newarr[index] = 'd';
            setArr(newarr)
        }}>change</button>
        <button onClick={() => {
            let newarr = Object.assign([], arr)
            newarr.reverse();
            setArr(newarr)
        }}>revert</button>
    </div>
}

export function Work6() {
    return <div>
        <Task61 />
    </div>
}

export function Work7() {
    const [arr, setArr] = useState(['a', 'b', 'c', 'd', 'e'])

    function remItem(index) {
        let newarr = Object.assign([], arr);
        newarr.splice(index, 1);
        setArr(newarr);
    }

    const arrHtml = arr.map((item, index) => {
        return <li key={index}>
            {item}
            <button onClick={() => remItem(index)}>del</button>
        </li>
    })

    return <div>
        <ul>
            {arrHtml}
        </ul>
        <input type="text" onBlur={(elem) => {
            let newarr = Object.assign([], arr);
            newarr.push(elem.target.value);
            setArr(newarr);
            elem.target.value = '';
        }} />
    </div>
}

export function Work8() {
    const [arr, setArr] = useState([1, 2, 3, 5, 6])
    const [av, setAv] = useState(0);

    function calcAv() {
        let sum = 0;
        for (let item of arr) {
            sum += +item;
        }
        if (sum / 5 !== av) {
            setAv(sum / 5);
        }
    }

    useEffect(
        () => calcAv(),
        arr
    )

    const arrHtml = arr.map((item, index) => {
        return <input key={index} type="text" defaultValue={item} onChange={(elem) => {
            let newarr = Object.assign([], arr);
            newarr[index] = parseInt(elem.target.value);
            setArr(newarr);
        }} />
    })

    return <div>
        <p>{av}</p>
        {arrHtml}
    </div>
}

export function Work9() {
    const [arr, setArr] = useState([1, 2, 3, 5, 6])
    const [numEdit, setNumEdit] = useState(0);

    const arrHtml = arr.map((item, index) => {
        return <li>{numEdit === index ? '->' : ''}
            {item}
            <button onClick={(elem) => {
                setNumEdit(index)
            }}>edit</button>
        </li>
    })

    return <div>
        {arrHtml}
        edit <input type="text" onBlur={(elem) => {
            let newarr = Object.assign([], arr);
            newarr[numEdit] = elem.target.value;
            setArr(newarr);
            elem.target.value = '';
        }} />
        add <input type="text" onBlur={(elem) => {
            let newarr = Object.assign([], arr);
            newarr.push(elem.target.value);
            setArr(newarr);
            elem.target.value = '';
        }} />
    </div>
}

function Task101() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    const [editNum, setEditNum] = useState(null); const [value, setValue] = useState('');
    const result = notes.map((note, index) => {
        return <p key={index} onClick={() => setEditNum(index)}> {note}
        </p>;
    });
    function changeItem(event) {
        setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
    }
    function stopEdit(event) {
        setEditNum(null);
    }
    function changeValue(event) {
        setValue(event.target.value);
    }
    function addItem(event) {
        setNotes([...notes, value]);
    }
    let input;
    if (editNum)
        input = <input
            value={notes[editNum]} onChange={changeItem} onBlur={stopEdit}
        />
    else {
        input = <input
            value={value}
            onChange={changeValue}
            onBlur={addItem}
        />
    }
    return <div>
        {result}
        {input}
    </div>;
}

export function Work10() {
    return <div>
        <Task101 />
    </div>
}