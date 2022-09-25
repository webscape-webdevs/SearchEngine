import axios from "axios";

import {
  ALL_ADS_FAIL,
  ALL_ADS_REQUEST,
  ALL_ADS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/adsConstants";

// Get All Ads
export const getAds =
  (keyword = "", currentPage = 1,) =>
    async (dispatch) => {
      try {
        dispatch({ type: ALL_ADS_REQUEST });

        let link = `/api/v1/ads?keyword=${keyword}&page=${currentPage}`;


        const { data } = await axios.get(link);

        dispatch({
          type: ALL_ADS_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ALL_ADS_FAIL,
          payload: error.response.data.message,
        });
      }
    };



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};


