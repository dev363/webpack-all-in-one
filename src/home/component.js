export default (text = "Home Page") => {
    const element = document.createElement("div");
    element.innerHTML = text;
    return element;
  };