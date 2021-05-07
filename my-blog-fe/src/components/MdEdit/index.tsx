import React, { useState } from "react";
import MarkDown from "react-markdown";
import CodeBlock from "../CodeBlock";

export default function MdEdit() {
  const [content, setContent] = useState("");
  return (
    <div>
      <textarea onChange={(e) => setContent(e.currentTarget.value)}></textarea>
      <MarkDown
        className="result"
        components={{
          code: ({ node, ...p }) => <CodeBlock {...p} />,
        }}
        children={content}
      />
    </div>
  );
}

// class Editor extends Component{
//   constructor(props){
//       super(props);
//       this.state={
//           content:""
//       }
//   }
//   onChange = (e) => {
//       this.setState({
//           content:e.currentTarget.value
//       })
//   };
//   render() {
//       return(
//           <div className="result-pane">
//               <textarea onChange={this.onChange}/>
//               <MarkDown className="result" source={this.state.content} renderers={{code:CodeBlock}}/>
//           </div>
//       )
//   }
// }
// export default Editor;
