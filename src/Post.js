
import "./Post.css"

function Post(props){
    return(
        <div className={"Post"}>
            <h3 style={{display: "flex", justifyContent: "center", fontSize: "20px", marginTop: "10px"}}>
                {props.n} hhhh
            </h3>
            <hr style={{marginLeft: "10px", marginRight: "10px",height: ".5px", backgroundColor: "black"}}></hr>
            <h4 style={{display: "flex", justifyContent: "center", fontSize: "14px",}}>
                This is the post body
            </h4>
            {props.children}
        </div>
    );
}

export default Post;