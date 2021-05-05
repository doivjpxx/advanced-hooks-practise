import { useCallback, useState, useMemo } from "react";

export default function useExpanded() {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded(prevState => !prevState), []);

  const callFunctionsInSequence = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

  const getTogglerProps = useCallback(({onClick, ...props}) => ({
    'aria-expanded': expanded,
    onClick: callFunctionsInSequence(toggle, onClick),
    ...props
  }), [toggle, expanded]);

  const value = useMemo(() => ({expanded, toggle, getTogglerProps}), [expanded, toggle, getTogglerProps]);

  return value;
}
