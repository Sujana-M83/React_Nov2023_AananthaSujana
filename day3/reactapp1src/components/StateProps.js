import { useState } from "react";
function StateProps(){
    const [name,setName]=useState("Sujana");
    const [num,setNum]=useState("1");
    const [stu,setStu]=useState({name:"Mike",age:17});
    const nameHandler= () =>{
        setName('Mike');
    };
    const numHandler= () =>{
        let value=num;
        setNum(++value);
    };
    return(
        <div>
            <h1>State and Props</h1>
            <hr></hr>
            <h2>Name is {name}</h2>
            <h2>Register Number is {num}</h2>
            <h2>Student name is {stu.name} and age is {stu.age}</h2>
            <button onClick={nameHandler}>Change Name</button><br></br>
            <button onClick={numHandler}>Increment Number</button>
        </div>
    );
}
export default StateProps;