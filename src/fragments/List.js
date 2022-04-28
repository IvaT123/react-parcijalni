import Button from "../components/Button";

export default function List(props){
    const repos = props.repos.slice(0,12);
    const liElement = repos.map((rep) => {
        return(
            <li key= {rep[1]} className= "list-group-item"> {rep[0]}</li>
        )
    })
    
    
    return(
        <div className="w-50 p-3 border border-secondary m-auto">
        <h1> <img 
        src={props.data.avatarUrl}
        alt= 'img'
        className="w-50 p-3"/> { props.data.name } </h1>
        
        <h3>BIO: <span className="fw-light">{props.data.bio}</span> </h3>
        <h3>LOCATION: <span className="fw-light">{props.data.location}</span> </h3>
        <h3>REPOSITORIES: </h3>
        <ul className= "list-group">
            {liElement}
        </ul>
        <div className="d-grid gap-2">
        <Button type="button" onClick={props.onClick} className="btn btn-secondary"> Reset </Button>
        </div>
        </div>
    )
}