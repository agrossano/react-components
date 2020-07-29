import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Ale"
        timeAgo="Today at 5:10PM"
        comment="Ottimo post!"
        avatarImg={faker.image.avatar()}
      />
      <CommentDetail
        author="Jeanne"
        timeAgo="Today at 2:30AM"
        comment="Ben scritto!"
        avatarImg={faker.image.avatar()}
      />
      <CommentDetail
        author="Peter"
        timeAgo="Yesterday at 8:30PM"
        comment="Grazie per il commento"
        avatarImg={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
