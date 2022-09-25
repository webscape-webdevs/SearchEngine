import {
  ALL_ADS_FAIL,
  ALL_ADS_REQUEST,
  ALL_ADS_SUCCESS,

  CLEAR_ERRORS,
} from "../constants/adsConstants";

export const adsReducer = (state = { ads: [] }, action) => {
  switch (action.type) {
    case ALL_ADS_REQUEST:
      return {
        loading: true,
        ads: [],
      };
    case ALL_ADS_SUCCESS:
      return {
        loading: false,
        ads: action.payload.ads,
        adsCount: action.payload.adsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredAdsCount: action.payload.filteredAdsCount,
      };

    case ALL_ADS_FAIL:

      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};




