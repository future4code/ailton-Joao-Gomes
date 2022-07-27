import React from "react";
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
import { Separator } from "../../components/Separator";

export const Card = (props) => {
  return (
    <Container>
      <UserP>Enviado por: {props.username}</UserP>
      <Separator height={18} />
      <TitleP>{props.title}</TitleP>
      <Separator height={9} />
      <TextP>{props.bodyText}</TextP>
      <Separator height={22} />
      <Bar>
        <UpDown>
          <VoteStyle src={UpVoteIcon} />
          <NumbVoteStyle>{props.voteSum}</NumbVoteStyle>
          <VoteStyle src={DownVoteIcon} />
        </UpDown>
        <CommentsDiv>
          <CommentsIconStyle src={CommentsIcon} />
          <NumbCommentStyle>{props.commentCount}</NumbCommentStyle>
        </CommentsDiv>
      </Bar>
    </Container>
  );
};
