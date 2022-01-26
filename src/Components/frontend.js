import { useState } from "react";
const FrontEnd=()=>{
    const [url,setUrl]=useState("");
    const [receivedResponse,setResponse]=useState();

    const handleRequest=(e)=>{
        document.getElementById("url").innerHTML="";
        e.preventDefault();
        if(url===""){
            setResponse(JSON.stringify({message:"Request is unable to be handled. Please check the requested url",responseStatus:404}))
        }
        else{
            fetch(url,{method:e.target.value,headers: { "Content-Type": "application/json" }})
            .then(response => response.json()) 
            .then(res=>{
                setResponse(JSON.stringify(res).split(',').join(', '))
            })
            .catch(error=>{
                setResponse(JSON.stringify({message:"Request is unable to be handled. Please check the requested url",responseStatus:404}))
            })
        }
    }    
    return (
        <div> 
            <h1>HTTP Basics</h1>
            <div id="container">
                <div id="inputContainer">
                    <input type="text" id="url" onChange={(e)=>setUrl(e.target.value)}/>
                </div>
                <div id="buttonContainer">
                    <button id="get" value="GET" onClick={handleRequest}>GET</button>
                    <button id="post" value="POST" onClick={handleRequest}>POST</button>
                    <button id="put" value="PUT" onClick={handleRequest}>PUT</button>
                </div>
                <div id="instructionHeader">
                         <h3>The URL should be in the form of:</h3>
                </div>
                <div id="instructionContainer">

                    <br/>
                    <div id="instructions">
                        <div>
                            GET - http://localhost:4000/
                        </div>
                        <div>
                            POST - http://localhost:4000/data=logesh
                        </div>
                        <div>
                            PUT - http://localhost:4000/1
                        </div>
                    </div>
                    
                </div>
                <div id="responseContainer">
                    <div id="response">
                        {receivedResponse}
                    </div>
                </div>


            </div>
            
        </div>
    );
}
export default FrontEnd;