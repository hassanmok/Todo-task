
import "./small.css"
export default function Small({name="none",children}){
    console.log("name::::::::: ", name);
    return(
        <button className={"New"} style={{}}>{name} {children}</button>
    );
}