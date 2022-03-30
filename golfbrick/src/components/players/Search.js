import React, { useState } from "react";
import "./Search.css";
import { Button } from "@mui/material";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";

const Search = (props) => {

  const submittedFormHandler = (e) => {
     //change submit status to true onClick
    props.onSearchClick('200');//pass up that button was clicked
  };
  
  
  
  return (
    <div>
      <Button
        className="search-button"
        size="large"
        variant="outlined"
        endIcon={<GolfCourseIcon />}
        onClick={submittedFormHandler}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
