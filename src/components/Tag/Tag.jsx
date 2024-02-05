import "./Tag.css"

// eslint-disable-next-line react/prop-types
function Tag( key ) {

    return (
        <div key={key.id} className="tag-div">
            <div className="tag-bg">
                <p>{key.label}</p>
            </div>
        </div>
    );
}

export default Tag;