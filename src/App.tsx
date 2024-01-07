import './App.scss';
import foto from './assets/foto.webp';
import reactlogo from './assets/react.svg';
import dotnetlogo from './assets/dotnet.svg';
import nodejslogo from './assets/nodejs.svg';
import tslogo from './assets/typescript.svg';
import { Book2, MapPin, BrandLinkedin } from "tabler-icons-react";
import { Accordion } from "@mantine/core";

function App() {
  return (
    <div className="main">
      <header>
        <img src={foto} alt="Foto de Diogo Zago" />
        <div className="info">
        <h1>Olá, eu sou Diogo Zago</h1>
          <div className="icon">
            <Book2 size={22} color="white"/>
            <p>Análise e Desenvolvimento de Sistemas, IFSP</p>
          </div>
          <div className="icon">
            <MapPin size={22} color="white"/>
            <p>Novo Horizonte - SP</p>
          </div>
          <div className="icon">
            <BrandLinkedin size={22} color="white"/>
            <a href="https://www.linkedin.com/in/diogo-zago" target="_blank">www.linkedin.com/in/diogo-zago</a>
          </div>
        </div>
      </header>
      <section>
        <Accordion variant="separated" w={"90%"}>
          <Accordion.Item value="Skills" style={{ background: "#55569E", border: "none" }}>
            <Accordion.Control style={{ color: "white" }}>Skills</Accordion.Control>
            <Accordion.Panel style={{ color: "white" }}>
              <div className="skills">
                <div className="profissionais">
                  <h4>Habilidades Profissionais:</h4>
                  <div className="logos">
                    <img src={nodejslogo} alt="NodeJS" />
                    <img src={tslogo} alt="Typescript" />
                    <img src={reactlogo} alt="React" />
                    <img src={dotnetlogo} alt=".Net" />
                  </div>
                </div>
                <div className="pessoais">
                  <h4>Habilidades Pessoais:</h4>
                  <ul>
                    <li>Proatividade</li>
                    <li>Comunicação</li>
                    <li>Trabalho em Equipe</li>
                    <li>Flexibilidade</li>
                    <li>Organização</li>
                  </ul>
                  </div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Educação" style={{ background: "#55569E", border: "none" }}>
            <Accordion.Control style={{ color: "white" }}>Educação</Accordion.Control>
            <Accordion.Panel style={{ color: "white" }}>
              <ul className="lista">
                <li>Técnico em Desenvolvimento de Sistemas - ETEC</li>
                <li>Cursando Análise e Desenvolvimento de Sistemas - IFSP</li>
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Experiência Profissional" style={{ background: "#55569E", border: "none" }}>
            <Accordion.Control style={{ color: "white" }}>Experiência Profissional</Accordion.Control>
            <Accordion.Panel style={{ color: "white" }}>
              <ul className="lista">
                <li>Estágio Gestão de Frotas - Prefeitura de Novo Horizonte (2022 - Atual)</li>
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  )
}

export default App
