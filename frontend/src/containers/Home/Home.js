import React, { Fragment, useEffect } from "react";
import "./Home.css";
import AdsCard from "../../component/AdsCard/AdsCard";
import MetaData from "../MetaData";
import { clearErrors, getAds } from "../../actions/adsAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useState } from "react";


const Home = () => {

  const dispatch = useDispatch();
  const { loading, error, ads } = useSelector((state) => state.ads);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAds(keyword));

  }, [dispatch, keyword, error]);


  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setKeyword(search);

  };


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (

        <Fragment>
          <MetaData title="Ads Search" />

          <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input
              type="text"
              placeholder="Search an Ad ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <input type="submit" value="Search" />
          </form>


          <h2 className="homeHeading">Ads</h2>

          <div className="container" id="container">
            {ads &&
              ads.map((ad) => (
                <AdsCard key={ad._id} ad={ad} />
              ))}
          </div>

        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
