import { useEffect, useState } from "react"

interface Produto{
    id?: number
    nome: string
    img: string
    descricao: string
    preco: number
}


export default  function usePoduto(){
    const [produt, setProduto] = useState<Produto[]>([])
    useEffect(() => {
        carregarProdutos()
    },[])


   async function criarProduto(produto:Produto){
      
      const res = await fetch("http://localhost:3001/api/produto",{
        method: 'POST',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify(produto)

      });
      if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      
      setProduto([...produt,data])

   }
   async function carregarProdutos() {
    const res = await fetch("http://localhost:3001/api/produtos");
      if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      
      setProduto(data)
    
   }
   return{
     criarProduto,
     produt
   }


}