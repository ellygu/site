const monstros =[
    {
       id:1,
       nome:'osvaldo',
       altura:2,
       habilidades:'muito generoso,carinhoso ,honesto etc',
       foto:'https://robohash.org/Osvaldo'
  
    },
    {
      id:2,
      nome:'MegaMente',
      altura:3,
      habilidades:'muito generoso,carinhoso ,honesto etc',
      foto:'https://robohash.org/MegaMente',
  
   } ,
   {
      id:3,
      nome:'Devinho',
      altura:4,
      habilidades:'muito generoso,carinhoso ,honesto etc',
      foto:'https://robohash.org/Devinho',
  
   },
   {
      id:4,
      nome:'Abacate',
      altura:5,
       habilidades:'muito generoso,carinhoso ,honesto etc',
      foto:'https://robohash.org/Abacate',
  
   }  
   
  
  
      
  ]


const secao= document.querySelector('.monstros')
const botao=document.querySelector('.btn')

botao.addEventListener('click',() => {
    document.documentElement.classList.toggle('dark')

            
        
    
})

const todosOsMonstros=monstros.map(monstro=>{
   return`<div>
    <p>nome:${monstro.nome}</p>
     <p>altura:${monstro.altura}</p>
     <p>habilidades:${monstro.habilidades}</p>
     <img src="${monstro.foto}">
   </div>`

})

secao.innerHTML=todosOsMonstros