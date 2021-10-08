import { useEffect, useMemo, useState } from 'react';

/**
 * useDynamicScript
 */
export default function useDynamicScript(
  src:
    | string
    | {
        async?: boolean;
        crossOrigin?: string | null;
        /**
         * Sets or retrieves the status of the script.
         */
        defer?: boolean;
        integrity?: string;
        noModule?: boolean;
        referrerPolicy?: string;
        /**
         * Retrieves the URL to an external file that contains the source code or data.
         */
        src: string;
        /**
         * Retrieves or sets the text of the object as a string.
         */
        text?: string;
        /**
         * Sets or retrieves the MIME type for the associated scripting engine.
         */
        type?: string;
        onload?: (event: Event) => void;
        onerror?: (event: Event) => void;
      }
) {
  const options = useMemo(() => (typeof src === 'string' ? { src } : src), [
    src,
  ]);
  const [ready, setReady] = useState(false);
  const element = useMemo(() => {
    const element = document.createElement('script');
    element.addEventListener('load', function () {
      setReady(true);
    });
    Object.assign(element, options);
    document.head.appendChild(element);
    return element;
  }, [options]);

  useEffect(() => {
    document.head.appendChild(element);
    console.log(`Dynamic Script Mount`, options);
    return () => {
      console.log(`Dynamic Script Unmount`, options);
      document.head.removeChild(element);
    };
  }, [element]);
  return ready;
}
