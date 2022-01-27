import logoSvg from "../../assets/logo.svg";
import { Container, Content } from "./style";

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
