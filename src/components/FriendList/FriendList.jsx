import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { arrayOf } from "prop-types";
import { FriendsList } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
