
const onClick = (e) => {
  e.preventDefault();
  console.log("click")
}
const Button = ({text}) => {
  return (
    <button id="add-btn" onClick = {onClick}>{text}</button>
    )
}

export default Button