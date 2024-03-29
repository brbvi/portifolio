import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Lexend, sans-serif;
  }

  @media (max-width: 1080px){
    html{
      font-size: 93.75%; //15px
    }
  }
  @media (max-width: 720px){
    html{
      font-size: 87.5%; //14px
    }
  } 
  
  button, input {
    background: 0;
    border: 0;
    cursor: pointer;
  }
  :root{
    --white:#FFF;

    --gray:#746C70;
    --dark-gray:#4E4F50;

    --white-letter: #E2DED0;
  }
  body{
    background: var(--gray);
  }
  body, input, textarea, button{
    font: 500 1rem Inter, sans-serif;
    color: var(--white-letter);
  } 
  h1, h2, h3, h4, h5, h6{
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: var(--white-letter);
  }
  h1{
    font-size: 2rem;
  }
  h2{
    font-size: 1.5rem;
  }
`
