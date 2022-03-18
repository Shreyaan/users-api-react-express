import React, { useEffect } from "react";

export default function Cards(props) {
  
  return (
    <div className="name">
    
        <p><span>First Name</span>: {props.item.first_name}</p>
        
        <p><span>Last Name</span>: {props.item.last_name}</p>
 
        <p><span>id</span>: {props.item.id}</p>
      
    </div>
  );
}
