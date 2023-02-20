import {
  ContainerSearch,
  HeaderContainer,
  InputContainer,
  ResultContainer,
  Graus,
  Desc,
  Info,
  Icon,
  Result,
  DescContainer,
  Mouse,
  Scroll,
} from "./styles";
import { NavLink } from "react-router-dom";
import { MdBrightness4 } from "react-icons/md";
import {
  BsDropletHalf,
  BsFillCloudHaze2Fill,
  BsFillCloudSunFill,
  BsWind,
  BsFillCloudHazeFill,
  BsFillCloudSnowFill,
  BsFillCloudDrizzleFill,
  BsFillCloudLightningFill,
} from "react-icons/bs";
import { AiOutlineSearch, AiOutlineCloud } from "react-icons/ai";
import logo from "../../assets/logo.png";
import snow from "../../assets/img_snow.png";

import React, { useState } from "react";
import axios from "axios";
import { IconBaseProps, IconContext } from "react-icons/lib";

interface WeatherData {
  weather: {
    description: string;
    [key: number]: string;
    main: string;
  }[];
  main: {
    humidity: number;
    temp: number;
    clouds: number;
  };
  name: string;

  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
}

export function Home() {
  const [mostrarConteudo, setMostrarConteudo] = useState(false);

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  if (weather?.weather[0].main == "Clouds") {
    var icon = <BsFillCloudHazeFill size={100} />;
  } else if (weather?.weather[0].main == "Clear") {
    var icon = <BsFillCloudSunFill size={100} />;
  } else if (weather?.weather[0].main == "Snow") {
    var icon = <BsFillCloudSnowFill size={100} />;
  } else if (weather?.weather[0].main == "Mist") {
    var icon = <BsFillCloudHaze2Fill size={100} />;
  } else if (weather?.weather[0].main == "Thunderstorm") {
    var icon = <BsFillCloudLightningFill size={100} />;
  } else if (weather?.weather[0].main == "Drizzle") {
    var icon = <BsFillCloudDrizzleFill size={100} />;
  } else {
    var icon = <BsFillCloudDrizzleFill size={100} />;
  }
  const humidity = weather?.main?.humidity ?? 0;
  const clouds = weather?.clouds.all ?? 0;

  const search = async (e: React.FormEvent) => {
    e.preventDefault();

    const apiKey = "e975c4875c5de33641496feefddb7699";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
      const response = await axios.get<WeatherData>(url);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(weather?.weather[0].main);

  const icon_humidity = (
    <BsDropletHalf color={humidity < 70 ? "#E8544B" : "#0080CD"} />
  );

  const icon_nebu =
    clouds > 50 ? (
      <BsFillCloudHaze2Fill color="#616867" />
    ) : (
      <BsFillCloudSunFill />
    );

  let temp = weather?.main.temp ?? 0;
  let tempajust = temp?.toFixed(0);

  const handleClick = () => {
    setMostrarConteudo(true);
    // Adicione a animação de loading ao botão

    // Desloque a página para a área de destino usando animação
    const minhaArea = document.querySelector("#minhaArea") ?? document.body;
    const posicao = minhaArea.getBoundingClientRect().top + window.pageYOffset;
    const deslocamento = posicao + 64; // 64 é a altura do menu de navegação
    const duracao = 800; // duração da animação em milissegundos
    const inicio = performance.now();
    const animacao = requestAnimationFrame(function animarScroll(time) {
      const tempoPassado = time - inicio;
      const progresso = tempoPassado / duracao;
      window.scrollTo(
        0,
        deslocamento * progresso + (1 - progresso) * window.pageYOffset
      );
      if (tempoPassado < duracao) {
        requestAnimationFrame(animarScroll);
      }
    });
    setMostrarConteudo(true);
  };

  return (
    <div style={{}}>
      <ContainerSearch>
        <HeaderContainer>
          <img src={logo} alt="" />
          <nav>
            <NavLink to="/">
              <MdBrightness4 size={24} />
            </NavLink>
          </nav>
        </HeaderContainer>

        <DescContainer>
          <div>
            <h1>Não seja pego desprevenido</h1>
            <h6>
              Fique por dentro das condições climáticas em tempo real com nosso
              site de previsão do tempo confiável e preciso
            </h6>
          </div>
          <img src={snow} alt="" />
        </DescContainer>

        <InputContainer>
          <form onSubmit={search}>
            <input
              type="text"
              placeholder="Pesquise aqui seu local"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              list="search"
              onSubmit={handleClick}
            />
            <datalist id="search">
              <option value="São Paulo" />
              <option value="Bahia" />
              <option value="Rio de Janeiro" />
              <option value="Sergipe" />
            </datalist>
            <button onClick={handleClick} type="submit">
              <AiOutlineSearch />
            </button>
          </form>
        </InputContainer>
      </ContainerSearch>
      {mostrarConteudo && (
        <ResultContainer id="minhaArea">
          <Mouse>
            <Scroll></Scroll>
          </Mouse>
          {weather && (
            <div>
              <h1>CONDIÇÕES ATUAIS</h1>
              <Result>
                <Desc>
                  <Icon>$[{icon}]</Icon>
                  <h3>{weather.name}</h3>
                  <Graus>
                    {tempajust} <span> °C</span>
                  </Graus>
                  <p>{weather?.weather[0].description.toUpperCase()}</p>
                  <Info>
                    <ul>
                      <li>
                        Velocidade do vento:{" "}
                        <span>
                          <BsWind /> {weather.wind.speed} MPH{" "}
                        </span>
                      </li>
                      <li>
                        Umidade:{" "}
                        <span>
                          {" "}
                          {icon_humidity} {humidity}%
                        </span>
                      </li>
                      <li>
                        Nebulosidade:
                        <span>
                          {icon_nebu} {weather.clouds.all} %
                        </span>
                      </li>
                    </ul>
                  </Info>
                </Desc>
              </Result>
            </div>
          )}
        </ResultContainer>
      )}
      {/* <Blur></Blur> */}
    </div>
  );
}
