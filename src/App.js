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

  const { expanded, toggle, reset, resetDep } = useExpanded(false);

  return (
    <div className="App">
      <WithoutComponents/>
    </div>
  );
}

function WithoutComponents() {
  const { reset, resetDep, expanded, getTogglerProps } = useExpanded(true);

  useEffectAfterMount(() => {
    console.log('Yay! button war clicked!');
  }, [expanded]);

  useEffectAfterMount(() => {
    console.log('reset was invoked!');
  }, [resetDep]);

  const customClickHandler = () => {
    console.log('custom click handler!!!');
  }

  return <div style={ { marginTop: '3rem' } }>
    <button id="my-btn-id" aria-label="custom-toggler" { ...getTogglerProps({
      id: 'my-btn-id',
      'aria-label': 'custom toggler',
      onClick: customClickHandler
    }) }>Click to review awesomeness...
    </button>
    { expanded ? <p>{ 'XY'.repeat(10) }</p> : null }
  </div>
}

function WithComponent() {
  const { expanded, toggle } = useExpanded();

  return (
    <div className="Expandable">
      <Header toggle={ toggle }>Awesome Hooks</Header>
      <Icon expanded={ expanded }/>
      <Body expanded={ expanded }>React hooks is awesome!</Body>
    </div>
  )
}

export default App;
