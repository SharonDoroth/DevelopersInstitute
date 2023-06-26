import './Hello.css'
const users = [
    {
        name:'Marry',
        email:'marry@gmail.com'
    },
    {
        name:'John',
        email:'john@gmail.com'
    },
    {
        name:'David',
        email:'david@gmail.com'
    }
]

const Hello = () => {

    const html_users = users.map(item => {
        <div>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
        </div>
    })
    return (
        <div>
            <h1 style={{backgroundColor:'yellow', fontSize:'22px', color:'red'}}>Hello,users:</h1>
            {
                html_users
            }
            </div>
        )
        <div>
                users.map(item => {
                    return (
                        <div>
                            <h2>{item.name}</h2>
                            <p className="textemail">{item.email}</p>
                            </div>
                    )
                })
            }
        </div>
    )
}
export default Hello