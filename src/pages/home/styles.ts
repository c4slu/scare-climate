import styled, { keyframes } from "styled-components";
import search from "../../assets/search.svg";

export const AniEntrada = keyframes`
from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AniEntradaLeft = keyframes`
  from {transform: translateX(550px);}
  to {transform: translateX(0px);}
`;

const intro = keyframes`
  0%{
    opacity: 0;
    transform: translateY(40px)
  }
  100%{
    opacity: 1;
    transform: translateY(0)
  }
`;
const finger = keyframes`
	0%{
    opacity: 1
	}100%{
    opacity: 0;
    transform: translateY(20px)
	}
`;

export const Mouse = styled.div`
  position: absolute;
  width: 22px;
  height: 48px;
  bottom: 40px;
  left: 50%;
  margin-left: -12px;
  border-radius: 15px;
  border: 2px solid #888;
  animation: ${intro} 1s;

  @media (max-width: 768px) {
    bottom: 50px;
  }
`;
export const Scroll = styled.div`
  display: block;
  width: 3px;
  height: 3px;
  margin: 6px auto;
  border-radius: 4px;
  background: #888;
  animation: ${finger} 1s infinite;
`;

export const ContainerSearch = styled.div`
  border-radius: 0px 0px 40px 40px;
  width: 100vw;
  height: 75vh;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 399px;
    height: 136px;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    background: ${(props) => props.theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${AniEntrada} 1s ease-in-out forwards;

    @media (max-width: 768px) {
      display: flex;

      font-size: 2.5rem;
      line-height: 38px;
      text-align: center;
      align-items: center;
      justify-content: center;

      margin: 30px 0;
      width: 100%;
      height: 100px;
    }
  }

  h6 {
    width: 409px;
    height: 80px;
    /* Headline/H6 */
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.white};
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    animation: ${AniEntrada} 1.5s ease-in-out forwards;

    @media (max-width: 568px) {
      font-size: 1rem;
      width: 100%;
    }
  }
`;

export const InputContainer = styled.div`
  margin: 0px 0 20px 90px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 10vh;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  input {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 416px;
    height: 40px;
    padding-left: 3rem;
    background: url(${search}) no-repeat left center;
    background-size: 6%;
    background-position: 15px 50%;
    background-color: white;
    border: none;
    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }

    @media (max-width: 768px) {
      margin: 0;
      width: 85%;
      background-size: 10%;
    }
  }
  button {
    flex: 1;
    text-align: center;
    height: 40px;
    width: 40px;
    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["black"]};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border: none;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme["green-medium"]};
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s linear;
  nav {
    display: flex;
    gap: 0.5rem;
    margin: 30px 50px;

    @media (max-width: 768px) {
      margin: 10px 25px;
    }
  }

  img {
    margin: 30px 90px;
    filter: ${(props) => props.theme.filter};

    @media (max-width: 768px) {
      margin: 10px 25px;
    }
  }

  a {
    width: 3rem;
    height: 2rem;
    margin: 10px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme["white"]};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    @media (max-width: 768px) {
      margin: 0px 25px;
    }

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
    background: ${(props) => props.theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.5rem;
    margin: 2rem 0rem;

    @media (max-width: 768px) {
      margin: 0;
      top: 0;
    }
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

  @media (max-width: 768px) {
    width: 100vw;
  }

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
    width: 23vw;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
      width: 100%;
    }
    /* margin-bottom: 5px; */
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
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
  animation: ${intro} 1s;
  transition: all 0.65s ease;

  &:hover {
    box-shadow: 0 40px 130px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 768px) {
    width: 75%;
    padding: 3rem;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 308px;
  margin: 50px 90px 20px 90px;

  @media (max-width: 768px) {
    margin: 50px 0 0 0;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    text-align: center;

    height: 75%;
  }

  img {
    height: 100%;
    animation: ${AniEntradaLeft} 1s ease-in-out forwards;
    @media (max-width: 768px) {
      position: absolute;
      top: 5rem;
      height: 140px;
      overflowy: hidden;
      margin: 10px;
    }
  }
`;
