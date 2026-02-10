import CriarUsuario from "./componentes/CriarUsuario";
import Header from "./componentes/Header";
import ListarUsuario from "./componentes/ListarUsuario";

export default function Home(){
  return(
    <div>
      <Header/>
      <div className="flex gap-4 w-screen p-4">
        <CriarUsuario/>
        <ListarUsuario/>
      </div>
    </div>
  )
}