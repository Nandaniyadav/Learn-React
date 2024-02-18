import './Item.css'
const Item = (props) =>{
    const item = props.name;
    return(
        <div > 
            <h3>Use of Props</h3>
            <h2 className='nameStyle'>{item}</h2>
            {/* {props.children} */}
        </div>
    )
}
export default Item;