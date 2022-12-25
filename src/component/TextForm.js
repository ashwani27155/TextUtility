import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("this is ashwnai");
   const onClickHandler=()=>{
        let utext=text.toUpperCase()
        setText(utext);
    }
    const onClickHandler1=()=>{
        let utext=text.toLowerCase()
        setText(utext);
    }
    const onClickHandler2=()=>{
        let utext=" "
        setText(utext);
    }
    const onClickHandler3=()=>{
        var text=document.getElementById('text');
        text.select()
        navigator.clipboard.writeText(text.value);
        window.alert("Text Copied")
    }
    const onClickHandler4=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "));
    }
    const HandleonClickMethod=(event)=>{
        console.log("run function");
        setText(event.target.value)
    } 
  return (
   <>
    <div>
        <h1  >{props.heading} </h1>
      <div className="mb-3">
         <textarea className="form-control"  value={text} onChange={HandleonClickMethod} id="text" rows="8"></textarea>
         
        </div>
       <div className="container">
       <button className="btn btn-primary" onClick={onClickHandler} my="3">UpperCase </button>
        <button className="btn btn-primary mx-2" onClick={onClickHandler1} >LowerCase </button>
        <button className="btn btn-primary mx-1" onClick={onClickHandler2} >Clear Text </button>
        <button className="btn btn-primary mx-1" onClick={onClickHandler3} >Copy Text </button>
        <button className="btn btn-primary mx-1" onClick={onClickHandler4} >Remove white Space </button>
       </div>
    </div>
    <div>
        <h2 className={`text-${props.mode==='light'?'dark':'light'}`} >
            Text Summery
        </h2>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>{`${text.split(" ").length} words and ${text.length} character`}</p>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>{`It will take ${.42 *text.split(" ").length} seconds to read`}</p>
        <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h2>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text}</p>
    </div>
    </>
  )
}
