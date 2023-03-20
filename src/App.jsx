import user from "user.json";
import data from "data.json";

import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";

// import friends from "friends.json";
// import transactions from "transactions.json";

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
    </>
  );
};
