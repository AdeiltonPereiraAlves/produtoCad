"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import useProduto from "@/app/hooks/useProduto";
import Image from "next/image";
import Card from "../Card";
export default function Form() {
    const [nome, setNome] = useState<string>('');
    const [img, setImg] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [preco, setPreco] = useState<any>()

    const { criarProduto, produt } = useProduto()
    function cadastrarProduto() {
        const p = {
            nome,
            img,
            descricao,
            preco
        }
        criarProduto(p)
    }

    return (
        <div className=" ">
            <div className="flex flex-wrap gap-4">
                {produt.map((p: any) => (
                    <ul key={p.id} className="flex flex-col">
                       <Card nome={p.nome} img={p.img} descricao={p.descricao} preco={p.preco}  />
                    </ul>
                ))}
            </div>

            <input type="text" value={nome} placeholder="Nome do produto..." onChange={e => setNome(e.target.value)} />
            <input type="text" value={img} placeholder="Imagem do produto..." onChange={e => setImg(e.target.value)} />
            <input type="text" value={descricao} placeholder="Descrição do produto..." onChange={e => setDescricao(e.target.value)} />
            <input type="number" value={preco} placeholder="Valor do produto..." onChange={e => setPreco(+e.target.value)} />
            <Button variant="default" onClick={cadastrarProduto}>Cadastrar</Button>

        </div>
    )
}