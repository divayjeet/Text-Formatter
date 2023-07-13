import React,{useState} from 'react'

const Textfrom=(props) =>{
    const handleClick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
    }

    const handleClick2=()=>{
       let newText=text.toLowerCase();
       setText(newText);
    }
    const ClearText=()=>{
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
                <button className="btn btn-primary mx-2 my-2" onClick={handleClick}>Convert to Uppercase</button>   
                <button className="btn btn-primary mx-2" onClick={handleClick2}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>   
             
             </div>
        </div>
        <div className="container my-3">
            <h1>Hint</h1>
            <h4>{text.split(" ").length} word {text.length} character</h4>
            <h1>Summary</h1>
            <h2>{text}</h2>
        </div>
        </>
        
    )
}
  
export default Textfrom;