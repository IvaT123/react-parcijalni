export default function Label(props) {
    return <label htmlFor = {props.forEl} className={props.className}>{props.children}</label>
}