import { useEffect, useState } from "react";
import Axios from "axios";
import "../ImgList.css";

function ImgStreet() {
  const [imagesStreet, setImageStreet] = useState([]);

  /*useEffect(() =>  {
    Axios.get("http://localhost:3001/street").then((response) => {
      setImageStreet(response.data);
    });
  }, []);*/

  useEffect(() => {
    const getData = async () => {
      const response = await Axios.get("http://localhost:3001/street");
      setImageStreet(response.data);
    };
    getData().catch(console.error);
  }, []);

  return (
    <div>
      <div className="row">
        {imagesStreet.map((img) => {
          return (
            <div className="imgMap">
              <img src={img.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImgStreet;
