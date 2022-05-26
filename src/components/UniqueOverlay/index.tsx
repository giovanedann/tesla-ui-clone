import { Container, Header, Logo, Burger, Footer } from "./styles"
import { useTransform } from 'framer-motion';
import useWrapperScroll from "../../hooks/useWraperScroll";

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>

      <Header>
        <Logo/>
        <Burger />
      </Header>

      <Footer style={ { opacity } }>
        <ul>
          <li>
            <a href="#">Tesla UI Clone</a>
          </li>
          <li>
            <a href="#">Something</a>
          </li>
          <li>
            <a href="#">Another something</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay;
