import './App.css';
import React, { useState, useEffect } from 'react';
import Expandable from './components/Expandable';
import useExpanded from "./hooks/useExpanded";
import useEffectAfterMount from "./hooks/useEffectAfterMounted";
import Header from "./components/Header";
import Icon from "./components/Icon";
import Body from "./components/Body";

const information = [
  {
    header: 'Why everyone should live forrever',
    note: 'This is highly sensitive information on how to prevent death!!!!'
  },
  {
    header: 'The internet disappears',
    note:
      'I just uncovered the biggest threat to the internet. The internet disappears in 301 seconds. Save yourself'
  },
  {
    header: 'The truth about Elon musk and Mars!',
    note: 'Nobody tells you this. Elon musk ... News coming soon.'
  }
];

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const {expanded, toggle} = useExpanded();

  useEffectAfterMount(() => {
    console.log('YAY! button was clicked!');
  }, [expanded]);

  return (
  <div className="Expandable">
    <Header toggle={toggle}>Awesome hooks</Header>
    <Icon expanded={expanded} />
    <Body expanded={expanded}>React hooks is awesome!</Body>
  </div>
    // <div className="App">
    //   {information.map(({header, note}, index) => (
    //     <Expandable shouldExpand={index === +activeIndex} onExpand={onExpand} key={index}>
    //       <Expandable.Header data-index={index} style={{color: 'red', border: '1px solid teal'}}>
    //         {header}
    //         <Expandable.Icon/>
    //       </Expandable.Header>
    //       <Expandable.Body>
    //         {note}
    //       </Expandable.Body>
    //     </Expandable>
    //   ))}
    // </div>
  );
}

export default App;
