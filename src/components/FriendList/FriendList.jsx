import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendsList } from "./FriendList.styled";

export const FriendList = (friends) => {
  return (
    <FriendsList>
      <FriendListItem friends={friends} />
    </FriendsList>
  );
};

FriendList.prototype = {};
