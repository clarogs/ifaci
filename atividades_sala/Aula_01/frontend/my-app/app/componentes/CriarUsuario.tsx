export default function CriarUsuario(){
    return(
        <div className="w-[50vw] max-h-fit flex flex-col gap-4 bg-white text-black rounded-xl p-4">
            <h1>Criar Usuário</h1>
            <input
            type="text"
            placeholder="Nome Completo"
            className="p-4 rounded-lg bg-gray-50 outline-1 outline-red-500"
            />
            <input
            type="email"
            placeholder="email@email.com"
            className="p-4 rounded-lg bg-gray-50 outline-1 outline-red-500"
            />
            <input
            type="password"
            placeholder="Sua senha"
            className="p-4 rounded-lg bg-gray-50 outline-1 outline-red-500"
            />
            <input
            type="submit"
            value="Cadastrar"
            className="p-4 rounded-lg bg-green-400 hover:bg-green-500 text-white"
            />
        </div>
    )
}