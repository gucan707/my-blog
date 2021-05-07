import { useState, useEffect, useRef, ReactNode } from "react"; //引入react
import hljs from "highlight.js";

import "highlight.js/styles/night-owl.css"; //代码块样式

interface CodeBlockProp {
  className?: string;
  children?: string | ReactNode[];
}

export default function CodeBlock(prop: CodeBlockProp) {
  const { children, className } = prop;
  const codeEl = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeEl.current) hljs.highlightBlock(codeEl.current);
  });
  return (
    <code ref={codeEl} className={className}>
      {children}
    </code>
  );
}

// class CodeBlock extends PureComponent{
//   constructor(props){
//       super(props);
//       this.setRef = this.setRef.bind(this)
//   }
//   setRef(el){
//       this.codeEl = el
//   }
//   componentDidMount() {
//       this.highlightCode()
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//       this.highlightCode()
//   }
//   highlightCode(){
//       hljs.highlightBlock(this.codeEl)
//   }
//   render() {
//       return(
//           <pre>
//               <code ref={this.setRef} className={`language-${this.props.language}`}>
//                   {this.props.value}
//               </code>
//           </pre>
//       )
//   }
// }
// CodeBlock.defaultProps = {
//   language:''
// };
// CodeBlock.protoTypes = {
//   value:PropTypes.string.isRequired,
//   language: PropTypes.string
// };
// export default CodeBlock;
