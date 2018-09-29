class convertor{
    constructor(){}

    convlong(u1,u2,med){
        let r;
        if(u1 == "m" && u2 =="cm"){
            r =med*100;
        }
        else if(u1 == "cm" && u2 == "m"){
            r = med/100;
        }
        else if(u1 == "km" && u2 == "m"){
            r = med * 1000;
        }
        else if(u1 == "m" && u2 == "km"){
            r = med /1000;
        }
        else if(u1 == "ft" && u2 == "m"){
            r = med*0.3048;
        }
        else if(u1 == "m" && u2 == "ft"){
            r = med/0.3048;
        }
        return r;
    }

    convtemp(u1,u2,med){
        let r;
        if(u1 == "c" && u2 =="f"){
            r =(med*1.8)+32;
        }
        else if(u1 == "f" && u2 == "c"){
            r = (med-32)/1.8;
        }
        else if(u1 == "k" && u2 == "f"){
            r = (med-273.15)*1.8+32;
        }
        else if(u1 == "f" && u2 == "k"){
            r = (med-32)/1.8+273.15;
        }
        else if(u1 == "k" && u2 == "c"){
            r = med-273.15;
        }
        else if(u1 == "c" && u2 == "k"){
            r = med+273.15;
        }
        return r;
    }

    convertir(med,u1,u2,t){
        switch(t){
            case "L":
                var l = new convertor();
                console.log(l.convlong(u1,u2,med) + " " + u2);
                break;
            case "T":
                var t = new convertor();
                console.log(t.convtemp(u1,u2,med) + " " + u2);
                break;
            default:
                alert("Ingrese una medida valida");
                break;
        }
    }
}
med=prompt("Ingrese la medida: ");
uI=prompt("Ingrese la unidad Inicial: ");
uC=prompt("Ingrese la unidad a convertir: "); 
t=prompt("Ingrese el tipo de medida: ");
var conver = new convertor();
conver.convertir(parseFloat(med),uI,uC,t);



