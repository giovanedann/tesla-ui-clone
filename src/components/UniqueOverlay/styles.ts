import styled from "styled-components"
import { motion } from 'framer-motion'
import { LogoSVG, BurgerSVG } from "./IconSVG"

export const Container = styled.div`
  position: sticky;
  inset: 0;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  lefT: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;
  min-height: 3rem;
`

export const Logo = styled(LogoSVG)`
  height: 17px;
  cursor: pointer;
`

export const Burger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding-right: 5px;
`

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 30px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    li {
      text-decoration: none;
      font-size: 14px;
      font-family: 'Roboto', sans-serif;

      a {
        text-decoration: none;
        color: #393C41;
        transition: 0.2s;

        &:hover {
          color: #000;
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 2rem;
    ul {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }
  }
`
