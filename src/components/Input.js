export default function Input(props) {
    return <input
    type={props.type}
    name={props.name} 
    id={props.id} 
    placeholder={props.placeholder}
    
    onChange={props.changeText}
    />
}