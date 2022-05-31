import React, { useState } from 'react';
import { queries } from '../data/query'

const Editor = (props) => {

    const [text, setText] = useState('');
    const [query, setQuery] = useState('');
    const [submitQuery, setSubmitQuery] = useState(0);


    let a = 
    [
        "SELECT * FROM customers;",
        "SELECT * FROM customers WHERE contactTitle= 'Owner';",
        "SELECT * FROM customers WHERE country= 'Spain';",
        "SELECT * FROM customers WHERE contactTitle= 'Owner' and city='Mexico D.F.';",
        "SELECT * FROM customers WHERE city= 'London';",
        "SELECT * FROM customers WHERE address= 'Cerrito 333';",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitQuery(query);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    function handleClearText() {
        let newText = '';
        setText(newText);
        setQuery('');
    }


    function handleRun() {
        let newText = text;
        console.log(newText);
        setQuery(newText);
        let decider = a.includes(newText)
        console.log(decider);
        let index;
        if (decider) {
            for (let i = 0; i < a.length; i++) {
                if (a[i] === newText) {
                    index = i;
                }
            }
            console.log(index);
            alert("Check the Output Section.");
        }
        else {
            alert("Invalid Query.");
        }
        setSubmitQuery(index + 1);
        props.parentData(index + 1);
    }

    return (
        <div className='container' >
            <div className='row mt-5 justify-content-center'>
                <div className='col-md-10 text-center'>
                <h2>SQL Query Editor</h2>
                    <div className="input-group mb-1">
                        <button className='btn btn-success fs-4' onClick={handleRun} ><i className="bi bi-play-circle-fill"></i></button>
                        <input type="text" className="form-control bg-dark text-white" value={text} onChange={handleOnChange} />
                        <button className='btn btn-danger' onClick={handleClearText}>Clear</button>
                    </div>
                </div>
                <div className='row mt-5 justify-content-center'>
                    <div className='col-md-7 text-center'>
                    <h4 className='text-success'>Select a Query</h4>
                        <div className="list-group ">
                            {queries.map((query, index) => (
                                <button type="button" className="list-group-item list-group-item-action" aria-current="true" key={index} onClick={() => {
                                    setQuery(query.label);
                                    setSubmitQuery(query.value);
                                    props.parentData(query.value);
                                }}>
                                    {query.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor