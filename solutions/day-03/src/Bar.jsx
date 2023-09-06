import { hexaColor } from "./hexGen.js";

function Bar({name, value, min, max}){

    if(name.split(" ").length > 1){
        name = abbreviate(name);
    }

    let style = {
        display: "flex",
        // backgroundColor: "gray",
        padding: "4px",
        width: "80%",
        gap:"5px",
        borderRadius:"10px",
        color: "white",
    }
    let textStyle = {
        flex: "1",

    }
    let contStyle = {
        flex: "6",
        width: "100%"
    }
    let barWidth = value / (max - min) * 100;
    let barStyle = {
        padding: "0",
        margin: "0",
        width: barWidth + "%",
        borderRadius: "3px",
        height: "100%",
        backgroundColor: hexaColor(),
    }
    let dividerStyle = {
        height: "1px",
        width: "80%",
        backgroundColor: "gray",
    }

    return(
        <>
            <div className="bar" style={style}>
                <div className="bar_name" style={textStyle}>{name}</div>
                <div className="bar_container" style={contStyle}>
                    <div className="bar_graph" style={barStyle}></div>
                </div>
                <div className="bar_value" style={textStyle}>{value}</div>
            </div>
            <div className="divider" style={dividerStyle}></div>
        </>
    );
}

function abbreviate(name){
    let words = name.split(" ");
    return words.reduce((output, word) => {
        output += word[0] === word[0].toUpperCase() ? word[0] : "";
        return output;
    },"")
}

export default Bar;