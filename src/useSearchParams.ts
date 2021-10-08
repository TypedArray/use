import { useMemo } from 'react';

/**
 * query string parameters
 *
 * const { query, page, perPage } = useSearchParams();
 */
function useSearchParams(location: Location = window.location) {
  return useMemo(
    () => Object.fromEntries(new URLSearchParams(location.search)),
    [location.search]
  );
}
export default useSearchParams;
