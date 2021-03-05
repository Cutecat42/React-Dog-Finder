import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const { name } = useParams();
    console.log(name)
    const dog = dogs.map((e)=>{
        if (e.name === name) {
            return (
                <div>
                    {e.name}, &nbsp;
                    age {e.age}
                    {e.facts.map((ee)=><li>{ee}</li>)}
                </div>
            )
        }
    })
    return (
        <div>
            {dog}
        </div>
    )
}

export default DogDetails;

