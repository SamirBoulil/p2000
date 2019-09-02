import React from "react";
import styled from "styled-components";

const Score = styled.div`
  height: 20vh;
  text-align: center;
`;

const ScoreTeam = styled.div`
  height: 50%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  transform: skew(-5deg);
`;

const ScoreTeam1 = styled(ScoreTeam)`
  margin-right: 10%;
`;

const ScoreTeam2 = styled(ScoreTeam)`
  margin-left: 10%;
`;

const ScoreSeparator = styled.div`
  float: left;
  position: relative;
  left: 50%;
  width: 10px;
  height: 100px;
  transform: skew(-20deg);
  background: pink;
`;

const ScoreFC: React.FC = () => {
  return (
    <Score>
      <ScoreSeparator />
      <ScoreTeam1>10</ScoreTeam1>
      <ScoreTeam2>8</ScoreTeam2>
    </Score>
  );
};

export default ScoreFC;
