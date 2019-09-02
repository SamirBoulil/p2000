import React from "react";
import styled from "styled-components";

const PlayerSC = styled.div`
  flex-basis: auto;
  margin: auto;
  height: 40vh;
  text-align: center;
  background-color: blue;
`;

const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
`;

const Name = styled.div`
  margin-top: 40%;
  font-weight: bold;
`;

const Player: React.FC = () => {
  return (
    <PlayerSC>
      <ProfilePicture></ProfilePicture>
      <Name>Samir Boulil</Name>
    </PlayerSC>
  );
};

export default Player;
