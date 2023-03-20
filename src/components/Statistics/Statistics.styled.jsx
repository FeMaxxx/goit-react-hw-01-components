import styled from "@emotion/styled";

export const Statistic = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;

  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid grey;
  box-shadow: 3px 3px 5px rgba(177, 0, 0, 0.5);
  text-align: center;
`;

export const Title = styled.h1`
  padding-top: 30px;
  padding-bottom: 30px;

  font-size: 25px;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  width: 100px;
  height: 100px;
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
