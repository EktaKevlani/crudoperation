import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowSingleData = () => {
  
  const [showUserData, setUserData] = useState({});



  // The useParams() hook is a React Router hook that allows you to access the parameters of the current URL. This can be useful if you want to dynamically render content based on the URL parameters. For example, if you have a blog application, you may want to render different articles based on the article ID in the URL.

  const { userId } = useParams();
  //   alert(userId);
  async function singleUserData(id) {
    await axios
      .get(`https://65321d604d4c2e3f333da030.mockapi.io/finalcrud/${id}`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    singleUserData(userId);
  }, []);
  return (
    <>
      <div className="row mx-0">
        <div className="col-lg-4 mt-4 ">
          <div className="card">
            <img
              src={showUserData?.avatar}
              height={"200"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{showUserData?.name}</h5>
              <p className="card-text">{showUserData?.desc}</p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowSingleData;
