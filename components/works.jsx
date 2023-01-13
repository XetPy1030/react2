import { useState } from "react"

export function Work1() {
    const [name, setName] = useState('Аскар');
    const [lname, setLName] = useState('Ковин');
    const [years, setYears] = useState(10);
    const [isBanned, setIsBanned] = useState(false);
    const [isVisibleBan, setIsVisibleBan] = useState(true);
    const [isVisibleUnBan, setIsVisibleUnBan] = useState(false);

    function ban(elem) {
        setIsVisibleBan(false);
        setIsVisibleUnBan(true);
        setIsBanned(true);
    }
    function unban(elem) {
        setIsVisibleBan(true);
        setIsVisibleUnBan(false);
        setIsBanned(false);
    }

    return (
        <div>
            <p>{name}</p>
            <p>{lname}</p>
            <p>{years}</p>
            <p>{isBanned ? 'забанен': 'не забанен'}</p>
            <button onClick={() => setName('НеАскар')}>change name</button>
            <button onClick={() => setLName('НеКовин')}>change last name</button>
            <button onClick={() => ban(this)} style={{'display': isVisibleBan ? 'inline' : 'none'}}>ban</button>
            <button onClick={() => unban(this)} style={{'display': isVisibleUnBan ? 'inline' : 'none'}}>unban</button>
            <button onClick={() => setYears(years+1)}>increase</button>
            <button onClick={() => setYears(years-1)}>reduce</button>
        </div>
    )
}

export function Work2() {
    const [text1, setText1] = useState('Текст1');
    const [text2, setText2] = useState('Текст2');
    const [numText1, setNumText1] = useState(0);
    const [numText2, setNumText2] = useState(0);

    const [year, setYear] = useState(0);

    const [cels, setCels] = useState(0);

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);
    const [num5, setNum5] = useState(0);

    return (
        <div style={{"backgroundColor": 'white'}}>
            <p>{text1}</p>
            <p>{numText1}</p>
            <p>{text2}</p>
            <p>{numText2}</p>
            <input type="text" onChange={(elem) => {
                setText1(elem.target.value);
                setNumText1(elem.target.value.length);
                }} />
            <input type="text" onChange={(elem) => {
                setText2(elem.target.value);
                setNumText2(elem.target.value.length);
                }} />

            <p>{year}</p>
            <input type="text" onChange={(elem) => {
                let yearInput = parseInt(elem.target.value);
                let curYear = new Date();
                let yearHB = new Date(curYear.getFullYear()-yearInput, 0, 1);
                setYear(yearHB.getFullYear())
            }} />

            <p>{cels}</p>
            <input type="text" onChange={(elem) => {
                let newCels = (parseInt(elem.target.value)-32)/5*9;
                setCels(newCels);
            }} />

            <p>{(num1+num2+num3+num4+num5)/5}</p>
            <input type="text" onChange={(elem) => {
                let num = parseInt(elem.target.value);
                setNum1(num);
            }} />
            <input type="text" onChange={(elem) => {
                let num = parseInt(elem.target.value);
                setNum2(num);
            }} />
            <input type="text" onChange={(elem) => {
                let num = parseInt(elem.target.value);
                setNum3(num);
            }} />
            <input type="text" onChange={(elem) => {
                let num = parseInt(elem.target.value);
                setNum4(num);
            }} />
            <input type="text" onChange={(elem) => {
                let num = parseInt(elem.target.value);
                setNum5(num);
            }} />
        </div>
    )
}

function Task31() {
    const [text, setText] = useState(0);
    const [text1, setText1] = useState(0);
    const [text2, setText2] = useState(0);

    return (
        <div>
            <p>{text}</p>
            <input type="text" onChange={(elem) => {
                setText1(+elem.target.value);
            }} />
            <input type="text" onChange={(elem) => {
                setText2(+elem.target.value);
            }} />
            <button onClick={() => {
                setText(text1+text2);
            }}>+</button>
            <button onClick={() => {
                setText(text1*text2);
            }}>*</button>
        </div>
    )
}

function Task32() {
    function getCurDate() {
        let curDate = new Date();
        return `${curDate.getFullYear()}-${curDate.getMonth()+1}-${curDate.getDate()}`;
    }

    const [date1, setDate1] = useState(getCurDate());
    const [date2, setDate2] = useState(getCurDate());
    const [diff, setDiff] = useState('');

    return (
        <div>
            <input type="text" defaultValue={getCurDate()} onChange={(elem) => setDate1(elem.target.value)} />
            <input type="text" defaultValue={getCurDate()} onChange={(elem) => setDate2(elem.target.value)} />
            <p>{diff}</p>
            <button onClick={() => {
                let dateCalcArr1 = date1.split('-').map((item) => {
                    return parseInt(item);
                });
                let dateCalcArr2 = date2.split('-').map((item) => {
                    return parseInt(item);
                });
                let dateCalc1 = new Date(...dateCalcArr1);
                let dateCalc2 = new Date(...dateCalcArr2);
                setDiff((dateCalc1-dateCalc2)/86400000);
            }}>calculate</button>
        </div>
    )
}

function Task33() {
    const [text, setText] = useState(0);

    return (
        <div>
            <input type="text" onBlur={(elem) => {
                let num = elem.target.value;
                let sum = 0;
                for (let item of num) {
                    sum += +item;
                }
                setText(sum);
            }} />
            <p>{text}</p>
        </div>
    )
}

function Task34() {
    const [text, setText] = useState(0);

    return (
        <div>
            <input type="text" onBlur={(elem) => {
                let num = parseInt(elem.target.value);
                let sum = 1;
                for (let i = 1; i <= num; i++) {
                    if (num%i === 0) {
                        sum *= i;
                    }
                }
                setText(sum);
            }} />
            <p>{text}</p>
        </div>
    )
}

export function Work3() {

    return (
        <div>
            <Task31 />
            <Task32 />
            <Task33 />
            <Task34 />
        </div>
    )
}

function Task41() {
    const [state, setState] = useState(true);
    let message;
    if (state) {
        message = 'Дарова';
    } else {
        message = 'Пока';
    }

    return (
        <div>
            <input type="checkbox" checked={state} onChange={() => setState(!state)} />
            <p>{message}</p>
        </div>
    )
}

function Task42() {
    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(true);
    const [state3, setState3] = useState(true);

    return (
        <div>
            html <input type="checkbox" checked={state1} onChange={() => setState1(!state1)} />
            css <input type="checkbox" checked={state2} onChange={() => setState2(!state2)} />
            js <input type="checkbox" checked={state3} onChange={() => setState3(!state3)} />
            <p>html {state1 ? 'yes' : 'no'}</p>
            <p>css {state2 ? 'yes' : 'no'}</p>
            <p>js {state3 ? 'yes' : 'no'}</p>
        </div>
    )
}

function Task43() {
    const [state, setState] = useState(true);

    return (
        <div>
            <p>Есть 18?</p><input type="checkbox" checked={state} onChange={() => setState(!state)} />
            <div style={{
                'display': state ? 'block' : 'none'
            }}>
                <p>След кусок кода</p>
            </div>
        </div>
    )
}

function Task44() {
    const [state, setState] = useState(true);

    return (
        <div>
            <input type="checkbox" checked={state} onChange={() => setState(!state)} />
            <div style={{
                'display': state ? 'block' : 'none'
            }}>
                <p>Абзац</p>
            </div>
        </div>
    )
}

export function Work4() {
    return (
        <div>
            {/* <Task41 /> */}
            {/* <Task42 /> */}
            {/* <Task43 /> */}
            <Task44 />
        </div>
    )
}

function Task51() {
    const [text, setText] = useState('');

    let cities = ['Ufa', 'Elabuga', 'Moscow'];

    let citiesOptions = cities.map((item, index) => {
        return <option key={index}>{item}</option>
    })

    return (
        <div>
            <select name="" id="" onChange={(elem) => {
                let curChange = elem.target.value;
                setText(curChange);
            }}>
                {citiesOptions}
            </select>
            <p>{text}</p>
        </div>
    )
}

const Task52 = Task51;

function Task53() {
    const [text, setText] = useState('');

    let cities = ['0-12', '13-17', '18-25', '25+'];

    let citiesOptions = cities.map((item, index) => {
        return <option key={index}>{item}</option>
    })

    return (
        <div>
            <p>К какой возрастной группе относишься?</p>
            <select name="" id="" onChange={(elem) => {
                let curChange = elem.target.value;
                setText(curChange);
            }}>
                {citiesOptions}
            </select>
            <p>{text}</p>
        </div>
    )
}

function Task54() {
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');

    function choice(choicedText) {
        setText(choicedText)
        if (choicedText === 'js') {
            setText1('Похваляю!')
        } else {
            setText1('')
        }
    }

    const elems = ['html', 'js', 'python'];
    const elemsHtml = elems.map((item, index) => {
        return <div key={index}>
            {item}
            <input type="radio" name="a" value={item} onChange={(elem) => choice(elem.target.value)} />
        </div>
    })

    return (
        <div>
            <p>{text}</p>
            <p>{text1}</p>
            {elemsHtml}
        </div>
    )
}

const Task55 = Task54;

export function Work5() {
    return (
        <div>
            <Task51 />
            <Task52 />
            <Task53 />
            <Task54 />
            <Task55 />
        </div>
    )
}
