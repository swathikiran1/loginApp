// Write your code here

import './index.css'

const Logout = props => {
  const {value} = props
  return (
    <button onClick={value} type="button">
      Logout
    </button>
  )
}

export default Logout
