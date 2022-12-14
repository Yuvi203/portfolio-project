import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from "../styles/Layouts"
import Title from "../Components/Title"
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import ServiceCard from './ServiceCard';


const ServiceSection = () => {
  return (
    <InnerLayout>
        <Container>
            <Title title={'Services'} span={'services'}/>
            <div className='services'>
            <ServiceCard 
             image={design} 
             title={'Web Design'} 
             paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
             />
             <div className='mid-card'>
             <ServiceCard 
             image={intelligence} 
             title={'Artificial Intelligence'} 
             paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
             />
             </div>
             <ServiceCard 
             image={gamedev} 
             title={'Game Development'} 
             paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
             />

            </div>

        </Container>

    </InnerLayout>
  )
}

export default ServiceSection

const Container = styled.div`
    .services{
        margin-top:5rem;
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap:1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns:repeat(2, 1fr);
        }
        @media screen and (max-width:1000px){
            grid-template-columns:repeat(1, fr);
        }
    }
`;

