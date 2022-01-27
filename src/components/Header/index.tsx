import logoSvg from '../../assets/logo.svg'
import { Container } from './style'
export function Header(){
  return(
    <Container>
      <img src={logoSvg} alt="dt money"/>
			<button type="button">
				Nova transação
			</button>
    </Container>
    )
}