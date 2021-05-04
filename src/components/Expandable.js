import { createContext, useCallback, useState } from 'react';

export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    const toggle = useCallback(() => setExpanded(prevExpanded => !prevExpanded), []);

    const value = { expanded, toggle };

    return <Provider value={value}>{children}</Provider>
}

export default Expandable;
