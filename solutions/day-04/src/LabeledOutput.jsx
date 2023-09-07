// eslint-disable-next-line react/prop-types
function LabeledOutput({name, out}){

    return(
        <div className="LabeledOutput">
            <span className="label">{name}</span>
            <span className="colon">: </span>
            <span className="labeled_output">{Array.isArray(out) ? out.join(", ") : out}</span>
        </div>
    )
}
export default LabeledOutput