import { useEffect, useState } from "react";

const useImageOnLoad = (imgLink) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imgLink;
    img.onload = () => {
      setLoad(true);
    };
  }, []);

  return load;
};

export default useImageOnLoad;
