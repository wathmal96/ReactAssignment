import"./Style.css"

export default function Card({heading,address,age}){
    return(
      <div id="card">
        <h3>{heading}</h3>
        <p>Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. 
            Voluptas itaque, ducimus harum magni voluptate repellat 
            nostrum? Ut consequatur aperiam, accusantium sed dolore 
            suscipit eligendi. Optio numquam at blanditiis aut ipsa?
        </p>
        <h4>Address:<span>{address}</span></h4>
        <h4>Age:<span>{age}</span></h4>
      </div>
    )
}