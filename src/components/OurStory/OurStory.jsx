import styled from 'styled-components';
import OurStorOneCard from './OurStorOneCard';

const DoubleDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ffd3af57;
  padding: 2rem;
`;

function OurStory(props) {
  return (
    <DoubleDiv>
      <div>
        <h4>Our story</h4>
        <h2>From Startups to Titans of Industry</h2>
        <p>
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic
          unsatiable saw his giving Remain expense of gay produce excited
          perceived do an a china mean its so ye when in explained Hearts am
          next over match mr partiality not shoud latter thus as out no passed
          forming middleton exercise up
        </p>
      </div>
      <CardGrid>
        <OurStorOneCard />
        <OurStorOneCard />
        <OurStorOneCard />
        <OurStorOneCard />
      </CardGrid>
    </DoubleDiv>
  );
}
export default OurStory;
