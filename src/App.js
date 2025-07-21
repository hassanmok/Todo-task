import { useState } from "react";
import { places } from "./data.js";
import { getImageUrl } from "./utils.js";
import { useContext } from "react";
import { imageData, placeContext } from "./Context/ImageContext.js";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Submit from "./Submit.js";
import { listPost } from "./Context/postContext.js";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import DisabledAccordion from "./Select.js";
import Container from "@mui/material/Container";
import All from "./All.js";
import NotDone from "./NotDone.js";
import { ToDoList } from "./Context/ToDoListContext.js";

export default function App() {

  const [data, setData] = useState([
    {
      id: 0,
      title: "اليوم الاول",
      detalis: "نبذة بسيطة",
      isDone: false,
      isDelete: false,
    },
  ]);

  return (
    <>
      <ToDoList value={{data, setData}}>


      <All></All>
      </ToDoList>
    </>
  );
}
