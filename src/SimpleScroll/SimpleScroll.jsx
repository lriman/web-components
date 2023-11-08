import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollBooster from './ScrollBooster';

const useScrollBoost = options => {
  const scrollBooster = useRef(null);
  const [scrollBoosterState, setScrollBoosterState] = useState(scrollBooster.current);

  const optionsRef = useRef(options);
  const viewport = useCallback(node => {
    if (node) {
      const { content, ...rest } = optionsRef.current;
      const sbOptions = { viewport: node, ...rest };

      if (content?.current) {
        sbOptions.content = content.current;
      }

      scrollBooster.current = new ScrollBooster(sbOptions);
      setScrollBoosterState(scrollBooster.current);
      scrollBooster.current.enableOnLoadData(event => options.onLoadData(event));
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    return () => scrollBooster.current?.destroy();
  }, []);

  return { viewport, scrollBoosterState };
};

export default useScrollBoost;
