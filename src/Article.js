import React from 'react';

const Article = ({title,image, content}) => {
    
    return (
        <div>
            <h1>{title}</h1>  

            <img src={image}/>

            <p>
                {content}
            </p>
        </div>
    )
}

export default Article