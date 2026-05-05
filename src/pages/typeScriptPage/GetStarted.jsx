import React from 'react'
import { GrAnnounce } from "react-icons/gr";
function GetStarted() {
  return (
    <div className="container">
      
      <div className="intro">
        <p>
          <GrAnnounce className='congrat-icone' /> Congratulations on choosing TypeScript as one of your first languages —
          you’re already making good decisions!
        </p>
      </div>

      <div className="card">
        <h2>What is TypeScript</h2>
        <p>
          TypeScript is a superset of JavaScript that adds static typing to the
          language. It allows developers to define types for variables, functions,
          and objects, making code more predictable and easier to debug.
          TypeScript code is compiled into regular JavaScript.
        </p>
      </div>

      <div className="card">
        <h2>Why Use TypeScript?</h2>
        <p>
          TypeScript helps developers catch errors early during development
          instead of at runtime. It improves code readability and provides
          powerful tooling such as autocomplete and IntelliSense.
        </p>
      </div>

      <div className="card">
        <h2>TypeScript vs JavaScript</h2>
        <p>
          JavaScript is dynamically typed, while TypeScript adds static typing.
          This means errors are caught before execution, making development safer.
        </p>
      </div>

    </div>
  )
}

export default GetStarted