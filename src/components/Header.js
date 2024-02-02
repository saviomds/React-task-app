const Header = ({ title }) => {
  return (
  <header className="main-header">
    <h1>{ title }</h1>
  </header>
  )
}

Header.defaultProps = {
  title : "React App"
}
export default Header