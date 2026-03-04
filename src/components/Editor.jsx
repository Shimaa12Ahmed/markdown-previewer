import { useState } from 'react';
import Preview from './Preview';

export default function Editor({ theme, toggleTheme }) {
  const defaultMarkdown = `# Here's a Heading  
  ## This is a sub-heading  
  Here's a **bold text**
> This is a blockquote

1. First ordered list item

Here is a link to [FreeCodeCamp](https://www.freecodecamp.org).

Here is some inline code: \`const x = 10;\`

Here is a code block:

\`\`\`javascript
function greet(name) {
  return "Hello " + name;
}

console.log(greet("World"));
\`\`\`

![Image](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

  const [text, setText] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setText(e.target.value)
  
    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
  }

  return (
    <>
  <nav className="navbar navbar-expand-lg  shadow-sm  m-3">
  <div className="container-fluid " >
  <a className="navbar-brand" href="#">
  {theme === 'light' ? (
  <i className="bi bi-markdown" style={{ fontSize: '2rem',color: '#663399', width:"50" ,height:"50" }}
   ></i>
  ):
  (
    <i className="bi bi-markdown" style={{ fontSize: '2rem',color: '#786eec', width:"50" ,height:"50" }}
    ></i> 
  )}
    </a>
  <div className='d-flex '>
    <button className="btn rounded-4 shadow "onClick={toggleTheme} >
    {theme === 'light' ? (
    <>
      <i className="bi bi-moon-stars-fill"></i> 
    </>
  ) : (
    <>
      <i className="bi bi-sun-fill"></i> 
    </>
  )}
    </button>
   
    </div>
     
  </div>
    </nav>
    <div className="container">
  <div className="card" >
  <div className="card-header">
  <h2 className="card-title">Editor</h2>
  </div>
  <div className="card-body form-floating rounded-4 ">
  <textarea
  value={text}
  onChange={handleChange}
  className="form-control border-0 shadow-none bg-transparent "
  placeholder="Leave a Markdown here"
  id="editor"
/>
    </div>
  
  </div>
   
  
   
     <Preview text={text}/>
    </div>
  

    <footer className="text-center mt-4 text-muted small">
         Developed by Shimaa Ahmed © 2026
  </footer>
    </>
  );
}