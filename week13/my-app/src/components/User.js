const User = (props) => {
    const {name, email, username, id} = props.info
    return(
        <div className="tc bg-ligth-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src={`https://robohash.org/${id}2?size=150x150`}/>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            <p>{username}</p>
        </div>
    )
}
export default User