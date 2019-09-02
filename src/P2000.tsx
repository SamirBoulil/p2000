import React from "react";
import TeamContainer from "./Team/TeamContainer";
import ScoreContainer from "./Score/ScoreContainer";
import styled from "styled-components";

const P2000 = styled.div`
  width: 70%;
  margin: 10% auto 10% auto;
`;

const P2000FC: React.FC = () => {
  return (
    <P2000>
      <TeamContainer></TeamContainer>
      <ScoreContainer></ScoreContainer>
      <TeamContainer></TeamContainer>
    </P2000>
  );
};

export default P2000FC;
