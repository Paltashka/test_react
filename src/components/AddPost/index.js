import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import { useAction } from "../../config/utils";

import { addDataPost } from "../../redux/actions/dataAction";

import "./AddPost.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddPost() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addDataPostFn = useAction(addDataPost);

  const formData = {
    title,
    body: text,
    userId: 1,
  };

  const handleForm = (obj) => {
    addDataPostFn(obj);
    setOpen(false);
    setTitle("");
    setText("");
  };

  return (
    <div>
      <div className="addPostBox">
        <Button variant="contained" onClick={handleOpen}>
          ADD POST
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Post
            </Typography>

            <div className="formBox">
              {" "}
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Title
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  label="Amount"
                />
              </FormControl>
            </div>

            <div className="formBox">
              {" "}
              <TextField
                id="outlined-multiline-static"
                label="Text"
                multiline
                rows={4}
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
                style={{ width: 394 }}
              />
            </div>

            <div className="formBox">
              {" "}
              <Button onClick={() => handleForm(formData)} variant="contained">
                ADD POST
              </Button>{" "}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
