import React,{useState} from 'react'

const Textfrom=(props) =>{
    const handleClick=()=>{
        // console.log('hey clicked')
       let newText=text.toUpperCase();
       setText(newText);
    }

    const handleClick2=()=>{
        // console.log('hey clicked')
       let newText=text.toLowerCase();
       setText(newText);
    }
    const ClearText=()=>{
        // jsjsjj
       setText(" ");
    }


    const handleChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="9" value={text} onChange={handleChange}></textarea>
                <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>   
                <button className="btn btn-primary" onClick={handleClick2}>Convert to lowercase</button>
                <button className="btn btn-primary" onClick={ClearText}>Clear Text</button>   
             
             </div>
        </div>
        <div className="container my-3">
            <h1>summary</h1>
            <h2>word {text.split(" ").length} {text.length} character</h2>
            <h1>{0.08 * text.split(" ").length} minutes read</h1>
            <h1>data</h1>
            <h2>{text}</h2>
        </div>
        </>
        
    )
}
  
export default Textfrom;