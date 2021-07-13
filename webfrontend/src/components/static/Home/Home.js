import React from 'react';

function Home() { 
    return(
        <div>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                              <TopLine>Top Line</TopLine>
                              <Heading>Heading</Heading>
                               <Subtitle>Subtitle</Subtitle> 
                               <BtnWrap>
                                   <Button>Get Started</Button>
                               </BtnWrap>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default Home;