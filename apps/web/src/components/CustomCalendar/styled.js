import styled from "styled-components";

export const CalendarContainer = styled.div`
  .react-calendar {
    margin-top: -40px;
    width: 100%;
    background: white;
    border-radius: 10px;
    background: none !important;

    border: none;
  }

  /* Estiliza o cabeçalho do mês */
  .react-calendar__navigation {
    color: white;
    font-weight: bold;
  }

  .react-calendar__navigation button {
    display: none;
  }

  /* Estiliza os dias da semana */
  .react-calendar__month-view__weekdays {
    font-weight: bold;
    color: var(--tertiary-color);
    font-family: var(--font-family);
  }

  /* Dia selecionado */
  .react-calendar__tile--active {
    background: #da731f !important;
    color: white !important;

    border-radius: 16px;
    box-shadow: 0 0 15px 0px #da731f;
    transition: 300ms;
  }

  /* Estiliza os dias atuais */
  .react-calendar__tile--now {
    background: rgb(137, 226, 125);
    color: white;

    box-shadow: 0 0 15px 0px rgb(137, 226, 125);
    border-radius: 16px;
  }

  /* Ajusta espaçamento entre os dias */
  .react-calendar__tile {
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 40px;
    font-size: 0.8rem;
    font-family: var(--font-family);
  }
`;

export const MonthYearDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  .month {
    text-transform: capitalize;
    font-size: 1.8rem;
    font-family: var(--font-family);
    font-weight: bold;
  }

  .year {
    font-size: 0.8rem;
    color: var(--tertiary-color);
    font-family: var(--font-family);
    margin-left: 10px;
    margin-bottom: 6px;
  }
`;