
import React from 'react';

function App() {
    return (
        <div>
            <h1>Debug the WEBGL!</h1>
            <iframe
                // border: "1px solid black"
                src="/WebGL/index.html"
                width="800"
                height="600"
                frameBorder="0"
                title="Unity WebGL Build"
            ></iframe>
        </div>
    );
}

export default App;
