import Button from "./Button"
import Nodelist from "./Nodelist"


const Form = () => {
  return (
    <form className = "todo-container">
       <div className="input-container" >
       <input type="text" id="todo-input" placeholder="Enter your task"/>
        <Button text = 'Add' />
        <Nodelist />
       </div>
    </form>
  )
}
export default Form