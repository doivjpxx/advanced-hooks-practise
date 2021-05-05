import React, {createContext, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import './Expandable.css';

import Header from './Header'
import Icon from './Icon'
import Body from './Body'

export const ExpandableContext = createContext();
const {Provider} = ExpandableContext;

const Expandable = ({children, onExpand, shouldExpand, ...otherProps}) => {
  const isExpandControlled = shouldExpand !== undefined;
  const [expanded, setExpanded] = useState(false);
  const getState = isExpandControlled ? shouldExpand : expanded;

  const toggle = useCallback(() => setExpanded(prevExpanded => !prevExpanded), []);
  const getToggle = isExpandControlled ? onExpand : toggle;

  const componentJustMounted = useRef(true);

  useEffect(() => {
    if (!componentJustMounted && !isExpandControlled) {
      onExpand(expanded);
      componentJustMounted.current = false;
    }
  }, [expanded, onExpand, isExpandControlled]);

  const value = useMemo(() => ({expanded: getState, toggle: getToggle}), [getState, getToggle]);

  return <Provider value={value} {...otherProps}>{children}</Provider>
}

Expandable.Header = Header
Expandable.Body = Body
Expandable.Icon = Icon

export default Expandable;
