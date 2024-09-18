
import { CartComponents } from "@/shopping-cart";
import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Shopping-Cart',
 description: 'un simple contador',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartComponents values={20}/>
      
    </div>
    //falta mover la carpeta pokemon a src ya la movi
  );
}