import { useContext, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TextareaAutosize from "@mui/material/TextareaAutosize";
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
import { ToDoList } from "./Context/ToDoListContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { v4 as uuidv4 } from "uuid";
import MySnackBar from "./MySnackBar"
import { SnackContext } from "./Context/SnackContext";

export default function All() {
  const [effect, setEffect] = useState(0);
  const [value, setValue] = useState(0);
  const [inputdata, setInputdata] = useState("");
  const [inputdata4, setInputdata4] = useState("");
  const { data, setData } = useContext(ToDoList);
  const [diplayToDo, setDisplayToDo] = useState("all");
  const { handleSnack } = useContext(SnackContext);
  
  const completed = data.filter((item) => {
    return item.isDone;
  });
  const nonCompleted = data.filter((item) => {
    return !item.isDone;
  });
  let myuuid = uuidv4();
  function createData() {
    console.log("mowwwwwwwwwwwww");
    if (inputdata === "") {
      setOpenAlart("flex");
    } else {
      const newTodo = {
        id: myuuid,
        title: inputdata,
        detalis: inputdata4,
        isDone: false,
      };
      const updateTodo = [...data, newTodo];

      setData(updateTodo);
      setInputdata("")
      setInputdata4("")
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      
      handleSnack("تم الاضافة")
      
    }
  }

  let [id_d, setId_d] = useState();

  function yes_del() {
    const newdata = data.filter((d) => {
      return d.id !== id_d;
    });
    setData(newdata);
    localStorage.setItem("todos", JSON.stringify(newdata));
    setOpen(false);
    handleSnack("تم الحذف")
  
  }

  let [allItem, setAllItem] = useState({});

  let [inputdata2, setInputdata2] = useState("");
  let [inputdata3, setInputdata3] = useState("");

  function editinput(id, newTitle, newDetalis) {
    console.log("the id: ", id);
    console.log("new title: ", newTitle);
    console.log("new title: ", newDetalis);

    const newEdit = data.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          title: newTitle == "" ? item.title : newTitle,
          detalis: newDetalis == "" ? item.detalis : newDetalis,
        };
      } else {
        return item;
      }
    });

    handleSnack("تم التعديل")
    setData(newEdit);

    localStorage.setItem("todos", JSON.stringify(newEdit));

    setOpenEdit(false);
    setInputdata2("");
    setInputdata3("");
  }

  function Doneitem(item) {
    const dataDone = data.map((i) => {
      if (item.id == i.id) {
        return { ...i, isDone: item.isDone == false ? true : false };
      } else {
        return i;
      }
    });
    setData(dataDone);
    localStorage.setItem("todos", JSON.stringify(dataDone));
    data.map((prevData) => console.log(prevData));
  }

  const [open, setOpen] = useState(false);
  const [openAlart, setOpenAlart] = useState(false);

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

  const handleCloseAlart = () => {
    setOpenAlart(false);
  };

  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    const newSetupdate = JSON.parse(localStorage.getItem("todos")) ?? [];
    setData(newSetupdate);
  }, []);

  function handleChangeDisplayToDo(e) {
    setDisplayToDo(e.target.value);
  }
  let diplayData = data;
  if (diplayToDo == "all") {
    diplayData = data;
  } else if (diplayToDo == "completed") {
    diplayData = completed;
  } else if (diplayToDo == "non-completed") {
    diplayData = nonCompleted;
  }

  function wrapText(text) {
    if (!text) return [];
    const lines = [];
    for (let i = 0; i < text.length; i += 20) {
      const part = text.slice(i, i + 20);
      const withDash = part.length === 20 ? "-" + part : part;
      lines.push(withDash);
    }
    return lines;
  }

  function handleClearAll(){
    const newdata = [];
    setData(newdata);
    localStorage.setItem("todos", JSON.stringify(newdata))
    handleSnack("تم حذف الكل")
  }

  return (
    <>
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

      {/* show aleart */}
      <Dialog
        style={{ direction: "rtl" }}
        open={openAlart}
        onClose={handleCloseAlart}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"تنبيه"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            يجب على الاقل ادخال عنوان مهمة
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlart}>اغلاق</Button>
        </DialogActions>
      </Dialog>
      

      <Container maxWidth="sm">
        <Box
          component="section"
          sx={{
            mt: 10,
            mb: 10,
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
          <ToggleButtonGroup
            style={{ display: "flex", justifyContent: "center" }}
            color="primary"
            value={diplayToDo}
            exclusive
            onChange={handleChangeDisplayToDo}
            aria-label="Platform"
          >
            <ToggleButton value="non-completed">غير منجز</ToggleButton>
            <ToggleButton value="completed">منجز</ToggleButton>
            <ToggleButton value="all">الكل</ToggleButton>
          </ToggleButtonGroup>
          <Button disabled={data.length >= 1 ? false : true} onClick={handleClearAll} variant="outlined" style={{marginBottom:"4px"}}>حذف الكل</Button>
            
          <List sx={{ width: "100%", bgcolor: "background.paper" }} style={{maxHeight: "300px", overflowY: "scroll", overflowX: "none"}}>
            {diplayData.map((item) => {
              return (
                <ListItem
                  key={item.id}
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
                        backgroundColor:
                          item.isDone == true ? "#7FFF00" : "#8bc34a",
                        fontSize: "30px",
                        borderRadius: "100px",
                        padding: "0px",
                      }}
                    ></CheckCircleOutlineOutlinedIcon>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    {/* <h1 style={{ fontSize: "20px" }}>{item.title}</h1> */}
                    {/* <h1 style={{ fontSize: "16px" }}>{item.detalis}</h1> */}
                    {wrapText(item.title).map((line, index) => (
                      <h1 key={index} style={{ fontSize: "20px", margin: 0, textDecoration: item.isDone ? "line-through" : ""}}>
                        {line}
                      </h1>
                    ))}
         
                    {wrapText(item.detalis).map((line, index) => (
                      <h1
                        key={`d-${index}`}
                        style={{ fontSize: "16px", margin: 0 }}
                      >
                        {line}
                      </h1>
                    ))}
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
                style={{ width: "100%", marginBottom: "6px",marginTop: "10px" }}
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
        <p style={{ display: "flex", justifyContent: "end" }}>
          جميع الحقوق محفوظة لدى حسن عبدالهادي الكبيييييييير
        </p>
      </Container>
    </>
  );
}
