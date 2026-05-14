import './App.css'
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/react'

function App() {
  return (
    <>
      <h1>Welcome to PrepNest</h1>

      <Show when="signed-out">
        <SignInButton mode='modal'>
          <button>
            Sign In please
          </button>
        </SignInButton>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </>
  )
}

export default App