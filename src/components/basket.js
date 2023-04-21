import React from "react";
import styled from "styled-components";

const Basket = () => {
    return (
        <BasketContainer>
            <BasketTitle>Shopping Basket</BasketTitle>
            <BasketButton>Checkhout</BasketButton>
            <BasketTable>
                <BashetHeader>
                    <h4>Item</h4>
                    <h4>Quantity</h4>
                    <h4>Price</h4>
                </BashetHeader>
                <BasketHeaderLine />

                <BashetHeader>
                    Cart Items
                </BashetHeader>
                <BasketHeaderLine />

                <BasketButton>Clear</BasketButton>
                <BasketTotal>Total: €0</BasketTotal>

            </BasketTable>
        </BasketContainer>
    )
}

export default Basket;

const BasketContainer = styled.div`
display: grid;
padding: 20px;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 0.25fr 1fr 0.25fr;
`;

const BasketTable = styled.div`
grid-column: 1/span 3;
grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
column-gap: 20px;
padding-left: 10px;
`;

const BashetHeader = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
`;

const BasketHeaderLine = styled.hr`
margin-bottom: 20px;
border: 1px solid gray;
`;

const BasketTitle = styled.h2`
grid-column: 1/span 2;
padding-bottom: 20px;
`;

const BasketQty = styled.h3`
font-size: 18px;
font-weight: bold;
display: grid;
grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.h3`
font-size: 20px;
font-weight: bold;
`;

const BasketTotal = styled.h2`
justify-self: end;
`;

const BasketButton = styled.button`
border-radius: 8px;
height: 40px;
width: 100px;
`;