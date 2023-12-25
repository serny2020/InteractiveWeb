function ProfileCard({name, score, image, discription}) { // pass the destructuring argument

    // const {name, score} = props; // name is the 1st field, score is the 2nd

    return (
        <div className = "card">
            <div className = "card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="usr icon"/>
                </figure>
            </div>

            <div className = "card-content">
                <div className = "media-content">
                    <p className="title is-4">{name}</p>
                    <p className="subtitle is-6">{score}</p>
                </div>
                <div className = "content">{discription}</div>
            </div>

        </div>
    )
}

// export the component
export default ProfileCard;
