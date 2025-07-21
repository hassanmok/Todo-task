import { useContext, useEffect, useState } from "react";
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
import { ToDoList } from "./Context/ToDoListContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function All() {
  const [effect, setEffect] = useState(0);
  const [value, setValue] = useState(0);
  const [inputdata, setInputdata] = useState("");
  const [inputdata4, setInputdata4] = useState("");
  const { data, setData } = useContext(ToDoList);

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

  function yes_del() {
    const newdata = data.filter((d) => {
      return d.id !== id_d;
    });
    setData(newdata);
    setOpen(false);
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
    setOpenEdit(false);
    setInputdata2("");
    setInputdata3("");
  }

  function Doneitem(item) {
    setData((prevData) =>
      prevData.map((i) =>
        item.id === i.id
          ? { ...i, isDone: item.isDone == false ? true : false }
          : i
      )
    );
    data.map((prevData) => console.log(prevData));
  }

  const [open, setOpen] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleClickOpenEdit = (item) => {
    setOpenEdit(true);
    setAllItem(item);
    setInputdata2(item.title);
    setInputdata3(item.detalis);
  };

  const handleClickOpen = (id) => {
    setId_d(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      {/* <div
        style={{
          display: dis3,
          justifyContent: "center",
          flexDirection: "column",
          position: "relative ",
          top: "100px",
          marginLeft: "25%",
          marginRight: "25%",
        }}
      >
        <TextField
          style={{ marginBottom: "10px" }}
          id="outlined-helperText"
          label=" تعديل عنوان المهمة"
          value={inputdata2}
          onChange={(e) => {
            setInputdata2(e.target.value);
          }}
        />
        <br></br>
        <TextField
          id="outlined-helperText"
          label=" تعديل عنوان التفاصيل"
          value={inputdata3}
          onChange={(e) => {
            setInputdata3(e.target.value);
          }}
        />
        <br></br>
        <Button
          style={{ marginLeft: "25%", marginRight: "25%" }}
          variant="outlined"
          onClick={() => {
            editinput(allItem.id, inputdata2, inputdata3);
          }}
        >
          تم
        </Button>
      </div> */}

      {/* edit item  or not */}

      <Dialog
        style={{ direction: "rtl" }}
        open={openEdit}
        onClose={handleCloseEdit}
      >
        <DialogTitle>تعديل المهمة</DialogTitle>
        <DialogContent sx={{ paddingBottom: 0 }}>
          <DialogContentText>
            <h4>عدل معلومات المهمة</h4>
          </DialogContentText>

          <TextField
            style={{ marginBottom: "10px" }}
            id="outlined-helperText"
            label=" تعديل عنوان المهمة"
            value={inputdata2}
            onChange={(e) => {
              setInputdata2(e.target.value);
            }}
          />
          <br></br>
          <TextField
            id="outlined-helperText"
            label=" تعديل عنوان التفاصيل"
            value={inputdata3}
            onChange={(e) => {
              setInputdata3(e.target.value);
            }}
          />
          <DialogActions>
            <Button onClick={handleCloseEdit}>اغلاق</Button>
            <Button
              type="submit"
              onClick={() => {
                editinput(allItem.id, inputdata2, inputdata3);
              }}
            >
              تم
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/* delete item or not */}

      <Dialog
        style={{ direction: "rtl" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"حذف مهمة"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            هل ترغب حقا في حذف هذه المهمة ؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>لا</Button>
          <Button onClick={yes_del} autoFocus>
            نعم
          </Button>
        </DialogActions>
      </Dialog>
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
          <hr style={{ border: ".2px solid black" }}></hr>
          <ToggleButtonGroup style={{display: "flex", justifyContent: "center"}}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="web">غير منجز</ToggleButton>
            <ToggleButton value="android">منجز</ToggleButton>
            <ToggleButton value="ios">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/* <BottomNavigation
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
              <Link to={"/done"}></Link>
            </BottomNavigationAction>
            <Routes>
              <Route path="/done" element={<Done item={data} />} />
            </Routes>
            <BottomNavigationAction
              style={{ border: "1px solid grey", fontSize: "2px" }}
              label="الكل"
            />
          </BottomNavigation> */}

          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {data.map((item) => {
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
                      onClick={
                        () => {
                          handleClickOpen(item.id);
                        }
                        // deleteItem(item.id);
                      }
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
                        handleClickOpenEdit(item);
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
                        color: "green",
                        backgroundColor: item.isDone == true ? "#7FFF00" : "#8bc34a",
                        fontSize: "30px",
                        borderRadius: "100px",
                        padding: "0px"
                      }}
                    ></CheckCircleOutlineOutlinedIcon>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <h1 style={{ fontSize: "20px" }}>{item.title}</h1>
                    <h1 style={{ fontSize: "16px" }}>{item.detalis}</h1>
                  </div>
                </ListItem>
              );
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
