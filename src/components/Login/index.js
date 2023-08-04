// Write your code here

import './index.css'

const Login = props => {
  const {value} = props
  return (
    <button onClick={value} type="button">
      Login
    </button>
  )
}

export default Login
