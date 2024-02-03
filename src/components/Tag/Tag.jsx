import "./Tag.css"

// eslint-disable-next-line react/prop-types
function Tag({ label }) {
    return (
        <div className="tag-div">
            <div className="tag-bg">
                <p>{label}</p>
            </div>
        </div>
    );
}

export default Tag;