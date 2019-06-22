import React from 'react';
import Clock from './clock';
import Tabs from './tabs'



const Main =()=>(
    <div>
      <Clock/>
      <Tabs content = {[
        {title: "1", content: "Snape kills Dumbledore." },
        {title: "2", content: "One does not simply walk into Mordor." },
        {title: "3", content: "You are my queen (and Aunt)." }
      ]}/>
    </div>
  )

export default Main;