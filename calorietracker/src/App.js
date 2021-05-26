import React, {useState, useEffect} from 'react';
import Todolist from './mocks/todolist/todolist1';
import Counter from './mocks/todolist/counter';
import Parent from './mocks/childToParentdata/parent';
import Mani from './mocks/propscheck/classmani1';
import LifeCycle from './mocks/lfecycles';
import First from './mocks/hooks/usestate1'


function App() {


  return (
    <div>
      {/* <Mani></Mani>
      <Todolist></Todolist>
      <Counter></Counter>
      <Parent></Parent> 
      <LifeCycle></LifeCycle>*/}
      <First></First>
    
    </div>
  );
}

export default App;
