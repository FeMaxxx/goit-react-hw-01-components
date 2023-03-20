import styled from "@emotion/styled";

export const ProfileBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  width: 280px;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid grey;
  box-shadow: 3px 3px 5px rgba(177, 0, 0, 0.5);
`;

export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
`;

export const UserAvatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;

  border-radius: 50%;
  background-color: red;
  width: 100px;
`;

export const Name = styled.p`
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
`;

export const Info = styled.p`
  font-size: 16px;
  font-weight: 400;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 60px;
  background-color: rgba(0, 0, 100, 0.2);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 2px solid grey;
  width: 100%;

  &:not(:last-child) {
    border-right: 2px solid grey;
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;

  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;

  font-weight: 700;
`;
