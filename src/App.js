import React, { useState } from 'react';
import './App.css';
import Form from './Form';

const initialMemberList = {
  name: "",
  email: "",
  role: ""
}

function App() {
  
  const [member, setMember] = useState([])
  const [memberList, setMemberList] = useState(initialMemberList)

  return (
      <div className="form-container">
        <Form 
        values={initialMemberList}/>
      </div>
  )
}

export default App;
