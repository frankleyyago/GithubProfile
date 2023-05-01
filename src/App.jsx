import { useState } from "react"

import Profile from "./components/Profile"
import Form from "./components/Form"
import ReposList from "./components/ReposList"

function App() {
  const [visibleForm, setVisibleForm] = useState(true)
  const [userName, setUserName] = useState('')
  return (
    <>
      <input type="text" onBlur={(e) => setUserName(e.target.value)} />

      {userName.length > 4 && (
        <>
          <Profile userName={userName} />
          <ReposList userName={userName}/>
        </>
      )}
      
      {/* {visibleForm && (
        <Form />
      )}

      <button onClick={() => setVisibleForm(!visibleForm)} type="button">Toggle form</button> */}
    </>
  )
}

export default App
