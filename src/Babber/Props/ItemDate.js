const ItemDate =(props )=>{
    const Date =props.date;
    const Year =props.year;
    return(
        <>
        <h3>{Date}</h3>
        <h3>{Year}</h3>
        </>
    )
}
export default ItemDate;