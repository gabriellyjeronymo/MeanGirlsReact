import React, { useState } from "react";
import './index.css';

type propsProduct = {
    productName: string;
    productValue: number;
    productSource: string;
    productDesc: string;
}

export const Product = ({ productName, productValue, productSource, productDesc }: propsProduct) => {

    const [reacao, setreacao] = useState(true);
    const carrinho = useState(0);


    function gostei () {
        setreacao (true)
        alert('o produto foi removido dos favoritos')        
    };

    function naogostei () {
        setreacao (false)
        alert('o produto foi adicionado nos favoritos')
    };

    return (
        <div className="card p-2 my-3">

            <div className="card-body">
                <img src={productSource}></img>
            </div>
            
            <div className="card-desc">
                <h4 className="card-title">{productName}</h4>
                <h5>R$ {productValue}</h5>
                <p className="card-text">{productDesc}</p>
            </div>

            <div className="acoes d-flex align-items-center justify-content-center"> 
            
            <div className="reacoes d-flex mx-auto px-5">
            {
                reacao ? (
                     <svg onClick={naogostei} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M11.434 1a4.604 4.604 0 00-3.226 1.322L8 2.527l-.208-.205A4.589 4.589 0 004.566 1 4.589 4.589 0 001.34 2.322 4.5 4.5 0 000 5.522a4.5 4.5 0 001.34 3.2l6.133 6.061a.75.75 0 001.054 0l6.132-6.06a4.52 4.52 0 00.992-1.467 4.482 4.482 0 00-.992-4.934A4.604 4.604 0 0011.433 1z"></path></g></svg>                    ) : (
                    <svg onClick={gostei} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path fill="#ff0000" d="M11.434 1a4.604 4.604 0 00-3.226 1.322L8 2.527l-.208-.205A4.589 4.589 0 004.566 1 4.589 4.589 0 001.34 2.322 4.5 4.5 0 000 5.522a4.5 4.5 0 001.34 3.2l6.133 6.061a.75.75 0 001.054 0l6.132-6.06a4.52 4.52 0 00.992-1.467 4.482 4.482 0 00-.992-4.934A4.604 4.604 0 0011.433 1z"></path></g></svg>                    )
            }
            </div>

            <div className="carrinho d-flex mx-auto px-5">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path d="M3.48921 10.4243C3.23103 8.61696 4.63341 7 6.45906 7H17.541C19.3667 7 20.769 8.61696 20.5109 10.4243L19.4906 17.5657C19.2091 19.5363 17.5215 21 15.5308 21H8.46921C6.47861 21 4.79093 19.5363 4.50941 17.5657L3.48921 10.4243Z" stroke="#000000" stroke-width="2"></path> <path d="M17 7L16.1056 5.21117C15.428 3.85602 14.043 3 12.5279 3H11.4721C9.95705 3 8.57215 3.8557 7.89458 5.21084L7 7" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </div>
            
            </div>

            

        </div>
    )
}