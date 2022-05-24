class Suma{
    a: number
    b: number
    constructor(a:number, b:number){
this.a = a
this.b = b
    }
    getRombo(){
        return this.a + this.b
    }
}
    function main1(){
   const resultado = new Suma(100 ,100)
   
   console.log(resultado.getRombo())
}
main1()