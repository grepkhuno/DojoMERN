import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Display from './Display';
import Form from './Form';

function App() {
  const arrList = [
    { content: 'buy milk', complete: false, },
    { content: 'some text', complete: false, },
    { content: 'mas text', complete: false, }
  ]
  const [list, setList] = useState(arrList);
  useEffect (()=>{
      document.title = `You have '${list.length}' in your List`;
  })
  
  return (
    <>
      <header>
       <h1 className='d-flex mt-5 justify-content-center'>TO DO LIST</h1> 
      </header>
      <main>
        <Form list={list} setList={setList} />
        <Display list={list} setList={setList} />
      </main>
    </>
  )
}

export default App;
