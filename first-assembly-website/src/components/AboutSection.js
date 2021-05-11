import React from 'react';
import styled from 'styled-components';
const AboutSection = () => {

    return(
        <Background>
            <WelcomeStyled>
                <h2>ABOUT FIRST ASSEMBLY OF GOD</h2>
                <div className="line"></div>
            </WelcomeStyled>
            <AboutSectionStyled>
                <p>We are a church that is devoted to passionately growing in our relationship with Jesus Christ, while spreading the message of God’s hope, unconditional love, and redemption across all generations and all nations.</p>
                <p>We teach from the Word of God (the Bible) and offer multiple opportunities for you to engage and grow in your faith in Jesus Christ.  We look forward to growing and expanding our ministries and opportunities to touch lives for Jesus!</p>
                <p>Please join us on Sunday at 10:30am for our Morning Worship Service. We also meet on Wednesday at 6:30pm for our Family Night Ministries which includes a group for children, teens, and adults. We will do our best to end around 7:30pm so you are ready and refreshed for work and school. Of course you might enjoy staying a little longer to talk with friends!</p>
                <p>We’d love for you to come check us out!  If you have any further questions about our ministries, please feel free to contact the church office at (724) 658-5611 or take your time as you explore a little more on this website. We hope to see you soon!</p>
            </AboutSectionStyled>
        </Background>
    )
}

//Style

const Background = styled.div`
    background:white;
`;

const WelcomeStyled = styled.div`
    padding: 5rem 10rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    background: white;
    .line{
        height: 0.5rem;
        background: #1FA3CD;
        margin-bottom: 3rem;
        padding: 0rem 20rem;
        width: 100%;
        }

        h2{
            font-family:'Asap', sans-serif;
            padding: 5rem 15rem;
            color: Black;
            font-size: 2.5rem;
        }
`;

const AboutSectionStyled = styled.div`
    flex:1;
    padding: 0rem 15rem 0rem 15rem;
    background: white;
    p{
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
        font-weight: lighter;
        color: #5a5a5a;
    }
`;
export default AboutSection;