import { login, user} from './interface'



interface address
{
    street:string,
    city:string,
    pin:number
};
class emp implements login
{
    #id!:number;
    nmae!:string;
    addresses!:address
    constructor(id: number, nmae: string, addresses: address)
    {
        console.log(id, nmae, addresses)
    }
  
    Login(): string {
        throw new Error('Method not implemented.');
    }

        
       
    }
    


let e=new emp(1,'srikanth',{street:"banglore", city:"bang", pin:123});
