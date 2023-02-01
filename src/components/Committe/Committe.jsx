import React, { useEffect } from "react";
import ball from "../../assets/ball.svg";
import wave from "../../assets/wave.svg";
import styled from "styled-components";
import wave2 from "../../assets/wavenobg.svg";
const CommitteContainer = styled.div`
  background-color: black;
  padding: 30px;
  background-image: url("${wave2}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  text-align: center;
  text-shadow: 5px 2px #7F7FD5;
  /* color: #4775f4; */
  color: white;
  font-size: 5vw;
  @media (max-width: 786px) {
    font-size: 10vw;
  }
`;

const Card = styled.div`
  border: 0.6px solid gray;
  /* text-align: center; */
  padding: 1rem;
  
  border-radius: 10px;
  /* margin: 2rem 0; */
  color: black;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  @media (max-width: 786px) {
    /* font-size: 10vw; */
    text-align: center;
  }
`;
const Cardname = styled.h2`
font-weight: bolder;

  @media (max-width: 435px) {
    font-size: medium;
  }
`;
const Cardposition = styled.h4`
  color:  #4f66ff;
  font-weight: bolder;
  /* color: #CF1392; */
`;
const Container = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  align-items: flex-start; */
  padding: 2em;

  /* flex-direction: column; */

  @media (max-width: 786px) {
    /* flex-direction: column; */
  }
`;

const Heading = styled.h1`
  color: white;
  /* color: #CF1392; */

margin: 1rem 0;
@media (max-width: 786px) {
     text-align: center;
  }
`
const Head2 = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`
function Committe() {
  const chiefPatron = [
    {
      name: "Dr.N.M.Veeraiyan",
      position: "Founder & President SIMATS Patrons",
    },
    {
      name: "Dr. Saveetha Rajesh",
      position: "Director, SMCH",
    },
    {
      name: "Dr. S. Rajesh,",
      position: "Director, SEC",
    },
  ];
  const coPatron = [
    {
      name: "Dr. N. Duraipandian,",
      position: "Principal, SEC",
    },
    {
      name: "Dr. R. Senthil Kumar,",
      position: "Vice Principal, SEC",
    },
    {
      name: "Dr. V. Vijayachamundeewari,",
      position: "Professor & Dean",
    },
    {
      name: "Mr. C. Obed Otto,",
      position: "Dean (ICT)",
    },
  ];

  const pc =[
    {
      name:"Dr S.SasiKumar ",
      position:"Professor / CSE "
    }
    ,
    {
      name:"Dr M.VijayAnand  ",
      position:"Professor / CSE  "
    }
    ,

    {
      name:"Dr AnithaJulian ",
      position:"Professor / CSE  "
    }
    ,
    {
      name:"Dr E,Sujatha ",
      position:"Professor / CSE "
    },
    {
      name:"Dr V.Loganathan ",
      position:"Associate Professor / CSE "
    },
    {
      name:"Dr R.Ramyadevi ",
      position:"Associate Professor / CSE "
    },
    {
      name:"Mr N.V Ravindhar ",
      position:"Assistant Professor / CSE "
    },
    {
      name:"Mrs K.S.Rekha ",
      position:"Assistant Professor / CSE "
    },
    {
      name:"Mrs P.Preethi ",
      position:"Assistant Professor / CSE  "
    }
  ]

  const cc = [

    {
      name:"Dr R. Kaladevi ",
      position:"Associate Professor / CSE "
    },{
      name:"Dr V.UmaRani ",
      position:"Associate Professor / CSE"
    }
  ]
  const confercon = [
    {
      name:"Dr G.Nagappan ",
      position:"Professor &Head",
      dep:"Department of Computer Science and Engineering ",
    }
  ]
  return (
    <CommitteContainer>
      <Title data-aos="fade-up">Organizing Committe</Title>
      <Container>
        <div>
          <Heading data-aos="zoom-in">Cheif Patron</Heading>
      <Head2>
      {chiefPatron.map((data,i) => {
            return (
              <Card data-aos="fade-right" data-aos-delay={i*100}>
                <Cardname>{data.name}</Cardname>
                <Cardposition>{data.position}</Cardposition>
              </Card>
            );
          })}
      </Head2>
     
        </div>
        <div>
          <Heading data-aos="zoom-in">Co-Patrons</Heading>
          <Head2>
          {coPatron.map((data,i) => {
            return (
              <Card data-aos="fade-right" data-aos-delay={i*100}>
                <Cardname>{data.name}</Cardname>
                <Cardposition>{data.position}</Cardposition>
              </Card>
            );
          })}
          </Head2>
 
        </div>
        <div>
          <Heading data-aos="zoom-in">Program committee</Heading>
          <Head2>
          {pc.map((data,i) => {
            return (
              <Card data-aos="fade-right" data-aos-delay={i*100}>
                <Cardname>{data.name}</Cardname>
                <Cardposition>{data.position}</Cardposition>
              </Card>
            );
          })}
          </Head2>
    
        </div>
        <div>
          <Heading data-aos="zoom-in">Conference Co-ordinator</Heading>
          <Head2>
          {cc.map((data,i) => {
            return (
              <Card data-aos="fade-right" data-aos-delay={i*100}>
                <Cardname>{data.name}</Cardname>
                <Cardposition>{data.position}</Cardposition>
              </Card>
            );
          })}
          </Head2>
    
        </div>
        <div>
          <Heading data-aos="zoom-in">Conference Convener </Heading>
          <Head2>
          {confercon.map((data,i) => {
            return (
              <Card data-aos="fade-right" data-aos-delay={i*100}>
                <Cardname>{data.name}</Cardname>
                <Cardposition>{data.position}</Cardposition>
              </Card>
            );
          })}
          </Head2>
    
        </div>
      </Container>
    </CommitteContainer>
  );
}

export default Committe;
