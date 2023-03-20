import PropTypes from "prop-types";
import {
  Title,
  Statistic,
  StatList,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";

export const Statistics = ({ title, data }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map((element) => (
          <Item style={{ backgroundColor: randomColor() }} key={element.id}>
            <Label>{element.label}</Label>
            <Percentage>{element.percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </Statistic>
  );
};

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function randomColor() {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const h = randomInt(0, 360);
  const s = randomInt(42, 98);
  const l = randomInt(40, 90);
  return `hsl(${h},${s}%,${l}%)`;
}
