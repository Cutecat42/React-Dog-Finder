import React from "react";
import {Link} from "react-router-dom";

const DogList = ({dogs}) => {
    console.log(dogs)

    return (
        <div>
            {dogs.map((e)=><div>
                <Link to={'/dogs/' + e.name}>{e.name}</Link>                
                <p><img src={e.src} /></p>
                </div>)}
        </div>
    )
}

export default DogList;