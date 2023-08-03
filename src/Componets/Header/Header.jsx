import { UserCard } from "./UserCard";

export function Header({ nameWork }) {
  const user = {
    name: "Bastian",
    src: "src/assets/bg-perfil.jpg",
    cargo:"Oficina Tecnica"
  };
  return (
    <header className="w-full h-1/5 flex items-center justify-around">
      <h1 className="text-cyan-800 tracking-widest text-4xl">{nameWork}</h1>
      <UserCard user={user} />
    </header>
  );
}
