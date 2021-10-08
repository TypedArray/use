import { useReducer } from 'react';

/**
 * forceUpdate
 */
export default function useForceUpdate() {
  const [, forceUpdate] = useReducer(
    () => Object.create(null),
    Object.create(null)
  );
  return forceUpdate;
}
