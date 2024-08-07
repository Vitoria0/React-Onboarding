import React, { useEffect } from "react";

import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { Alert } from "@mui/material";

import Loading from "../styledComponents/Loading";

import { AppRoutes } from "./AppRoutes.jsx";

import { LMS } from "../scorm/LMS";
import { setData } from "../features/user/userDataSlice";
import "../assets/css/index.css";
import { setLocation } from "../features/location/locationSlice.js";

const App = () => {
  const lms = LMS.getInstance();
  const dispatch = useDispatch();

  const { isLoading, error } = useQuery<boolean, Error>(
    "lmsData",
    () => lms.connect(),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (!isLoading && LMS.userData && LMS.userLocation) {
      dispatch(setData(LMS.userData));
      dispatch(setLocation(LMS.userLocation));
    }
  }, [LMS.userData, isLoading]);

  if (isLoading) return <Loading />;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <React.Suspense fallback={<Loading />}>
      <AppRoutes />
    </React.Suspense>
  );
};

export default App;
