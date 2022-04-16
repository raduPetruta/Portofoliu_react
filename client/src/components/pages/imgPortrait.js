import { useState, useEffect } from "react";
import Axios from "axios";

function ImgPortrait() {
  const [imgPortrait, setImgPortrait] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await Axios.get("http://localhost:3001/portrait");
      setImgPortrait(response.data);
    };
    getData().catch(console.error);
  });

  return (
    <div>
      portraits
      {imgPortrait.map((img) => {
        return (
          <div>
            <img src={img.url} />
            {img.title}
          </div>
        );
      })}
    </div>
  );
}
export default ImgPortrait;
