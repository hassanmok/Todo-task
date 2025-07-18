


export default function Done(props){
    return(
        <div style={{margin: "200px",display: "flex", justifyContent: "center", fontSize: "40px",color: "white", backgroundColor: "black"}}>
            {props.error == "" ? "The Submit was sent successfully": props.error}
        </div>
    )
}