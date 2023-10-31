document.addEventListener('keyup', e=>{
    if(e.target.matches("#buscador")){
      document.querySelectorAll(".pokemon").forEach(poke=>{
        poke.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?poke.classList.remove("filtro")
        :poke.classList.add("filtro")
      })
    }
  })