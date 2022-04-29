import { useEffect, useState } from "react";
import Axios from "axios";
import "./ImgList.css";

function ImgList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await Axios.get("http://localhost:3001/images");
      setImages(response.data);
    };
    getData().catch(console.error);
  });

  return (
    <div>
      <div className="row">
        {images.map((img) => {
          return (
            <div className="imgMap">
              <img src={img.url} alt="imgg" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ImgList;
