import {React, Component } from "react";
class CodeSandboxModal extends Component {
    state = {  } 
    render() { 
        return (
            <iframe
            style={{
                width: "100%",
                height: 900,
                outline: "1px solid #252525",
                border: 0,
                borderRadius: 8,
                marginBottom: 16,
                zIndex: 100
            }}
            src="https://codesandbox.io/p/sandbox/react-new?file=/src/index.js"
            ></iframe>
        );
    }
}
 
export default CodeSandboxModal;