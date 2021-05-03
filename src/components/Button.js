import React from 'react';

const sayHello = () => {
    console.log('Hello');
}

const HelloButton = () => {
    return <div>
        <button onClick={sayHello}>Say Hello</button>
    </div>;
};

export default HelloButton;