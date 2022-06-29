import { useEffect, useState } from "react";

const useMinHeight = (ref): number => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const sz = ref.reduce((sum, cur) => {
      const currentsum = sum + cur.current.offsetHeight;
      return currentsum;
    }, 0);
    setOffset(sz);
  }, [ref]);

  return offset;
};

export default useMinHeight;
