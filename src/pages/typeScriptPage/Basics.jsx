import React from "react";
import CodeComponenets from "../../components/CodeComponenets/CodeComponenets";
import NoteComponenets from "../../components/noteComponenets/NoteComponenets";

function Basics() {
  return (
    <>
      <div className="container">
        <div className="card">
        <h2>TypeScript Basic Types</h2>
        <p>
          TypeScript provides several basic types that allow you to define and
          control the kind of data your variables can hold.
        </p>
        <div className="type-section">
  <h3>String</h3>
  <p>Represents textual data.</p>
  <CodeComponenets code={'let username: string = "John Doe";'} />
</div>

<div className="type-section">
  <h3>Number</h3>
  <p>Represents numeric values.</p>
  <CodeComponenets code={'let age: number = 25;\nlet price: number = 99.99;'} />
</div>

<div className="type-section">
  <h3>Boolean</h3>
  <p>Represents true or false values.</p>
  <CodeComponenets code={'let isLoggedIn: boolean = true;'} />
</div>

<div className="type-section">
  <h3>Array</h3>
  <p>Stores multiple values of the same type.</p>
  <CodeComponenets code={'let numbers: number[] = [1, 2, 3, 4];\nlet names: string[] = ["Alice", "Bob"];'} />
</div>

<div className="type-section">
  <h3>Tuple</h3>
  <p>Fixed-length array with defined types.</p>
  <CodeComponenets code={'let user: [string, number] = ["Alice", 22];'} />
</div>

<div className="type-section">
  <h3>Enum</h3>
  <p>Defines a set of named constants.</p>
  <CodeComponenets code={'enum Role {\n  Admin,\n  User,\n  Guest\n}\n\nlet currentRole: Role = Role.Admin;'} />
</div>

<div className="type-section">
  <h3>Any</h3>
  <p>Disables type checking (use with caution).</p>
  <CodeComponenets code={'let data: any = "Hello";\ndata = 42;\ndata = true;'} />
</div>

<div className="type-section">
  <h3>Unknown</h3>
  <p>Safer alternative to any.</p>
  <CodeComponenets code={'let value: unknown = 10;\n\nif (typeof value === "number") {\n  console.log(value + 5);\n}'} />
</div>

<div className="type-section">
  <h3>Void</h3>
  <p>Used when a function does not return anything.</p>
  <CodeComponenets code={'function logMessage(): void {\n  console.log("Hello World");\n}'} />
</div>

<div className="type-section">
  <h3>Null & Undefined</h3>
  <p>Represents empty or uninitialized values.</p>
  <CodeComponenets code={'let emptyValue: null = null;\nlet notAssigned: undefined = undefined;'} />
</div>
      </div> 
      <NoteComponenets
  note={`A variable can have multiple types using union types.
This helps make code flexible but still safe.`}
/>
      </div>
     
      
    </>
  );
}

export default Basics;
