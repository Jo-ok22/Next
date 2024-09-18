import { redirect } from "next/navigation";

export default function Home() {

  redirect('/dashboard/main');
  //esto retorna never osea que ya no se va ejecutar lo que este abajo 

  // return (
  //   <>
  //   <h1>hola mundo</h1>
  //   </>
  // ); por eso es que esto se puede borrar porque ya no se va a ejecutar
}
