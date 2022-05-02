import React from "react";

import  {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction} from './styles';

export function HighlightCard() {
    return(
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up" />
            </Header>
            <Footer>
                <Amount>R$ 17.400</Amount>
                <LastTransaction>Última entrada dia 01 de Maio de 2022</LastTransaction>
            </Footer>
            
        </Container>
    )
}
