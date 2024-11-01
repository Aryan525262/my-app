import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=(event)=>{
        event.preventDefault();
        //console.log("Uppercase was clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    };
    const handleLoClick=(event)=>{
        event.preventDefault();
        //console.log("Uppercase was clicked"+ text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    };
    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value)
    };
    const handleClearClick=(event)=>{
        event.preventDefault();
        let newText = " ";
        setText(newText);
        props.showAlert("Cleared the Text","success");
    }
    const handleCopy=(event)=>{
        event.preventDefault();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success");
    }
    const [text, setText]= useState("");
    return (
        <>
        <div className='container' style={{color: props.mode==="dark" ? "white":"black"}}>
            <form>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "black":"white", color: props.mode==="dark"?"white":"black"}} rows="8"/>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

            </form>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark" ? "white":"black"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
