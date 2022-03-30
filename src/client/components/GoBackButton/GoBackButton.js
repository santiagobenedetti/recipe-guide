import React from "react";
import s from "./GoBackButton.module.css";
import * as Icons from "@material-ui/icons";
import {useHistory} from "react-router-dom";

export default function GoBackButton() {

  let history = useHistory();

  const handleClick = () => {
    history.goBack();
  }

  return(
      <button className={s.goBack} onClick={handleClick}>
        <Icons.KeyboardArrowLeft/>
        <span>GO BACK</span>
      </button>
  )
}