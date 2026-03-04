import { marked } from 'marked';
import DOMPurify from "dompurify";
marked.setOptions({

  breaks: true,
  gfm: true
});
export default function Preview({text}){
    const textParsed=DOMPurify.sanitize(marked.parse(text)) 
    return(
    <>    
    <div className="card" >
  <div className="card-header">
  <h2 className="card-title">Preview</h2>
  </div>
      <div 
      className="card-body mt-5"
    dangerouslySetInnerHTML={{ __html:textParsed}}
     id="preview" 
     >
   
    </div>
    </div>
     </>
)
}