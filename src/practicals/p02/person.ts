export class Person {
    firstname :string = 'John'
    lastname : string = 'Doe'
    private age : number = 0 

    public static COUNTRY : string = 'Thailand'
   
    setAge(age : number):void{
        this.age = age 
    }
   getAge():number{
   return this.age
   }
   getFullName():string{
    return `${this.firstname}+" "+${this.lastname};`
   }
}
