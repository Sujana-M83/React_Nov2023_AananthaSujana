const Inline= () =>{
    const pstyle = {
        backgroundColor: "lightblue",
        color: "darkblue",
        fontSize: "16px",
        padding: "10px",
        border: "1px solid blue",
        borderRadius: "5px",
    };
    return(
        <div>
            <h1 style={{color: "green"}}>Inline Style in JSX Example</h1>
            <p style={pstyle}>This is a paragraph with inline style applied</p>
        </div>
    );
};
export default Inline;