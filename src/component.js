export default (text = "Hello Dev Server with Watch") => {
    const element = document.createElement("div");
    element.innerHTML = text;
    return element;
  };