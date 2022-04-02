
function mainDish(elem){
  const selec = document.querySelector(".selecionado")
  if(selec !== null){
    selec.classList.remove("selecionado");
  }
  elem.classList.add("selecionado");
  function checkbox(el){
    const check = document.querySelector()
  }
}


function mainDrink(elem){
  const selec = document.querySelector(".selecionadoDrink")
  if(selec !== null){
    selec.classList.remove("selecionadoDrink")
  }
  elem.classList.add("selecionadoDrink");
  console.log(elem)
}

function mainDessert(elem){
  const selec = document.querySelector(".selecionadoDessert")
  if(selec !== null){
    selec.classList.remove("selecionadoDessert")
  }
  elem.classList.add("selecionadoDessert");
  console.log(elem)
}

function confirmation(emem){
  const main = document.querySelector(".selecionado")
  const drink = document.querySelector(".selecionadoDrink")
  const dess = document.querySelector(".selecionadoDessert")
  if (main && drink && dess !== null){
    emem.disable = false;
  }
}


