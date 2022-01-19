import React from 'react'

const Card = (props) => {
    return (
        <div className='container'>
            <img src={`${props.items.imageUrl}`} />
            <section className='text'>
                <span className='location'>
                    <img src='Fill 219.png' />
                    {props.items.location}
                </span>
                <span className='maps'><a href={`${props.items.googleMapsUrl}`}>View on Google maps</a></span>
                <h1>{props.items.title}</h1>
                <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
                <p>{props.items.description}</p>

            </section>
        </div>
    )
}

export default Card
