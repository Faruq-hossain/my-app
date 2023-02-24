// Understanding State & Handling Events in React
//react state add korbo tar jonnoreact hook jante hbe
//

import React, {useState} from 'react'

export default function TextForm(props) {


    const handleUpClick = ()=>{
        console.log ("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        //alert show
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        console.log ("Lowercase was clicked" + text);
        let newText = text[0].toLowerCase()+ text.slice(1).toLowerCase();
        setText(newText)
        //alert show
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        //alert show
        props.showAlert("Clear Text", "success");
    }

    const handlesliceClick = ()=>{

        console.log ("Lowercase was clicked" + text);
        let newText = text[0].toUpperCase()+ text.slice(1).toLowerCase();
        setText(newText)

        //alert show
        props.showAlert(" First word Uppercase!", "Success");


        // var CapitalizedText= text.charAt(0).toUpperCase()+ text.slice(1).toLowerCase();
        // console.log(CapitalizedText);
    }

    const handleCopy = ()=> {
        // var text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);


            console.log('text', text)
            var textField = document.createElement('textarea')
            textField.innerText = text
            document.body.appendChild(textField)
            textField.select()
            document.execCommand('copy')
            textField.remove()

                //alert show
        props.showAlert("Copy to Clipboard!", "success");

    }

    const handelExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))

        //alert show
        props.showAlert("Remove Extra Space!", "success");

        
    }

    const handleOnChange = (event)=>{
        console.log ("On Change");
        setText(event.target.value);
    }

    


    const [text, setText] = useState('');

    // text = "new text" // wrong way to change the stateuse settext
    // setText("new text")

return (
    <>
    <div className="container" style={{ color:  props.mode ==='dark'?'white':'#042743' }}>

        <h1> {props.heading}</h1>
        
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{ backgroundColor:  props.mode ==='dark'?'gray':'white',color: props.mode ==='dark'?'white':'#042743' }} id="mybox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to Lowercase
        </button>
        
        <button className="btn btn-primary mx-1 " onClick={handlesliceClick}>
            Capitalized Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
            Clear Text
        </button>

        <button className="btn btn-primary mx-1 " onClick={handleCopy}>
            Copy to Text
        </button>

        <button className="btn btn-primary mx-1 " onClick={handelExtraSpaces}>
            Remove Extra Spaces
        </button>







        {/* <button className="btn btn-primary mx-1 " onClick={handlesliceClick}>
            aLtErNaTing cAsE
        </button>

        <button className="btn btn-primary mx-1 " onClick={handlesliceClick}>
            Title Case
        </button>

        <button className="btn btn-primary mx-1 " onClick={handlesliceClick}>
            InVeRsE CaSe
        </button>
        <button className="btn btn-primary mx-1 " onClick={handlesliceClick}>
            Download Text
        </button> */}
        

  </div>

  <div className="container my-3" style={{ color:  props.mode ==='dark'?'white':'#042743' }}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>1000 words akhon kaj holo ami box e type korle number change hobe ata korbo 24534534 characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    <a href="https://convertcase.net/reverse-text-generator/">amon site er moto banate hobe</a>
  </div>
  </>
  )
}
 
//shikhlam event handle one change er maddhome

// how to set state variable watch variable

//lissent state
