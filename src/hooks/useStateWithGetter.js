import { useState, useRef } from 'react';
import { useEffectOnce } from './useEffectOnce';

// TODO figure out if this is bad?
// https://github.com/facebook/react/issues/14543
function useStateWithGetter(initial) {
  const ref = useRef();
  const mounted = useRef(true);
  const [state, setState] = useState(initial);
  ref.current = state;
  const set = value => {
    ref.current = value;
    if (mounted.current) setState(value);
  };
  const get = () => {
    return ref.current;
  };
  useEffectOnce(() => {
    return () => {
      mounted.current = false;
    };
  }, []);
  return [state, set, get];
}

export { useStateWithGetter };
