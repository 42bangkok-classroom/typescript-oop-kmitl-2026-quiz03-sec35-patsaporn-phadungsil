import { Drawable } from "./drawable";


/*1 properties (fields)
2 constructor
3 concrete methods
4 abstract methods*/
export abstract class Shape implements Drawable{
protected color: string

constructor(color : string){
this.color = color
}


public getColor(): string{
    return this.color 
}

abstract draw():void
abstract getArea(): number   


}