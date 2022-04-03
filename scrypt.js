let x;
let y;
let z;
let priceMain;
let priceDrink;
let priceDessert;
let nameMain;
let nameDrink;
let nameDessert;

function mainDish(elem){
  const selec = document.querySelector(".selecionado")
  priceMain = elem.querySelector(".precoMain").innerText
  priceMain = priceMain.slice(3,-1);
  priceMain = parseFloat(priceMain.replace(/[^a-zA-Z0-9 ]/,'.'))
  console.log(priceMain);
  nameMain = elem.querySelector(".nomeMain").innerText
  console.log(nameMain)
  if(selec !== null){
    selec.classList.remove("selecionado");
  }
  elem.classList.add("selecionado");
  x = 1;
  validar()
}


function mainDrink(elem){
  const selecDrink = document.querySelector(".selecionadoDrink")
  priceMainDrink = elem.querySelector(".precoMainDrink").innerText
  priceMainDrink = priceMainDrink.slice(3,-1);
  priceMainDrink = parseFloat(priceMainDrink.replace(/[^a-zA-Z0-9 ]/,'.'))
  console.log(priceMainDrink);
  nameMainDrink = elem.querySelector(".nomeMainDrink").innerText
  console.log(nameMainDrink)
  if(selecDrink !== null){
    selecDrink.classList.remove("selecionadoDrink")
  }
  elem.classList.add("selecionadoDrink");
  console.log(elem)
  y = 1;
  validar()
}

function mainDessert(elem){
  const selecDessert = document.querySelector(".selecionadoDessert")
  priceMainDessert = elem.querySelector(".precoMainDessert").innerText
  priceMainDessert = priceMainDessert.slice(3,-1);
  priceMainDessert = parseFloat(priceMainDessert.replace(/[^a-zA-Z0-9 ]/,'.'))
  console.log(priceMainDessert);
  nameMainDessert = elem.querySelector(".nomeMainDessert").innerText
  console.log(nameMainDessert)
  if(selecDessert !== null){
    selecDessert.classList.remove("selecionadoDessert")
  }
  elem.classList.add("selecionadoDessert");
  console.log(elem)
  z = 1;
  validar()
}

function validar(){
  let conf = document.querySelector(".confirmation-button");

  if(x && y && z === 1){
    conf.style.backgroundColor = 'green';
    conf.disable = false;
    conf.innerText = 'Fechar Pedido'
    console.log("works")
  }

}

function confirmation(emem){
  const conf = document.getElementsByClassName("confirmation-button")
  console.log(conf)
  const main = document.querySelector(".selecionado")
  const drink = document.querySelector(".selecionadoDrink")
  const dess = document.querySelector(".selecionadoDessert")
  if (main && drink && dess !== null){
    emem.disable = false;
    console.log("Ok");
  }
  const cartPage = document.querySelector(".cart-page")
  cartPage.classList.remove("hide");
  document.querySelector(".cart .principal .comida").innerText = `${nameMain}:`
  document.querySelector(".cart .principal .preco").innerText = `R$${priceMain}`
}
