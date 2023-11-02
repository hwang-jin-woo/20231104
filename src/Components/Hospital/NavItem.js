import styled from "styled-components"
const Container=styled.div`
i{
  font-size: 1.8rem;
  margin-bottom: 3px;
  font-weight: bold;
}

`

export function NavItem({icon,name}){
  return<>
    <Container>
      <i className={icon}></i>
      <span>{name}</span>
    </Container>
  </>
}