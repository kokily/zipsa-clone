import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding-bottom: 15px;
  position: relative;

  a {
    color: #8d94a8;
    transition: color 0.3s;

    &:hover {
      color: #3f7cd8;
    }
  }

  &:hover {
    ul {
      display: flex;
    }
  }
`;

const List = styled.ul`
  display: none;
  flex-direction: column;
  position: absolute;
  list-style: none;
  top: 50px;
  left: -40px;
  width: 140px;
  background: #509ccd;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 43px;
    margin: 0;
    padding: 0;

    &:hover {
      background: #8bb6d3;
    }
  }

  a {
    color: white;

    &:hover {
      color: white;
    }
  }
`;

type MenuType = {
  name: string;
  url: string;
};

interface Props {
  name: string;
  url: string;
  sub?: MenuType[];
}

const NavItem: React.FC<Props> = ({ name, url, sub }) => {
  return (
    <Container className="menu">
      <a href={`${url}`}>{name}</a>

      {sub && (
        <List>
          {sub.map((menu) => (
            <li key={menu.name}>
              <a href={`${url}`}>{menu.name}</a>
            </li>
          ))}
        </List>
      )}
    </Container>
  );
};

export default NavItem;
