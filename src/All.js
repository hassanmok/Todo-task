import { useContext, useEffect, useState } from "react";
import { ToDoList } from "./Context/ToDoListContext";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./All.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Details, Margin } from "@mui/icons-material";
import Done from "./Done";
import { Link, Route, Routes } from "react-router-dom";

let missions = [{ id: 0 }];
export default function All() {
  const [effect, setEffect] = useState(0);
  const [value, setValue] = useState(0);
  const [inputdata, setInputdata] = useState("");
  const [inputdata4, setInputdata4] = useState("");
  const [data, setData] = useState([
    {
      id: 0,
      title: "اليوم الاول",
      detalis: "نبذة بسيطة",
      isDone: false,
      isDelete: false,
    },
  ]);
  const [count, setCount] = useState(1);
  function createData() {
    console.log("mowwwwwwwwwwwww");
    if (inputdata == "" || inputdata4 == "") {
      setDis("flex");
    } else {
      setData([
        ...data,
        {
          id: count,
          title: inputdata,
          detalis: inputdata4,
          isDone: false,
          isDelete: false,
        },
      ]);
      setCount(count + 1);
      setDis("none");
    }
  }
  let [dis, setDis] = useState("none");
  let [dis2, setDis2] = useState("none");
  let [dis3, setDis3] = useState("none");
  let [id_d, setId_d] = useState();
  function deleteItem(id) {
    setDis2("flex");
    setId_d(id);
    // console.log(id)
    // const newdata = data.filter((d) => {
    //   return d.id !== id;
    // });
    // setData(newdata);
  }

  function yes_del(id) {
    const newdata = data.filter((d) => {
      return d.id !== id;
    });
    setData(newdata);
    setDis2("none");
  }
  function no_del() {
    setDis2("none");
  }
  let [allItem, setAllItem] = useState({});

  function showeditinput(item) {
    setDis3("flex");
    setAllItem(item);
    setInputdata2(item.title);
    setInputdata3(item.detalis);
    console.log("itemmmmmmmm: ", item);
  }

  let [inputdata2, setInputdata2] = useState("");
  let [inputdata3, setInputdata3] = useState("");

  function editinput(id, newTitle, newDetalis) {
    console.log("the id: ", id);
    console.log("new title: ", newTitle);
    console.log("new title: ", newDetalis);
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              title: newTitle == "" ? item.title : newTitle,
              detalis: newDetalis == "" ? item.detalis : newDetalis,
            }
          : item
      )
    );
    setDis3("none");
    setInputdata2("");
    setInputdata3("");
  }

  function Doneitem(item) {
    setData((prevData) =>
      prevData.map((i) => (item.id === i.id ? { ...i, isDone: true } : i))
    );
    data.map((prevData) => console.log(prevData));
  }

  return (
    <>
      <div
        style={{
          display: dis3,
          marginLeft: "25%",
          marginRight: "25%",
          position: "relative ",
          top: "100px",
        }}
      >
        <TextField
          id="outlined-helperText"
          label=" تعديل عنوان المهمة"
          value={inputdata2}
          onChange={(e) => {
            setInputdata2(e.target.value);
          }}
        />
        <TextField
          id="outlined-helperText"
          label=" تعديل عنوان التفاصيل"
          value={inputdata3}
          onChange={(e) => {
            setInputdata3(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          onClick={() => {
            editinput(allItem.id, inputdata2, inputdata3);
          }}
        >
          تم
        </Button>
      </div>
      <Alert
        severity="error"
        style={{
          display: dis2,
          flexDirection: "column",
          marginLeft: "25%",
          marginRight: "25%",
          position: "relative ",
          top: "100px",
        }}
      >
        <h5> هل تريد فعلا الحذف ؟</h5>
        <Button
          onClick={() => {
            yes_del(id_d);
          }}
          variant="outlined"
        >
          نعم
        </Button>
        <Button variant="outlined" onClick={no_del}>
          لا
        </Button>
      </Alert>
      <Alert
        style={{
          display: dis,
          marginLeft: "25%",
          marginRight: "25%",
          position: "relative ",
          top: "100px",
        }}
        severity="warning"
        action={
          <Button
            onClick={() => {
              setDis("none");
            }}
            color="inherit"
            size="small"
          >
            اغلاق
          </Button>
        }
      >
        {inputdata == ""
          ? "يجب عليك ادخال عنوان المهمة"
          : " يجب عليك ادخال تفاصيل المهمة"}
      </Alert>

      <Container maxWidth="sm">
        <Box
          component="section"
          sx={{
            mt: 20,
            mb: 20,
            p: 2,
            border: "1px solid grey",
            borderRadius: "4px",
          }}
        >
          <h1
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            مهامي
          </h1>
          <BottomNavigation
            style={{ marginBottom: "20px" }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              style={{ border: "1px solid grey" }}
              label="غير منجز"
            />
              <BottomNavigationAction
                style={{ border: "1px solid grey" }}
                label="منجز"
              >
            <Link to={"/done"}>

            </Link>
              </BottomNavigationAction>
            <Routes>
              <Route path="/done" element={<Done item = {data} />} />
            </Routes>
            <BottomNavigationAction
              style={{ border: "1px solid grey", fontSize: "2px" }}
              label="الكل"
            />
          </BottomNavigation>

          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {data.map((item) => {
              if (item.isDone == false) {
                return (
                  <ListItem
                    className="mission"
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      border: "1px solid grey",
                      backgroundColor: "#3f50b5",
                      color: "white",
                      borderRadius: "4px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <DeleteOutlineRoundedIcon
                        onClick={() => {
                          deleteItem(item.id);
                        }}
                        style={{
                          marginRight: "10px",
                          backgroundColor: "red",
                          padding: "4px",
                          fontSize: "30px",
                          border: "1px solid grey",
                          borderRadius: "100px",
                        }}
                      ></DeleteOutlineRoundedIcon>
                      <ModeEditRoundedIcon
                        onClick={() => {
                          showeditinput(item);
                        }}
                        style={{
                          backgroundColor: "#757ce8",
                          marginRight: "10px",
                          padding: "4px",
                          fontSize: "30px",
                          border: "1px solid grey",
                          borderRadius: "100px",
                        }}
                      ></ModeEditRoundedIcon>
                      <CheckCircleOutlineOutlinedIcon
                        onClick={() => {
                          Doneitem(item);
                        }}
                        style={{
                          backgroundColor: "green",
                          fontSize: "30px",
                          borderRadius: "100px",
                        }}
                      ></CheckCircleOutlineOutlinedIcon>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <h1 style={{ fontSize: "20px" }}>{item.title}</h1>
                      <h1 style={{ fontSize: "16px" }}>{item.detalis}</h1>
                    </div>
                  </ListItem>
                );
              }
            })}
          </List>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <div>
              <TextField
                value={inputdata}
                onChange={(e) => {
                  setInputdata(e.target.value);
                }}
                style={{ width: "100%", marginBottom: "6px" }}
                id="outlined-basic"
                label="عنوان مهمة"
                variant="outlined"
              />
              <TextField
                value={inputdata4}
                onChange={(e) => {
                  setInputdata4(e.target.value);
                }}
                style={{ width: "100%" }}
                id="outlined-basic"
                label="تفاصيل المهمة"
                variant="outlined"
              />
            </div>
            <Button
              onClick={createData}
              style={{ width: "38%", margin: "20px" }}
              variant="contained"
            >
              اضافة
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
}
