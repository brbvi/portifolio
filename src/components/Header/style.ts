import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 70px;
  padding: 2rem 1rem;
  background: var(--dark-gray);

  font-weight: 400;
  font-size: 1.3rem;

  display: flex;
  align-items: center;

  span {
    font-size: 1.5rem;
    font-family: Exo 2, sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  margin-left: auto;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 1.2rem;

    .animationBar {
      width: 10%;
      height: 1px;
      background: var(--white-letter);

      transition: width 0.3s;
    }

    a {
      padding: 0 0.2rem;
      display: inline-block;
      text-decoration: none;
      font-size: 1.1rem;
      color: var(--white-letter);
      transition: opacity 0.5s;

      &:hover {
        opacity: 0.5;
      }

      &:hover + .animationBar {
        width: 100%;
      }
    }
  }
`
