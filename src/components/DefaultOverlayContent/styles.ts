import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const Heading = styled.div`
  margin-top: 16vh;
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #393C41;
  }

  > h2 {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #5C5E62;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;

  > button {
    background: #1A1720;
    
    color: #FFF;
    opacity: 0.8;
    font-size: 12px;
    font-weight: 500px;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;

    &.white {
      background: #FFF;
      color: #1A1720;
      opacity: 0.65;
    }

    & + button { // next button after the first button
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 5rem;
    gap: 20px;
  }
`