class Nodo {
    constructor(numero) {
        this.numero = numero;
        this.next = null;
    }
}
class Lista {
    constructor() {
        this.primero = null;
    }
    
    agregar(nuevo) {
        if (this.primero == null)
            this.primero = nuevo;
        else {
            let temp = this.primero;
            while (temp.next != null)
                temp = temp.next;
            temp.next = nuevo;
        }
    }

    agregarInicio(nuevo) {
        nuevo.next = this.primero;
        this.primero = nuevo

    }

    listarInverso() {
            if (this.primero == null) {
                return "";
            } else {
                return this.recListar(this.primero)
            }
        }

    recListar(nodoX) {
        if (nodoX.next == null) {
            return `${nodoX.numero}`
        } else {
            return this.recListar(nodoX.next) + "  " + nodoX.numero  ;
        }
    }

    listar(){
        let res="";
        let temp=this.primero;
        while(temp!=null){
            res+=temp.numero + "  ";
            temp=temp.next;
        }
        return res;
      }
    
      extraerPrimero(){
        let aux = this.primero
        this.primero = this.primero.next;
        return aux
      }
    
      extraerUltimo(){
        
      }
}

let datos = new Lista();
let num = new Nodo(2);
datos.agregar(num);
num = new Nodo(3);
datos.agregar(num);
num = new Nodo(4);
datos.agregar(num);
num = new Nodo(5);
datos.agregar(num);
num = new Nodo(1);
datos.agregarInicio(num);
console.log(datos.listarInverso());