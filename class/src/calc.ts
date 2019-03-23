export class Calc
{
    private n1:number;
    private n2: number;
    constructor()
    {
        this.n1=0;
        this.n2=0;
    }
    Add() :number
    {
        return this.n1 + this.n2;
    }
    Sub() : number
    {
        return this.n1 - this.n2;
    }
    Mull() : number
    {
        return this.n1 * this.n2;
    }
    div() : number
    {
        return this.n1 / this.n2;
    }
    setData(n1:number , n2:number) :void
    {
        this.n1 = n1;
        this.n2 =n2 
    }
}