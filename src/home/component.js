export default () => {
    const button = document.createElement("button");
    button.innerHTML = "Click me!";
    button.addEventListener('click',()=>{
      alert("Welcome to Webpack Click")
    })
    return button;
  };

