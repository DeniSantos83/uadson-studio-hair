import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import {
  MapPin,
  Menu,
  Phone,
  Play,
  Scissors,
  Send,
  Sparkles,
  Star,
  X,
  Camera,
  Award,
  Heart,
  BadgeCheck,
  ExternalLink,
} from 'lucide-react';

import './styles.css';

import logoOriginal from './assets/logo-original.png';
import perfil from './assets/perfil.png';
import uadsonSocial from './assets/uadson-social.png';

const WHATSAPP_NUMBER = '5579991477756';
const INSTAGRAM_URL = 'https://www.instagram.com/uadsontolentinooficial/';
const MAPS_URL = 'https://maps.app.goo.gl/gj3fUpsWgK95sgAA7';

function whatsappLink(text = 'Olá, Uadson! Gostaria de agendar um horário.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const specialties = [
  {
    icon: <Scissors size={22} />,
    title: 'Cortes personalizados',
    text: 'Cortes femininos e masculinos pensados para valorizar seu estilo, rosto e rotina.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Colorimetria e mechas',
    text: 'Técnicas de cor, iluminação e transformação com avaliação profissional.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Tratamentos capilares',
    text: 'Hidratação, botox, selagem, terapia capilar e cuidados para recuperar a saúde dos fios.',
  },
  {
    icon: <BadgeCheck size={22} />,
    title: 'Visagismo e consultoria',
    text: 'Orientação estética para alinhar cabelo, identidade, beleza e personalidade.',
  },
];

const priceList = [
  { name: 'Corte feminino', price: 'R$ 80,00' },
  { name: 'Corte masculino', price: 'R$ 50,00' },
  { name: 'Sobrancelhas', price: 'R$ 40,00' },
  { name: 'Escova', price: 'a partir de R$ 40,00' },
  { name: 'Hidratação', price: 'a partir de R$ 60,00' },
  { name: 'Terapia capilar', price: 'a partir de R$ 70,00' },
  { name: 'Argila', price: 'a partir de R$ 70,00' },
  { name: 'Aplicações', price: 'a partir de R$ 60,00' },
  { name: 'Tratamento', price: 'a partir de R$ 120,00' },
  { name: 'Coloração', price: 'a partir de R$ 140,00' },
  { name: 'Botox capilar', price: 'a partir de R$ 200,00' },
  { name: 'Selagem', price: 'a partir de R$ 240,00' },
  { name: 'Mechas', price: 'a partir de R$ 280,00' },
  { name: 'Escalda pés', price: 'R$ 20,00' },
];

const comboList = [
  { name: 'Coloração + hidratação e finalização', price: 'a partir de R$ 199,99' },
  { name: 'Corte + hidratação e finalização', price: 'a partir de R$ 179,99' },
  { name: 'Escova + hidratação', price: 'a partir de R$ 89,99' },
  { name: 'Selagem ou botox', price: 'a partir de R$ 199,99' },
];

// Lista dos vídeos da galeria.
// src = caminho do vídeo dentro da pasta public/videos
// cover = thumbnail/capa do vídeo dentro da pasta public/thumbs
const videos = [
  {
    title: 'Transformação 1',
    src: '/videos/video-1.mp4',
    cover: '/thumbs/thumb-1.jpg',
  },
  {
    title: 'Transformação 2',
    src: '/videos/video-2.mp4',
    cover: '/thumbs/thumb-2.jpg',
  },
  {
    title: 'Transformação 3',
    src: '/videos/video-3.mp4',
    cover: '/thumbs/thumb-3.jpg',
  },
  {
    title: 'Transformação 4',
    src: '/videos/video-4.mp4',
    cover: '/thumbs/thumb-4.jpg',
  },
  {
    title: 'Transformação 5',
    src: '/videos/video-5.mp4',
    cover: '/thumbs/thumb-5.jpg',
  },
  {
    title: 'Transformação 6',
    src: '/videos/video-6.mp4',
    cover: '/thumbs/thumb-6.jpg',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    servico: '',
    data: '',
    horario: '',
  });

  function updateForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function sendForm(event) {
    event.preventDefault();

    const message = `Olá, Uadson! Quero agendar um horário.

Nome: ${form.nome}
Telefone: ${form.telefone}
Serviço desejado: ${form.servico}
Data desejada: ${form.data || 'A combinar'}
Horário desejado: ${form.horario || 'A combinar'}`;

    window.open(whatsappLink(message), '_blank');
  }

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Especialidades', id: 'especialidades' },
    { label: 'Valores', id: 'valores' },
    { label: 'Galeria', id: 'galeria' },
    { label: 'Localização', id: 'localizacao' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <>
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="Uadson Tolentino Studio Hair">
          <img src={logoOriginal} alt="Logo Uadson Tolentino Studio Hair" />
        </a>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}

          <a className="navCta" href={whatsappLink()} target="_blank" rel="noreferrer">
            Agendar
          </a>
        </nav>

        <button
          className="menuBtn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="heroText">
            <span className="eyebrow">
              <Sparkles size={16} /> Studio Hair em Aracaju-SE
            </span>

            <h1>Beleza, técnica e identidade em cada transformação.</h1>

            <p>
              Mais de 20 anos de experiência em cabelos, colorimetria, visagismo
              e beleza personalizada para realçar sua melhor versão.
            </p>

            <div className="heroBadges">
              <span>
                <Award size={16} /> +20 anos de experiência
              </span>
              <span>
                <Star size={16} /> Colorimetria profissional
              </span>
              <span>
                <MapPin size={16} /> Atendimento em Aracaju
              </span>
            </div>

            <div className="heroActions">
              <a className="primaryBtn" href={whatsappLink()} target="_blank" rel="noreferrer">
                <Phone size={18} /> Agendar horário
              </a>

              <a className="secondaryBtn" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Camera size={18} /> Ver Instagram
              </a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroImage">
              <img src={uadsonSocial} alt="Uadson Tolentino" />
            </div>

            <div className="floatingCard">
              <strong>Atendimento personalizado</strong>
              <span>Corte, cor, tratamento e finalização com avaliação profissional.</span>
            </div>
          </div>
        </section>

        <section id="sobre" className="section about">
          <div className="portrait">
            <img src={perfil} alt="Uadson Tolentino" />
          </div>

          <div className="aboutText">
            <span className="eyebrow">
              <Star size={16} /> Sobre o profissional
            </span>

            <h2>Uma trajetória construída com estudo, dedicação e paixão por cabelos.</h2>

            <p>
              Nascido em Itapitanga, Bahia, em 1979, Uadson Tolentino iniciou sua
              jornada profissional em Salvador aos 18 anos, até descobrir sua verdadeira
              vocação: a arte de transformar cabelos.
            </p>

            <p>
              Com mais de 20 anos de experiência, construiu uma carreira sólida em
              salões renomados de Salvador e Aracaju, com especializações em cidades
              como São Paulo, Rio de Janeiro, Maceió, Recife, Fortaleza e Curitiba.
            </p>

            <div className="aboutHighlights">
              <span>Wella</span>
              <span>L&apos;Oréal</span>
              <span>Senscience</span>
              <span>Joico</span>
            </div>
          </div>
        </section>

        <section id="especialidades" className="section specialtiesSection">
          <div className="sectionHead">
            <span className="eyebrow">
              <Scissors size={16} /> Especialidades
            </span>

            <h2>Serviços pensados para valorizar sua beleza de forma única.</h2>

            <p>
              Cada atendimento é feito com avaliação profissional, escuta, técnica
              e cuidado com a saúde dos fios.
            </p>
          </div>

          <div className="specialtyGrid">
            {specialties.map((item) => (
              <article className="specialtyCard" key={item.title}>
                <div className="specialtyIcon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="valores" className="section prices">
          <div className="sectionHead">
            <span className="eyebrow">
              <Sparkles size={16} /> Valores
            </span>

            <h2>Tabela de serviços e combos especiais.</h2>

            <p>
              Os valores podem variar conforme avaliação, tamanho do cabelo,
              técnica utilizada e necessidade de tratamento.
            </p>
          </div>

          <div className="priceArea">
            <div className="priceCard">
              <h3>Tabela de serviços</h3>

              <div className="priceList">
                {priceList.map((item) => (
                  <div className="priceRow" key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="comboCard">
              <div>
                <span className="eyebrow light">
                  <Heart size={16} /> Combos
                </span>

                <h3>Experiências completas para sair pronta.</h3>

                <p>
                  Opções ideais para quem deseja unir cuidado, transformação
                  e finalização em um único atendimento.
                </p>
              </div>

              <div className="comboList">
                {comboList.map((item) => (
                  <div className="comboRow" key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>

              <a className="primaryBtn priceBtn" href={whatsappLink()} target="_blank" rel="noreferrer">
                <Phone size={18} /> Consultar horário
              </a>
            </div>
          </div>
        </section>

        <section id="galeria" className="section gallerySection">
          <div className="sectionHead">
            <span className="eyebrow">
              <Play size={16} /> Galeria
            </span>

            <h2>Transformações, bastidores e momentos do Studio.</h2>

            <p>
              Veja registros em formato vertical, ideal para acompanhar resultados,
              inspirações e detalhes do trabalho.
            </p>
          </div>

          <div className="videoGrid">
            {videos.map((video) => (
              <button
                className="videoCard"
                key={video.title}
                onClick={() => setActiveVideo(video)}
                aria-label={`Assistir ${video.title}`}
              >
                <img src={video.cover} alt={video.title} />

                <span>
                  <Play size={18} /> Assistir
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="localizacao" className="section location">
          <div className="locationText">
            <span className="eyebrow">
              <MapPin size={16} /> Localização
            </span>

            <h2>Atendimento em Aracaju-SE.</h2>

            <p>
              Clique no botão abaixo para abrir a localização diretamente no Google Maps
              e traçar a melhor rota até o Studio.
            </p>

            <a className="primaryBtn" href={MAPS_URL} target="_blank" rel="noreferrer">
              <MapPin size={18} /> Abrir no Google Maps
            </a>
          </div>

          <div className="locationCard">
            <MapPin size={34} />

            <h3>Uadson Tolentino Studio Hair</h3>

            <p>
              Atendimento com hora marcada em ambiente preparado para receber você
              com conforto, cuidado e atenção.
            </p>

            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              Ver rota <ExternalLink size={16} />
            </a>
          </div>
        </section>

        <section id="contato" className="section contact">
          <div className="contactText">
            <span className="eyebrow light">
              <Send size={16} /> Agendamento
            </span>

            <h2>Conte o que você deseja e envie direto para o WhatsApp.</h2>

            <p>
              Preencha as informações abaixo para facilitar o atendimento
              e agilizar seu agendamento.
            </p>
          </div>

          <form onSubmit={sendForm} className="contactForm">
            <input
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={updateForm}
              required
            />

            <input
              name="telefone"
              placeholder="Seu telefone"
              value={form.telefone}
              onChange={updateForm}
              required
            />

            <input
              name="servico"
              placeholder="Qual serviço deseja?"
              value={form.servico}
              onChange={updateForm}
              required
            />

            <div className="formRow">
              <input
                name="data"
                type="date"
                value={form.data}
                onChange={updateForm}
              />

              <input
                name="horario"
                type="time"
                value={form.horario}
                onChange={updateForm}
              />
            </div>

            <button className="primaryBtn" type="submit">
              <Send size={18} /> Enviar para WhatsApp
            </button>
          </form>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Uadson Tolentino Studio Hair · Site por deniCreativeStudio
      </footer>

      <a
        className="floatWhats"
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <Phone />
      </a>

      {activeVideo && (
        <div className="modal" onClick={() => setActiveVideo(null)}>
          <button className="closeModal" aria-label="Fechar vídeo">
            <X />
          </button>

          <video src={activeVideo.src} controls autoPlay />
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);