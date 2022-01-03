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
      productName: 'How to Build Your First Blockchain Game',
      productSubtitle: "Smart Contracts and NFT's",
      classifications: 45,
      score: 4.8,
      students: 265,
      createdBy: "Paulo Leonardo Vieira Rodrigues",
      updatedAt: "11/2021",
      whatWillLearn:[
        {text: "Building, publishing and integrating smart contracts in the Ethereum blockchain"},
        {text: "Configure and use a developemnt environment for smart contracts"},
        {text: "Fundamentals concepts about blockchain and smart contracts"},
        {text: "Create decentralized applications using React"},
        {text: "Create a game to interact with your smart contract and generate NFT's as collectable items for this game"},
      ],
      curriculum: [
        {title: "Introduction", topics: [
          {text: "Introduction"}
        ]},
        {title: "Environment", topics: [
          {text: "Blockchain"},
          {text: "Configuring node environment"},
          {text: "Integrating the Wallet to our local Blockchain"},
          {text: "Configuring our Smart Contract framework"}
        ]},
        {title: "Smart Contract", topics: [
          {text: "Building and compiling our first smart contract"},
          {text: "Robust contracts - Test! Part 1"},
          {text: "Robust contracts - Test! Part 2"},
          {text: "Smart contract deploy and interaction on the Blockchain"},
        ]},
        {title: "Blockchain Game - Game intelligence", topics: [
          {text: "Overview"},
          {text: "Creating Game Board"},
          {text: "Store with duck patterns"},
          {text: "Game Container"},
          {text: "Game intelligence"},
        ]},        
        {title: "Blockchain Game - Communicating with the Blockchain", topics: [
          {text: "Blockchain Provider"},
          {text: "Wallet interaction - Part 1"},
          {text: "Wallet interaction - Part 2"},
          {text: "Listing NFT's"},
          {text: "Mint - Building our NFT based on a Smart Contract"},
        ]}
      ],
      requirements: [
        {text: "The content is easily assimilated, even for is a beginner. However, the student will have better benefits if he/she knows basic concepts about React"},
        {text: "Basic knowledge about programming and logic"}
      ],
      instructor: {
        name: 'Paulo Leonardo Vieira Rodrigues',
        jobTitle: 'Software Architect and Software Developer',
        score: 4.6,
        ratingNumber: 87,
        studentsTotal: 462,
        courses: 3,
        avatarUrl: "https://img-b.udemycdn.com/user/200_H/22289142_294c.jpg",
        description: 'With more than 15 years of experience in the software development area, graduated in Power Systems at IFSC and MBA in Software Architecture. Currently works with architecture and software development, focused on python backend development and C# .Net Core. Passionate about Machine Learning, an area in which he developed a music recognition service and also had the pleasure of winning some awards.'        
      },
      sell: {
        price: 79.90,
        discount: 0.38,
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
        {name: 'Mauricio', stars: 4.5, comment: 'This training is the most useful I found online...Easy to understand, and love how Neal explain everythings..Also his Exam cram helped a lot...'},
        {name: 'Joemerson Santos L.', stars: 5, comment: 'The course has been good. Applauds to Neal for designing and delivering content to ensure effective learning. One improvement could have been in describing what the features of the incorrect answers represent, to increase learning and clarifying doubts in one go.'}
      ]      
    }

    return {
      props: {
        data: data,
      }, // will be passed to the page component as props
    };    
}

export default Home