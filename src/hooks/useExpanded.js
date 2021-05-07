import { useCallback, useState, useMemo, useRef } from "react";

export default function useExpanded(initialExpanded = false) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const resetRef = useRef(0);
  const toggle = useCallback(() => setExpanded(prevState => !prevState), []);

  const callFunctionsInSequence = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

  const reset = useCallback(() => {
    setExpanded(initialExpanded);
    ++resetRef.current;
  }, [initialExpanded]);

  const getTogglerProps = useCallback(({ onClick, ...props } = {}) => ({
    'aria-expanded': expanded,
    onClick: callFunctionsInSequence(toggle, onClick),
    ...props
  }), [toggle, expanded]);

  const value = useMemo(() => ({
      expanded,
      toggle,
      getTogglerProps,
      reset,
      resetDep: resetRef.current
    }),
    [expanded, toggle, getTogglerProps, reset]);

  return value;
}
