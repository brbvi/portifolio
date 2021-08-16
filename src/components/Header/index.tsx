import { Container, Wrapper } from './style'

import Link from 'next/link'

export function Header() {
  return (
    <Container>
      <span>Vito Borba</span>

      <Wrapper>
        <div>
          <Link href="/">
            <a>Sobre mim</a>
          </Link>
          <div className="animationBar"></div>
        </div>
        <div>
          <Link href="/">
            <a>Projetos</a>
          </Link>
          <div className="animationBar"></div>
        </div>
        <div>
          <Link href="/">
            <a>Contato</a>
          </Link>
          <div className="animationBar"></div>
        </div>
      </Wrapper>
    </Container>
  )
}
