const btnPlus = document.getElementsByClassName("plus");
const btnMinus = document.getElementsByClassName("minus");
const bntLike = document.querySelectorAll(".like");
const btnDelete = document.querySelectorAll(".delete");
const checkBox = document.querySelectorAll(".checkbox")

// console.log(btnPlus)
// console.log(btnMinus)
// console.log(bntLike)
// console.log(btnDelete)
// console.log(checkBox)

for (let i=0; i<btnPlus.length;i++){
    btnPlus[i].addEventListener("click", articleplus);
    btnMinus[i].addEventListener("click", articlemoins);
    bntLike[i].addEventListener("click", liked);
    btnDelete[i].addEventListener("click", remove);
    checkBox[i].addEventListener("click", totalPrice);
}
function articleplus(event) {
    const btn=event.target;
    // console.log(btn)
    var divElt = btn.parentElement.parentElement
    // console.log(divElt)
    var contTag=divElt.querySelector(".unite");
    // console.log(contTag)
    var contValue=Number(contTag.innerHTML);
    // console.log(contValue)
    // console.log(typeof (contValue))
    var divE = divElt.parentElement.parentElement.parentElement;
    var stockTag=divE.querySelector(".disponibiler");
    var stockValue=String(stockTag.innerHTML);
    // console.log(stockValue)
    // console.log(typeof(stockValue))
    var btnPlus = divElt.querySelector(".plus");
    // console.log(btnPlus)
    contValue+=1;
    console.log(contValue)
    console.log(typeof(contValue))
    contTag.innerHTML=contValue
    var trElt=divElt.parentElement
    console.log(trElt)
    var princeTag=trElt.querySelector(".prtotal")
    var priceValue =Number(princeTag.parentElement.parentElement)
    const unitePriceValue=Number(trElt.querySelector(".Prix").innerHTML)
    console.log(unitePriceValue)
    priceValue=unitePriceValue*contValue
    princeTag.innerHTML=priceValue
    console.log(typeof(priceValue))
    }
function articlemoins(event) {
    const btn=event.target;
    // console.log(btn)
    const divElt = btn.parentElement.parentElement;
    // console.log(divElt)
    var contTag=divElt.querySelector(".unite");
    // console.log(contTag)
    var contValue=Number(contTag.innerHTML);
    // console.log(contValue)
    if (contValue>0){
    contValue-=1} else contValue=0
    // console.log(contValue)
    contTag.innerHTML=contValue
    var trElt=divElt.parentElement
    // console.log(trElt)
    var princeTag=trElt.querySelector(".prtotal")
    var priceValue =Number(princeTag.parentElement.parentElement)
    const unitePriceValue=Number(trElt.querySelector(".Prix").innerHTML)
    // console.log(unitePriceValue)
    priceValue=unitePriceValue*contValue
    princeTag.innerHTML=priceValue
    // console.log(typeof(priceValue))
    } 
function liked(event){
    var btnheart=event.target
    // console.log(btnheart);
    if(btnheart.style.color!=="red")
    btnheart.style.color="red"
    else
    btnheart.style.color="black"
    // console.log(btnheart)
    }
function remove(event){
    const btnDelete=event.target;
    // console.log(btnDelete)
    var divElt=btnDelete.parentElement.parentElement;
    divElt.remove()
    // console.log(divElt)
    }
function totalPrice(event){
    var checkOne = event.target;
    // console.log(checkOne)
    var trElt = checkOne.parentElement.parentElement;
    // console.log(trElt)
    var PrixTag=trElt.querySelector(".prtotal");
    // console.log(TotalTag)
    var PrixValue =Number(PrixTag.innerHTML);
    // console.log(TotalValue);
    // console.log(typeof(TotalValue))
    var trEl = trElt.parentElement.parentElement.parentElement;
    // console.log(trEl);
    var TotalhtTag=trEl.querySelector(".totalht");
    // console.log(TotalhtTag)
    var TotalhtValue =Number(TotalhtTag.innerHTML);
    // console.log(TotalhtValue);
    // console.log(typeof(TotalhtValue))
    var btnPlus = trElt.querySelector(".plus");
    // console.log(btnPlus)
    var btnMinus = trElt.querySelector (".minus");
    // console.log(btnMinus)
    var btnDelete = trElt.querySelector (".delete");
    if (checkOne.checked === true) {
        TotalhtValue += PrixValue;
        btnPlus.setAttribute("disabled",true)
        btnMinus.setAttribute("disabled",true)
        btnDelete.setAttribute("disabled",true)}
    else {
        TotalhtValue-=PrixValue;
        btnPlus.removeAttribute("disabled")
        btnMinus.removeAttribute("disabled")
        btnDelete.removeAttribute("disabled")
        }
        TotalhtTag.innerHTML=TotalhtValue
        // console.log(TotalhtTag)

        var TaxeTag=trEl.querySelector(".Taxe");
        var TaxeValue =Number(TaxeTag.innerHTML);
        TaxeValue = ((TotalhtValue * 0.19)*1000)/1000;
        console.log(TaxeValue)
        TaxeTag.innerHTML=TaxeValue

        var PrixTtcTag=trEl.querySelector(".PrixTtc");
        var PrixTtcValue =Number(PrixTtcTag.innerHTML);
        PrixTtcValue = ((TaxeValue + TotalhtValue)*1000)/1000;
        console.log(PrixTtcValue)
        PrixTtcTag.innerHTML=PrixTtcValue
        console.log(PrixTtcTag)


    }