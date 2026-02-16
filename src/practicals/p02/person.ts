export class Person {
    public firstname :string = 'John'
    public lastname : string = 'Doe'
    private age : number = 0 

     static COUNTRY : string = 'Thailand'
   
    setAge(age : number):void{
        this.age = age 
    }
   getAge(){
   return this.age
   }
   getFullName(){
    return `${this.firstname}+" "+${this.lastname};`
   }
}
