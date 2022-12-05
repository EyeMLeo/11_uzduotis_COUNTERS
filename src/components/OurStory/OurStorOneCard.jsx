import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const OneCard = styled.div`
  /* display: grid;
  place-items: center; */
`;

const DecoLine = styled.div`
  width: 60px;
  height: 5px;
  background-color: #ffa155bb;
`;

function OurStorOneCard(props) {
  function counter(max, speed, step) {
    const [counter1, setCounter1] = useState(0);

    if (counter1 < max) {
      setTimeout(() => {
        setCounter1((prev) => {
          return (
            prev +
            step +
            (props.rrNumber ? (Math.random() * 10).toFixed(0) * 1 : 0)
          );
        });
      }, speed);
    } else {
      return max;
    }
    return counter1;
  }

  return (
    <OneCard>
      <h2>{counter(props.maximumValue, props.countSpeed, props.stepValue)}+</h2>
      <DecoLine />
      <h4>{props.name}</h4>
    </OneCard>
  );
}
export default OurStorOneCard;
