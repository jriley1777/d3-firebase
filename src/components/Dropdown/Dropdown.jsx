import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";


const StyledDropdown = styled.div`
  height: 100%;
  z-index: 3;
`;

const DropdownButton = styled.button`
  outline: none;
  font-size: 1rem;
  border: none;
  color: white;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 14px 16px;
  height: 100%;
  min-width: 160px;

  &:hover {
    cursor: pointer;
    color: darkgrey;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  display: ${props => (props.showContent ? "block" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 160px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  > * {
    display: block;
    background: black;
    color: white;
    border-bottom: 1px solid black;
    float: none;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
      background: darkgrey;
    }
  }
`;

const Dropdown = ({ title, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    return(
      <StyledDropdown
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <DropdownButton>
          { title }
          {isHovered ? <FaCaretUp /> : <FaCaretDown />}
        </DropdownButton>
        <DropdownContent showContent={isHovered}>
          { children }
        </DropdownContent>
      </StyledDropdown>
    );
}

export default Dropdown;