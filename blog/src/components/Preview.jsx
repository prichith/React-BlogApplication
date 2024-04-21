import Blog from "./Blog";

function Preview(props){
    return(
        <div className="preview">
            <Blog data={props.data}/>
        </div>
    )
}
export default Preview;