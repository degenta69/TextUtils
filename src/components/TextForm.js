import React, {useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("VALUE");
    const handleClickUP= ()=>{
       
        console.log("yeah "+ Text);  
        let newText= Text.toUpperCase();
        props.callAlert("UpperCase Done","success");
        setText(newText);
    }

    const handleMorseCode= ()=>{
        let english = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
        'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        ',', '.', '?', ' ', ','];

        let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
        ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
        "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
        "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
        "-----", "--..--", ".-.-.-", "..--..","/", " "];

        let tranStr= [...Text];
        let translated= [];

        for (let i = 0; i <= tranStr.length; i++) {
            let index = english.indexOf(tranStr[i]);
            translated.push(morse[index]);
        }
        let strip = translated.toString();
        let x= strip.split(',');
        let stripped= x.join(' ');
        props.callAlert("in this translator 2 words have / between them to seperate them", "warning");

        setText(stripped);
    }

    const handleMorseCodeTrans= ()=>{
        let english = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
        'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        ',', '.', '?', ' '];

        let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
        ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
        "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
        "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
        "-----", "--..--", ".-.-.-", "..--..","/"];

        let tranStr= Text.split(" ");
        let translated= [];

        for (let i = 0; i <= Text.length; i++) {
            let index = morse.indexOf(tranStr[i]);
            translated.push(english[index]);
        }
        let strip = translated.toString().split(',');
        let stripped= strip.join('');

        setText(stripped);
    }

    const handleClickLOW= ()=>{
       
        console.log("yeah "+ Text);  
        let newText= Text.toLowerCase();
        props.callAlert("LowerCase Done", "success");
        setText(newText);
    }
    const handleChange= (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    return (
        <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <div className="container">

            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : '#525252', color: props.mode === 'dark' ? 'white' : 'black'}} value={Text} onChange={handleChange} id="myBox" columns="10" rows="10"></textarea>
                <button disabled={Text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClickLOW}>change to LowerCase</button>
                <button disabled={Text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClickUP}>change to UpperCase</button>
                <button disabled={Text.length===0} className="btn btn-danger mx-1  my-2" onClick={handleMorseCode}>Text to Morse Code</button>
                <button disabled={Text.length===0} className="btn btn-warning mx-1 my-2" onClick={handleMorseCodeTrans}>Morse Code to Text</button>
            </div>

            </div>

            <div className="container my-2">
                <h1>Your Text Summry</h1>
                <p>Text is {Text.length} characters and {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words long</p>
                <p>it'll take { 0.008*(Text.split(/\s/).filter((element)=>{return element.length!==0}).length)} minutes to read your text</p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
            
        </div>
    )
}
