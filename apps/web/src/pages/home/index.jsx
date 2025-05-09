import CustomCalendar from "../../components/CustomCalendar";
import { LeftBar, PageContainer, Content } from "./styled";

import OrcestraLogo from "../../assets/OrcestraLogo.png";
// import ZenitLogo from "../../assets/ZenitLogo.png";

function home() {
  return (
    <PageContainer>
      <LeftBar>
        <CustomCalendar />
        <hr />

        <section className="reservation-status section">
          <img className="logo" src={OrcestraLogo} alt="EJ Logo" />
        </section>
      </LeftBar>
      
      <Content>
        <h1>Reservas</h1>
      </Content>
    </PageContainer>
  );
}

export default home;