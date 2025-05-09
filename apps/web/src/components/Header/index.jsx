import { Centralização, Container, Layout } from "./styled";

function Header() {
  return (
    <Container>
      <Centralização>
        <Layout>
          <section className="logo section">
            <h1>Teste</h1>
          </section>
          <section className="interaction section">
            Olá
          </section>
        </Layout>
      </Centralização>
    </Container>
  );
}

export default Header;