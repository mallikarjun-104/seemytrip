import axios from "axios";
import { selectBusAuthData } from "../Selectors/busSelectors";

// Action types
export const FETCH_BUS_CITY_LIST_REQUEST = "FETCH_BUS_CITY_LIST_REQUEST";
export const FETCH_BUS_CITY_LIST_SUCCESS = "FETCH_BUS_CITY_LIST_SUCCESS";
export const FETCH_BUS_CITY_LIST_FAILURE = "FETCH_BUS_CITY_LIST_FAILURE";

export const FETCH_BUS_AUTH_REQUEST = "FETCH_BUS_AUTH_REQUEST";
export const FETCH_BUS_AUTH_SUCCESS = "FETCH_BUS_AUTH_SUCCESS";
export const FETCH_BUS_AUTH_FAILURE = "FETCH_BUS_AUTH_FAILURE";

export const FETCH_BUS_SEARCH_REQUEST = "FETCH_BUS_SEARCH_REQUEST";
export const FETCH_BUS_SEARCH_SUCCESS = "FETCH_BUS_SEARCH_SUCCESS";
export const FETCH_BUS_SEARCH_FAILURE = "FETCH_BUS_SEARCH_FAILURE";

// Auth actions
export const fetchBusAuthRequest = () => ({ type: FETCH_BUS_AUTH_REQUEST });
export const fetchBusAuthSuccess = (authData) => ({
  type: FETCH_BUS_AUTH_SUCCESS,
  payload: authData,
});
export const fetchBusAuthFailure = (error) => ({
  type: FETCH_BUS_AUTH_FAILURE,
  payload: error,
});

// City list actions
export const fetchBusCityListRequest = () => ({
  type: FETCH_BUS_CITY_LIST_REQUEST,
});
export const fetchBusCityListSuccess = (payload) => ({
  type: FETCH_BUS_CITY_LIST_SUCCESS,
  payload, // Important: keep the full object to allow BusCities access
});
export const fetchBusCityListFailure = (error) => ({
  type: FETCH_BUS_CITY_LIST_FAILURE,
  payload: error,
});

// Search actions
export const fetchBusSearchRequest = () => ({ type: FETCH_BUS_SEARCH_REQUEST });
export const fetchBusSearchSuccess = (searchResults) => ({
  type: FETCH_BUS_SEARCH_SUCCESS,
  payload: searchResults,
});
export const fetchBusSearchFailure = (error) => ({
  type: FETCH_BUS_SEARCH_FAILURE,
  payload: error,
});

// Thunks

export const fetchBusAuth = () => async (dispatch, getState) => {
  const authData = selectBusAuthData(getState());
  if (authData && authData.TokenId && authData.EndUserIp) {
    return;
  }

  console.log("Fetching bus auth from API");

  try {
    dispatch(fetchBusAuthRequest());

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/bus/authenticateBusAPI`
    );
    console.log("Response from bus auth API:", response.data);

    if (response.data) {
      dispatch(fetchBusAuthSuccess(response.data));
      console.log("Bus auth data using GetbookingDetail:", response.data);
      const { TokenId, EndUserIp } = response.data;
      if (TokenId && EndUserIp) {
        await dispatch(fetchBusCityList(TokenId, EndUserIp));
      }
    } else {
      dispatch(fetchBusAuthFailure("No bus auth data found"));
    }
  } catch (error) {
    console.error("Error fetching bus auth:", error);
    dispatch(fetchBusAuthFailure(error.message));
  }
};

export const fetchBusCityListIfNeeded = () => async (dispatch, getState) => {
  const authData = selectBusAuthData(getState());
  if (authData && authData.TokenId && authData.EndUserIp) {
    await dispatch(fetchBusCityList(authData.TokenId, authData.EndUserIp));
  } else {
    await dispatch(fetchBusAuth());
  }
};

export const fetchBusCityList = (TokenId, IpAddress) => async (dispatch) => {
  console.log("Fetching bus city list from API");

  try {
    dispatch(fetchBusCityListRequest());

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/bus/getBusCityList`,
      { TokenId, IpAddress }
    );

    console.log("Response from bus city list API:", response.data);

    // ✅ Pass full payload to reducer so it can handle BusCities, CityList, etc.
    dispatch(fetchBusCityListSuccess(response.data));
  } catch (error) {
    console.error("Error fetching bus city list:", error);
    dispatch(fetchBusCityListFailure(error.message));
  }
};

export const fetchBusSearch = (searchParams) => async (dispatch) => {
  console.log("Fetching bus search results from API");
  try {
    dispatch(fetchBusSearchRequest());

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/bus/BusSearch`,
      searchParams
    );

    console.log("Response from bus search API:", response.data);

    if (response.data) {
      dispatch(fetchBusSearchSuccess(response.data));
    } else {
      dispatch(fetchBusSearchFailure("No bus search results found"));
    }
  } catch (error) {
    console.error("Error fetching bus search results:", error);
    dispatch(fetchBusSearchFailure(error.message));
  }
};


export const FETCH_BUS_SEATLAYOUT_REQUEST = "FETCH_BUS_SEATLAYOUT_REQUEST";
export const FETCH_BUS_SEATLAYOUT_SUCCESS = "FETCH_BUS_SEATLAYOUT_SUCCESS";
export const FETCH_BUS_SEATLAYOUT_FAILURE = "FETCH_BUS_SEATLAYOUT_FAILURE";
export const fetchBusSeatLayoutRequest = () => ({
  type: FETCH_BUS_SEATLAYOUT_REQUEST,
});
export const fetchBusSeatLayoutSuccess = (seatLayout) => ({
  type: FETCH_BUS_SEATLAYOUT_SUCCESS,
  payload: seatLayout,
});
export const fetchBusSeatLayoutFailure = (error) => ({
  type: FETCH_BUS_SEATLAYOUT_FAILURE,
  payload: error,
});
export const fetchBusSeatLayout =
  (TokenId, IpAddress, ResultIndex, TraceId) => async (dispatch) => {
    console.log("Fetching bus seat layout from API");

    try {
      dispatch(fetchBusSeatLayoutRequest());

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/bus/getBusSeatLayout`,
        { TokenId, IpAddress, ResultIndex, TraceId }
      );

      console.log("Response from bus seat layout API:", response.data);

      if (response.data) {
        dispatch(fetchBusSeatLayoutSuccess(response.data));
      } else {
        dispatch(fetchBusSeatLayoutFailure("No bus seat layout found"));
      }
    } catch (error) {
      console.error("Error fetching bus seat layout:", error);
      dispatch(fetchBusSeatLayoutFailure(error.message));
    }
  };
