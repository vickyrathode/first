import React, { useState } from 'react';

function Vikki(props) {
    const [text, setText] = useState("");

    const onChangeHandle = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        let nextText = text.toUpperCase();
        setText(nextText);
    }

    const handleLowerCase = () => {
        let nextText = text.toLowerCase();
        setText(nextText);
    }

    const handleClear = () => {
        let nextText = "";
        setText(nextText);
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success");
    }

    const handleRemoveExtraSpaces = () => {
        let nextText = text.replace(/\s+/g, ' ').trim();
        setText(nextText);
    }

    const handleReverseText = () => {
        let nextText = text.split('').reverse().join('');
        setText(nextText);
    }

    return (
        <div>
            <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>{props.title1}</h1>

            <div className="container mb-3">  
                <textarea
                    className='form-control'
                    value={text}
                    onChange={onChangeHandle}
                    style={{
                        backgroundColor: props.mode === "dark" ? "#283141" : "#F2F3F9",
                        color: props.mode === "dark" ? "white" : "black"
                    }}
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>

            <button className='btn btn-primary mx-2 my-2' onClick={handleUpperCase}>Convert to Upper Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLowerCase}>Convert to Lower Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleCopyToClipboard}>Copy to Clipboard</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleReverseText}>Reverse Text</button>

            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((word) => word !== '').length} words {text.length} characters</p>
                <p>{(0.008 * text.split(/\s+/).filter((word) => word !== '').length)} minutes to read</p>

                <h3>Preview</h3>
                <p>{text.length === 0 ? "Enter some text to show here" : text}</p>
            </div>
        </div>
    );
}

export default Vikki;
