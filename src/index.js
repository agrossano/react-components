import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Ale"
          timeAgo="Today at 5:10PM"
          comment="Ottimo post!"
          avatarImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jeanne"
          timeAgo="Today at 2:30AM"
          comment="Ben scritto!"
          avatarImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Peter"
          timeAgo="Yesterday at 8:30PM"
          comment="Grazie per il commento"
          avatarImg={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
