import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import TopContainer from '../components/TopContainer'
import BottomContainer from "../components/BottomContainer"
import TopBar from "../components/TopBar"
import HideOnScroll from "../components/ScrollControl/hide"
import BuyBar from "../components/BuyBar"
import { styled } from '@mui/material/styles';

const Home = (props) => {

  const {productName} = props.data
  return (
      <>
        <HideOnScroll {...props}> 
          <TopBar {...props} />
        </HideOnScroll>
          <BuyBar {...props} />
        <Box sx={{py:"56px"}}>
          <TopContainer {...props.data}></TopContainer>
          <BottomContainer  {...props.data}></BottomContainer>         
        </Box>

      </>      
  );
}

export async function getStaticProps() {
  const data = 
    {
      version: 'v1.1',
      productName: 'Como criar seu primeiro Blockchain Game',
      productSubtitle: "Smart Contracts e NFT's",
      classifications: 45,
      score: 4.8,
      students: 265,
      createdBy: "Paulo Leonardo Vieira Rodrigues",
      updatedAt: "11/2021",
      description: "texto",
      whatWillLearn:[
        {text: "Criar, publicar e interagir com contratos inteligentes na blockchain do Ethereum"},
        {text: "Configurar e utilizar um ambiente de desenvolvimento para Smart Contracts"},
        {text: "Conceitos fundamentais sobre blockchain e smart contrats"},
        {text: "Criar Aplicativos descentralizados utilizando React"},
        {text: "Criar um jogo que interage com seu smart contract e gera NFT's como itens colecionáveis desse jogo"},
      ],
      curriculum: [
        {title: "Introdução", topics: [
          {text: "Introdução"}
        ]},
        {title: "Ambiente", topics: [
          {text: "Blockchain"},
          {text: "Configuração do ambiente node"},
          {text: "Integrando uma Wallet a nossa Blockchain local"},
          {text: "Configuração do framework de desenvolvimento para Smart Contracts"}
        ]},
        {title: "Smart Contract", topics: [
          {text: "Compilando nosso primeiro smart contract"},
          {text: "Contratos robustos - Testes! Parte 1"},
          {text: "Contratos robustos - Testes! Parte 2"},
          {text: "Deploy do smart contract e interação na Blockchain"},
        ]},
        {title: "Blockchain Game - Inteligência do jogo", topics: [
          {text: "Visão Geral"},
          {text: "Criação do Game Board"},
          {text: "Store com duck patterns"},
          {text: "Game Container"},
          {text: "Inteligência do Jogo"},
        ]},        
        {title: "Blockchain Game - Comunicação com a Blockchain", topics: [
          {text: "Blockchain Provider"},
          {text: "Interação com a Wallet - Parte 1"},
          {text: "Interação com a Wallet - Parte 2"},
          {text: "Listagem das NFT's"},
          {text: "Mint - Criando a nossa NFT com base no Smart Contract"},
        ]}
      ],
      requirements: [
        {text: "O conteúdo é de fácil assimilação, mesmo para quem é iniciante. Porém, o aluno terá melhor proveito se conhecer conceitos fundamentais de React"},
        {text: "Conhecimento básico de lógica de programação"}
      ],
      instructor: {
        name: 'Paulo Leonardo Vieira Rodrigues',
        jobTitle: 'Software Architect and Software Developer',
        score: 4.6,
        ratingNumber: 87,
        studentsTotal: 462,
        courses: 3,
        avatarUrl: "https://img-b.udemycdn.com/user/200_H/22289142_294c.jpg",
        description: 'Como mais de 15 anos de experiência na área de desenvolvimento de software, formado em Sistemas de Energia pelo IFSC e com MBA em Arquitetura de Software. Atualmente trabalha com Arquitetura e desenvolvimento de software, focado em desenvolvimento backend python e C# .Net Core. Apaixonado por Machine Learning, área na qual desenvolveu um serviço de reconhecimento de ritmos musicais e também teve o prazer de ganhar algumas premiações.'        
      },
      sell: {
        price: 129.90,
        discount: 0.61585,
        payoutUrl: "https://pay.kiwify.com.br/gmzGmbI"
      },
      studentFeedBack: {
        oneStar: 2,
        twoStar: 2,
        threeStar: 10,
        fourStar: 29,
        fiveStar: 57
      },
      testimonial: [
        {name: 'Mauricio', stars: 4.5, comment: 'Sim perfeito'},
        {name: 'Joemerson Santos L.', stars: 5, comment: 'Excelente conteúdo'}
      ]      
    }

    return {
      props: {
        data: data,
      }, // will be passed to the page component as props
    };    
}

export default Home