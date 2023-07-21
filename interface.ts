export interface user
{
    name: string
    age: number
    id:number
    email: string
}

let users:user={name: 'John', age:63,id:2,email: 'sr'}
console.log(users)

interface hi extends user{
    salary: number
}
let woevrvrk:hi={name: 'John', age:63,id:2,email: 'sr',salary:12
}
console.log(woevrvrk);

export interface login
{
    Login():string;
}
