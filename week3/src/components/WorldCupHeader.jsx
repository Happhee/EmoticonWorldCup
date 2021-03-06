import React from "react";
import styledComponents from "../styles/Header-style";
const { TitleHeader, WorldCupContentHeader } = styledComponents;

const MainHeader = () => {
  return <TitleHeader>π κΊμγγλλ― κ·μ¬μ π </TitleHeader>;
};

const RoundHeader = (props) => {
  return (
    <WorldCupContentHeader>
      {props.title} {props.round[0]}/{props.round[1]}
    </WorldCupContentHeader>
  );
};
const ResultHeader = (props) => {
  return <WorldCupContentHeader>{props.title}</WorldCupContentHeader>;
};
const WorldCupHeader = {
  MainHeader,
  RoundHeader,
  ResultHeader,
};
export default WorldCupHeader;
