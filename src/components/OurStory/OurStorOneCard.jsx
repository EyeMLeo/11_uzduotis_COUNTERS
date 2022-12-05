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
  function counter(max) {
    const [counter1, setCounter1] = useState(1);

    if (counter1 < max) {
      setTimeout(() => {
        setCounter1((prev) => {
          prev + 1;

          return prev + 13;
        });
      }, '80');
    } else {
      return max;
    }
    return counter1;
    console.log('counter1 ===', counter1);
  }
  //   counter(1560);

  return (
    <OneCard>
      <h2>{counter(1560)}+</h2>
      <DecoLine />
      <h4>Project Delivered</h4>
    </OneCard>
  );
}
export default OurStorOneCard;
