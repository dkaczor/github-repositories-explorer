import { Button, Segment, Loader } from "semantic-ui-react";
import styled from "@emotion/styled";

export const AppLoader = styled(Loader)`
  &&& {
    margin-top: 25px;
  }
`;

export const ExpandedButton = styled(Button)`
  &&& {
    background-color: rgb(44, 156, 219);
    border-radius: 0;
    color: #fff;
    margin-top: 20px;
    font-weight: lighter;
    padding: 15px 0px;
  }
`;

export const ExpandedSegment = styled(Segment)`
  &&& {
    background-color: rgb(242, 242, 242);
    border-radius: 0;
    border: none;
    margin-top: 25px;
    font-weight: 600;
    padding-top: 7px;
    padding-bottom: 7px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 0px;
    font-size: 14px;
  }

  &&&:hover {
    background-color: rgb(242, 242, 222);
  }
`;

export const ExpandedPanelSegment = styled(Segment)`
  &&& {
    align-self: flex-end;
    width: 90%;
    background-color: rgb(224, 224, 224);
    border-radius: 0;
    border: none;
    box-shadow: initial;
    padding-bottom: 50px;
    margin-bottom: 0px;
  }

  &&&:last-of-type {
    margin-bottom: 15px;
  }

  p {
    margin: 5px 5px 0px -5px;
    font-size: 15px;
    text-align: justify;
  }
`;

export const ExpandedParagraph = styled.p`
  text-align: start;
  color: #333;
  margin-top: 15px;
  font-size: 14px;
  span::before,
  span::after {
    content: '"';
  }
`;

export const PanelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PanelFirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;

  &&& i {
    margin-left: 5px;
  }

  &&& span:first-of-type {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: -5px;
    font-size: 16px;
  }
`;
