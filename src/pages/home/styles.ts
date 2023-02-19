import styled from "styled-components";
import search from "../../assets/search.svg";

export const ContainerSearch = styled.div`
  border-radius: 0px 0px 40px 40px;
  width: 100vw;
  height: 100vh;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 250px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 10vh;
  input {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 660px;
    height: 40px;

    padding-left: 3rem;

    background: url(${search}) no-repeat left center;
    background-size: 04%;
    background-position: 15px 50%;
    background-color: white;

    border: none;
    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
  }
  button {
    flex: 1;

    text-align: center;

    height: 40px;
    width: 40px;

    padding-bottom: 2px;

    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["black"]};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border: none;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme["black"]};
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    margin: 30px;
  }

  img {
    margin: 30px;
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme["white"]};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["green-medium"]};
    }
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    color: ${(props) => props.theme["white"]};
    font-size: 1.5rem;
    margin: 2rem 0rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Graus = styled.div`
  font-size: 56px;
  font-weight: 700;

  span {
    position: relative;
    font-size: 20px;
    top: -10px;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 30px; */

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #838383;
    text-align: center;
    width: 100%;
  }
`;

export const Info = styled.div`
  margin-top: 50px;

  li {
    display: flex;
    align-items: center;
    list-style-type: none;
    width: 17vw;
    justify-content: space-between;
    gap: 20px;
    /* margin-bottom: 5px; */
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    font-weight: bold;
  }
`;

export const Icon = styled.div`
  margin-bottom: 30px;
`;

export const Result = styled.div`
  display: flex;
  padding: 2rem;
  margin: 3rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ccc;
  background: linear-gradient(
    153.43deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 85%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;
