import React, { useState } from 'react';
import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const HamburgerWrapper = styled.label`
  width: 40px;
  height: 48px;
  display: block;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
`;

const Line = styled.div`
  width: 70px;
  height: 6px;
  background-color: #fff;
  position: absolute;
  transition: all 0.3s;
  left: 0;
`;

const Line1 = styled(Line)`
  top: 0;
  transition: all 0.3s;
`;

const Line2 = styled(Line)`
  top: 18px;
  transition: all 0.3s;
`;

const Line3 = styled(Line)`
  top: 36px;
  transition: all 0.3s;
`;

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HiddenCheckbox
        id="label-check"
        checked={isOpen}
        onChange={handleToggle}
      />
      <HamburgerWrapper className="hamburger-label" htmlFor="label-check">
        <Line1
          className="line1"
          style={{
            transform: isOpen
              ? 'rotate(35deg) scaleX(0.55) translate(39px, -4.5px)'
              : 'rotate(0)',
            borderRadius: isOpen ? '50px 50px 50px 0' : 'none',
          }}
        />
        <Line2
          className="line2"
          style={{ opacity: isOpen ? 0 : 1, width: isOpen ? '45px' : '70px' }}
        />
        <Line3
          className="line3"
          style={{
            transform: isOpen
              ? 'rotate(-35deg) scaleX(0.55) translate(39px, 4.5px)'
              : 'rotate(0)',
            borderRadius: isOpen ? '0 50px 50px 50px' : 'none',
          }}
        />
      </HamburgerWrapper>
    </>
  );
}
