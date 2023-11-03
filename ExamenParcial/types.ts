export type Monumento = {
    nombre:string; 
    desc: string ; 
    postal:number;
    ISO:string; 
 
}


export type Location = {
    country:string; 
    city:string;
    zipcode:string; 

}

export type Weather = {
    location: Location;
    temperature: number;
    description: string;
};

