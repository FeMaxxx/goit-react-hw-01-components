import styled from "@emotion/styled";

export const History = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 500px;

  background-color: #fff;
  border-radius: 5px;
  border: 2px solid grey;
  box-shadow: 3px 3px 5px rgba(177, 0, 0, 0.5);
`;

export const Head = styled.thead`
  height: 40px;
  background-color: #0088be;
  font-size: 20px;
`;

export const Body = styled.tbody`
  height: 40px;
  background-color: rgba(54, 89, 103, 0.1);
  color: rgba(0, 0, 0, 0.8);

  &:nth-of-type(2n + 2) {
    background-color: rgba(144, 238, 144, 0.318);
  }
`;

export const Th = styled.th`
  width: calc(500px / 3);
`;
