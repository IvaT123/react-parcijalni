export default function Input(props) {
    return <input
    className={props.className}
    type={props.type}
    name={props.name} 
    id={props.id} 
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.changeText}
    />
}