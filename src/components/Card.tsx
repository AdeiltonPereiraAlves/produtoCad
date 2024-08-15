"use client"

import Image from "next/image"


interface CardProps{
    nome: string
    img: string
    descricao: string
    preco: number
}


export default function Card(props: CardProps){

    return (
        <div className="flex flex-col gap-2 p-4 ">
           <h1>{props.nome}</h1>
           <Image src={props.img} alt={props.nome} width={100} height={100}/>
           <p>{props.descricao}</p>
           <h4>{props.preco}</h4>
        </div>
    )
}