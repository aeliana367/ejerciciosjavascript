let carrito = {
    montoTotal: 10,
    productos: ["Leche"],
    productos :["cafe"],
   

}





class carritos{
    
    nombre;
    precio;
    unidades;




   

    constructor(){
        this.montoTotal= 10;
        this.productos = ["Leche"];
        this.productos = ["cafe"];
       
    }


    agregarProductos (nombre,precio,unidades){
        if(!this.productos.includes(nombre)){
            this.productos.push(nombre)
            this.montoTotal += precio * unidades

            
        }else {
            console.log("este producto ya esxiste  con  " +nombre, "y con"   + unidades);
           
        } 
    }    
}

 



const carrito1 = new carrito(10);


carrito.agregarProductos("Azucar",5,2);
carrito.agregarProductos("Azucar",5,2);

console.log(carrito)


