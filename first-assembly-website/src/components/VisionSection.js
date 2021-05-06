import React from 'react';
import styled from 'styled-components';

const VisionSection = () => {
    return(
       <VisionSectionStyled>
           <div className="vision-header"><h2>OUR VISION</h2></div>
           <div className="line"></div>
           <p>“Therefore go make disciples of all nations, baptizing them in the Name of the Father, and of the Son, and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you, always, to the end of the age.” -Matthew 28:19-20 NIV</p>
       </VisionSectionStyled> 
    )
}

//Style

const VisionSectionStyled = styled.div`
    padding: 5rem 10rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    background: white;
    height: 50vh;
    .line{
        height: 0.5rem;
        background: #1FA3CD;
        margin-bottom: 3rem;
        width: 10%;
        padding-top: 0rem;
        margin-left: auto;
        margin-right: auto;
        }

        h2{
            font-family:'Asap', sans-serif;
            padding: 2rem 26rem;
            text-align: center;
            padding-bottom: 2rem;
            color: black;
            font-size: 2.5rem;
        }

        p{
            text-align: center;
            font-weight: light;
            font-size: 1.5rem;
            overflow: hidden;
            padding-bottom: .5rem;
            padding-top: 0.5rem;
        }
`;

export default VisionSection;