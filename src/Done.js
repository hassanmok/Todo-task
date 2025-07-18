


export default function Done(props){
    return(
        <>
            {
                props.item.map((i)=>{
                    return(

                        <h1>{i.id}</h1>
                    )
                })
            }
        </>
    )
}