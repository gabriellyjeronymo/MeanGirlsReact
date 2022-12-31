import { useState } from 'react'
import './App.css'
import { Button } from './components/button'
import { Header } from './components/header'
import { HeaderNav } from './components/headernav'
import { Product } from './components/products'

function App() {

  const produtos = [
    {
      id: '001',
      productCategory: 'calcinhas',
      productName: 'Calcinha Microfibra',
      productDesc: 'sem costura,cores neutras',
      productValue: 27.90,
      productSource:'https://raw.githubusercontent.com/gabriellyjeronymo/MeanGirls/main/src/img/p4.jpg',
    },
    {
      id: '002',
      productCategory: 'conjuntos',
      productName: 'Conjunto Calvin Klein',
      productDesc: '50% algodao,cores branco e bege',
      productValue: 89.90,
      productSource:'https://raw.githubusercontent.com/gabriellyjeronymo/MeanGirls/main/src/img/p3.jpg',
    },
    {
      id: '003',
      productCategory: 'conjuntos',
      productName: 'Conjunto Renda',
      productDesc: '50% algodao,cores branco e bege',
      productValue: 59.99,
      productSource:'https://github.com/gabriellyjeronymo/MeanGirls/blob/main/src/img/p7.jpg?raw=true',
    },
    {
      id: '004',
      productCategory: 'conjuntos',
      productName: 'Conjunto Plus Size Floral',
      productDesc: 'estampado floral',
      productValue: 88.99,
      productSource:'https://i.pinimg.com/564x/0f/5e/8b/0f5e8b68f30c96484fb179e9052724f5.jpg',
    },
    {
      id: '005',
      productCategory: 'sutia',
      productName: 'Sutiã com Bojo',
      productDesc: 'Detalhes de renda,cor:azul',
      productValue: 79.99,
      productSource:'https://github.com/gabriellyjeronymo/MeanGirls/blob/main/src/img/p10.jpg?raw=true',
    },
    {
      id: '006',
      productCategory: 'pijama',
      productName: 'Pijaminha Xadrez',
      productDesc: '100% algodao,cor:azul',
      productValue: 80.99,
      productSource:'https://i.pinimg.com/564x/c0/06/33/c00633bbb11feb358ba784b4fb893b9e.jpg',
    },
  {
      id: '007',
      productCategory: 'pijama',
      productName: 'Pijaminha de Melancia',
      productDesc: '100% algodao,cor:rosa',
      productValue: 50.00,
      productSource:'https://i.pinimg.com/564x/2a/30/57/2a305796c54764a4bdbaa7c5d3cbf829.jpg',
    },
    {
      id: '001',
      productCategory: 'calcinhas',
      productName: 'Calcinha Microfibra',
      productDesc: 'sem costura,cores neutras',
      productValue: 27.90,
      productSource:'https://raw.githubusercontent.com/gabriellyjeronymo/MeanGirls/main/src/img/p4.jpg',
    },
    {
      id: '002',
      productCategory: 'conjuntos',
      productName: 'Conjunto Calvin Klein',
      productDesc: '50% algodao,cores branco e bege',
      productValue: 89.90,
      productSource:'https://raw.githubusercontent.com/gabriellyjeronymo/MeanGirls/main/src/img/p3.jpg',
    },
    {
      id: '003',
      productCategory: 'conjuntos',
      productName: 'Conjunto Renda',
      productDesc: '50% algodao,cores branco e bege',
      productValue: 59.99,
      productSource:'https://github.com/gabriellyjeronymo/MeanGirls/blob/main/src/img/p7.jpg?raw=true',
    },
    {
      id: '004',
      productCategory: 'conjuntos',
      productName: 'Conjunto Plus Size Floral',
      productDesc: 'estampado floral',
      productValue: 88.99,
      productSource:'https://i.pinimg.com/564x/0f/5e/8b/0f5e8b68f30c96484fb179e9052724f5.jpg',
    },
    {
      id: '005',
      productCategory: 'sutia',
      productName: 'Sutiã com Bojo',
      productDesc: 'Detalhes de renda,cor:azul',
      productValue: 79.99,
      productSource:'https://github.com/gabriellyjeronymo/MeanGirls/blob/main/src/img/p10.jpg?raw=true',
    },
    {
      id: '006',
      productCategory: 'pijama',
      productName: 'Pijaminha Xadrez',
      productDesc: '100% algodao,cor:azul',
      productValue: 80.99,
      productSource:'https://i.pinimg.com/564x/c0/06/33/c00633bbb11feb358ba784b4fb893b9e.jpg',
    },
  {
      id: '007',
      productCategory: 'pijama',
      productName: 'Pijaminha de Melancia',
      productDesc: '100% algodao,cor:rosa',
      productValue: 50.00,
      productSource:'https://i.pinimg.com/564x/2a/30/57/2a305796c54764a4bdbaa7c5d3cbf829.jpg',
    },
  ]

  return (
    <div className="App">
      <Header />

      <HeaderNav />

      <div className='card-group my-5 d-block flex-wrap align-items-center justify-content-center'>
          {produtos.map((valor) => {
            return (<Product key={valor.id} productValue={valor.productValue} productDesc={valor.productDesc} productName={valor.productName} productSource={valor.productSource} />
            )
          })}
      </div>

    </div>
  )
}

export default App
