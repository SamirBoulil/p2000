import React from "react";
import styled from "styled-components";
import Player from "./Player";

const TeamSC = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
`;

const Team: React.FC = () => {
  return (
    <TeamSC>
      <Player></Player>
      <Player></Player>
    </TeamSC>
  );
};

export default Team;
