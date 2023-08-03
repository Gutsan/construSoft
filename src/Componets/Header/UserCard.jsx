
export function UserCard({user}){
    return(
        <div className="userCard flex justify-center items-center w-52 h-14">
        <img className="w-14 h-14 rounded-full" src={user.src} alt="" />
        <div className="flexflex-col">
        <p>{user.name}</p>
        <p>{user.cargo}</p>
        </div>
        </div>
    )
}