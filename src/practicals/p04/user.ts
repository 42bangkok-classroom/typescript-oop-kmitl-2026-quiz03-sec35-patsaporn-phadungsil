export class User {
    public username : string
    private password :string 
    private LOGIN_ATTEMPTS : number = 0

    constructor(){
        this.username = username
        this.password = password 
           }

    public User(username : string,password :string){

    }
     public login(password: string): boolean {
    
    this.LOGIN_ATTEMPTS++

    return this.validatePassword(password)
  }

  private validatePassword(password: string): boolean {
    return this.password === password
  }

  public getLoginAttempts(): number {
    return this.LOGIN_ATTEMPTS
  }
}
