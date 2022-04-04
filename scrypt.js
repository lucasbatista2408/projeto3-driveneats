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
  priceMain = Number(parseFloat(priceMain.replace(/[^a-zA-Z0-9 ]/,'.')).toFixed(2))
  console.log(priceMain);
  nameMain = elem.querySelector(".nomeMain").innerText
  console.log(typeof priceMain)
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
  priceMainDrink = Number(parseFloat(priceMainDrink.replace(/[^a-zA-Z0-9 ]/,'.')).toFixed(2))
  console.log(priceMainDrink);
  console.log(typeof priceMainDrink);
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
  priceMainDessert = Number(parseFloat(priceMainDessert.replace(/[^a-zA-Z0-9 ]/,'.')).toFixed(2))
  console.log(priceMainDessert);
  nameMainDessert = elem.querySelector(".nomeMainDessert").innerText
  console.log(typeof priceMainDessert)
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
    console.log(Number(priceMain+priceMainDrink+priceMainDessert))
  }
  const cartPage = document.querySelector(".cart-page")
  document.querySelector(".blur").classList.remove("hide")
  cartPage.classList.remove("hide");
//Prato Principal
  document.querySelector(".cart .principal .comida").innerText = `${nameMain}`
  document.querySelector(".cart .principal .preco").innerText = `R$${priceMain.toFixed(2)}`
//Bebida
  document.querySelector(".cart .bebida .nome-bebida").innerText = `${nameMainDrink}`
  document.querySelector(".cart .bebida .preco-bebida").innerText = `R$${priceMainDrink.toFixed(2)}`
//Sobremesa
  document.querySelector(".cart .sobremesa .nome-sobre").innerText = `${nameMainDessert}`
  document.querySelector(".cart .sobremesa .preco-sobre").innerText = `R$${priceMainDessert.toFixed(2)}`
// Total
  document.querySelector(".cart .total .price-total").innerHTML = "R$"+ Number(priceMain+priceMainDrink+priceMainDessert).toFixed(2)
  console.log (typeof priceMain)
  console.log (typeof priceMainDessert)
  console.log (typeof priceMainDrink)
}

function fecharPedido(){
  let name = prompt ("Qual seu nome?")
  let endr = prompt ("Qual seu endereço")
  let priceFinal = (priceMain+priceMainDrink+priceMainDessert)
  console.log(priceFinal)
  let msg = encodeURIComponent (`Olá, gostaria de fazer o pedido:
  - Prato: ${nameMain}
  - Bebida: ${nameMainDrink}
  - Sobremesa: ${nameMainDessert}
  Total: ${priceFinal.toFixed(2)}
  
  Nome: ${name}
  Endereço: ${endr}`)
  window.open("https://wa.me/5521998023649?text=" + msg)
}
