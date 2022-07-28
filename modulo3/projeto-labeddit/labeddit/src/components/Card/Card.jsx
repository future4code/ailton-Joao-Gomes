import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  UserP,
  NumbVoteStyle,
  CommentsIconStyle,
  TitleP,
  TextP,
  Bar,
  UpDown,
  CommentsDiv,
  NumbCommentStyle,
  VoteStyle,
} from "./style";
import UpVoteIcon from "../../assets/upvote.png";
import DownVoteIcon from "../../assets/downvote.png";
import CommentsIcon from "../../assets/comments.png";
import { GoTo } from "../../functions/GoTo";
import { Separator } from "../../components/Separator";

export const Card = (props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <UserP>Enviado por: {props.username}</UserP>
      <Separator height={18} />
      {props.title.length > 20 ? (
        <TitleP>{props.title.slice(0, 20) + "..."}</TitleP>
      ) : (
        <TitleP>{props.title}</TitleP>
      )}

      <Separator height={9} />
      {props.bodyText.length > 40 ? (
        <TextP>{props.bodyText.slice(0, 40) + "..."}</TextP>
      ) : (
        <TextP>{props.bodyText}</TextP>
      )}

      <Separator height={22} />
      <Bar>
        <UpDown>
          <VoteStyle
            src={UpVoteIcon}
            onClick={() => props.upVote(props.id, 1)}
          />
          <NumbVoteStyle>{props.voteSum ? props.voteSum : "0"}</NumbVoteStyle>
          <VoteStyle
            src={DownVoteIcon}
            onClick={() => props.downVote(props.id, -1)}
          />
        </UpDown>
        <CommentsDiv onClick={() => GoTo(navigate, `/post/${props.id}`)}>
          <CommentsIconStyle src={CommentsIcon} />
          <NumbCommentStyle>
            {props.commentCount ? props.commentCount : "0"}
          </NumbCommentStyle>
        </CommentsDiv>
      </Bar>
    </Container>
  );
};
