import styled from 'styled-components'

const CabecalhoSection = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`
const Cabecalho = () => (
  <CabecalhoSection>
    <h1>EBAC Jobs</h1>
  </CabecalhoSection>
)

export default Cabecalho
