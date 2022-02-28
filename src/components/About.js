import React from "react";


function About (prop) {

    const image = prop.image ? prop.image : "https://via.placeholder.com/215"

    return (

        <aside>
            <img  src={image} alt="blog logo" />
            <p>{prop.about}</p>
        </aside>

    )

}

export default About