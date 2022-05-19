export const Input = () =>
{

    return(
        <div className="ip">
            <input type={"text"} onChange={(e) => console.log(e.target.value)} />
        </div>
    )
}