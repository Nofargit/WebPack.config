import {Calc} from './calc.js'; 

const btn : HTMLElement | null = document.querySelector("#newData");
if(btn)
{
    btn.addEventListener('click' , setNewData)
}

let a:number , b:number ; 
let o : Calc;

function setNewData():void
{
    o= new Calc();
    a = parseInt((<HTMLInputElement>document.querySelector("#n1")).value);
    b = parseInt((<HTMLInputElement>document.querySelector("#n2")).value);
    o.setData(a ,b); 
    showData();
}

function showData(): void
{
    const div: HTMLElement | null = document.querySelector("#result");
    if(div)
    {
        div.innerHTML += "<pre>"
        div.innerHTML += o.Add().toString() +"<br>";
        div.innerHTML += o.Sub().toString() +"<br>";
        div.innerHTML += o.Mull().toString() + "<br>";
        div.innerHTML += o.div().toString() +"<br>";
        div.innerHTML += "OK ";
        div.innerHTML += "</pre>";
    }
}

