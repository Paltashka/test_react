import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import img from "../../images/paella.jpeg";

import { useAction } from "../../config/utils";
import { getDataPostComment } from "../../redux/actions/dataAction";

import "./PostCard.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function PostCard({ title, body, id }) {
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState();
  const getDataPostCommentFn = useAction(getDataPostComment);

  const handleExpandClick = (id) => {
    getDataPostCommentFn(id).then((res) => {
      setComment(res);
      setExpanded(!expanded);
    });
  };

  return (
    <Card key={id} sx={{ maxWidth: 345, minHeight: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2022"
      />
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="navBtn">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={() => handleExpandClick(id)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {comment ? (
            comment.map((item) => (
              <div key={item.id} className="commentBox">
                <p className="commentName">{item.name}</p>
                <p className="commentUser">User: {item.email}</p>
                <p className="commentText">{item.body}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default PostCard;
