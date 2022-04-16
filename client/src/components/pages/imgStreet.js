import { useEffect, useState } from "react";
import Axios from "axios";

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
      street
      {imagesStreet.map((img) => {
        return (
          <div>
            <img src={img.url} />
          </div>
        );
      })}
    </div>
  );
}

export default ImgStreet;
