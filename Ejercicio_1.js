var Productos = [];
var Ventas = [];

function menu (){
    var f = true;
    while(f){
        console.log("1. Agregar producto");
        console.log("2. Modificar stock");
        console.log("3. Registrar venta y reducir stock");
        console.log("4. Mostrar promedio de ventas realizadas");
        console.log("5. Mostrar productos con stock 0");
        console.log("6. Salir del sistema");
        var v = parseInt(prompt("Elige una opcion: "));
        switch(v){
            case 1:
                Agregar();
                break;
            case 2:
                ModStock();
                break;
            case 3:
                RegVen();
                break;
            case 4:
                Prom();
                break;
            case 5:
                ModStock();
                break;
            case 6:
                f = false;
                break;
            default: 
                console.log("Elija una opcion correcta");
                break;
        }
    }
}

function Agregar(){
    var Codigo = prompt("Ingresa el codigo: ");
    var Descripcion = prompt("Ingresa la descripcion del producto: ");
    var Tipo = prompt("Ingrese el tipo de producto: ");
    var PrecioCompra = prompt("Ingrese el precio de compra");
    var Venta = prompt("Ingrese el precio de venta: ");
    var Stock = prompt("Ingrese el stock restante: ");
    Productos.push({Codigo, Descripcion, Tipo, PrecioCompra, Venta, Stock});
}

function ModStock(){
    var cod = prompt("Ingrese el codigo del producto para modificar su stock: ");
    for(let x of Productos){
        if(x.Codigo == cod){
            x.Stock = prompt("Ingrese el nuevo valor del stock: ");
        }
    }
}

function RegVen(){
    var c = prompt("Ingrese el codigo del producto vendido: ");
    for(let x of Productos){
        if(x.Codigo == c){
            if(x.Stock == 0){
                console.log("No se puede ingresar mas porque ya no queda stock");
            }
            else{
            Ventas.push(x.Venta);
            x.Stock -= 1;
            }
        }
    }
}

function Prom(){
    var sum = 0;
    if(Ventas.length > 0){
        for (let i of Ventas){
            sum = sum + i;
        }
        let prom = sum/Ventas.length;
        console.log(prom);
    }
    else{
        console.log("No hay ventas realizadas.");
    }
}

function ModStock(){
    var f = 0;
    for(let i of Productos){
        if(i.Stock == 0){
            console.log(i.Tipo);
            f += 1;
        }
    }
    if( f == 0){
        console.log("Todos los productos tienen stock");
    }

}

menu();