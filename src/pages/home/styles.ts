import styled from "styled-components";
import bg from "../../assets/bg.png";
import search from "../../assets/search.svg";

export const ContainerSearch = styled.div`
  height: 29rem;

  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;

  background: url(${bg}) center top no-repeat;
  background-size: cover;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10rem;
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
    height: 40px;
    width: 40px;
    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["green-dark"]};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-left: 1px solid #ccc;
    cursor: pointer;
    border-top: none;
    border-bottom: none;
    &:hover {
      background: ${(props) => props.theme["green-dark"]};
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
  h1 {
    color: ${(props) => props.theme["white"]};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  display: flex;
  height: 65vh;
  align-items: center;
  justify-content: center;
  left: -20px;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
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
  margin: 30px;

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
  margin-top: 20px;

  li {
    display: flex;

    list-style-type: none;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 5px;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: bold;
  }
`;

export const Icon = styled.div`
  margin-bottom: 30px;
`;
