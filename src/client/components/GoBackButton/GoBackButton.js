import React from "react";
import s from "./GoBackButton.module.css";
import * as Icons from "@material-ui/icons";
import {useHistory} from "react-router-dom";

export default function GoBackButton({url}) {

  let history = useHistory();

  const handleClick = () => {
    if (url) {
      window.location.pathname = url
    } else {
      history.goBack();
    }
  }

  return(
      <button className={s.goBack} onClick={handleClick}>
        <Icons.KeyboardArrowLeft/>
        <span>GO BACK</span>
      </button>
  )
}