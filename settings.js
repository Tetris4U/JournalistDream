import React, { useState } from 'react'
const [defaultBox, newBox] = useState('user');
function change(event){
    newBox(event.target.value);

}

function TheBox(){
    return(
       <div>

          <p>Welcome{defaultBox}</p>
          <label for = "name">Enter your name</label>
          <input type = "text" id = "name" onChange = {change}/>

       </div>
    );
}