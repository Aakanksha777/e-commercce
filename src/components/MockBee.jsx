import React from 'react'

const MockBee = () => {

    const loggedInUser = async () => {

        try {
            const credentials = {
                email : "adarshbalika@gmail.com",
                password : "adarshbalika"
            }

            const user = await fetch("/api/auth/login", {
                method : "POST",
                body : JSON.stringify(credentials)
            });

            console.log(await user.json())
        } 
        catch (e) {
            console.error(e)
        }
    }
  return (
    <div>
        <h1> Test Api's</h1>
        <br/>
        <button onClick={loggedInUser}>Click me !</button>
    </div>
  )
}

export default MockBee
