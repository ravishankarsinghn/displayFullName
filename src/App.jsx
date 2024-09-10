import { useState } from "react";

function FullNameDisplay() {
  const [formData, setFormData] = useState({fname:"", lname:""});
  const [isVisible, setIsVisible] = useState(false);

  const handleValueChange = (e)=>{
    const {name, value} = e.target;
    setFormData(prev=> {return{...prev, [name]: value}})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(formData.fname !== "" && formData.lname !== "") {

      setIsVisible(true);
    }
  }
  return <>
    <h1>Full Name Display</h1>

    <form onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="fname">First Name: </label>
      <input type="text" id="fname" name="fname" placeholder="First Name" required={true} onChange={(e)=>handleValueChange(e)}/>
      <br/>
      <label htmlFor="lname">Last Name: </label>
      <input type="text" id="lname" name="lname" placeholder="Last Name"  required={true} onChange={(e)=>handleValueChange(e)}/>
      <br/>
      <button type="submit" >Submit</button>
    </form>

    {isVisible&&<h3>Full Name: {`${formData.fname} ${formData.lname}`}</h3>}
  </>
}

export default FullNameDisplay;