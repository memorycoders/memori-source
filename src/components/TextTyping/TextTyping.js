import React from 'react';
import Typical from 'react-typical'
function TextTyping(props) {
    return (
        <Typical
            steps={['Xin chào bạn đã ghé thăm 😜 !', 1000]}
            // loop={Infinity}
            loop={1}
            wrapper="p"
            className="title-typing"
        />
    );
}

export default TextTyping;