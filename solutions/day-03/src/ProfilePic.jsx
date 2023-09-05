function ProfilePic({src}) {
    let containerStyle = {
        width: "200px",  // Set this to your desired size
        height: "200px", 
        borderRadius: "50%",
        overflow: "hidden",  // This ensures anything outside the box (like a non-square img) is cropped out
    };

    let imgStyle = {
        width: "100%",  // Ensure the image covers its container
        height: "100%",
        objectFit: "cover"  // This makes sure the image covers the whole div without distortion
    };

    return (
        <div style={containerStyle}>
            <img src={src} alt="profile pic" style={imgStyle}/>
        </div>
    );
}

export default ProfilePic;