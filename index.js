const BODY = document.querySelector("body");
const TEXTAREA_ATTR = {
    id: 'textarea',
    row: 5,
    cols: 50
}

const createNode = (nodeType, className, text = null, attributes = null) => {
  const node = document.createElement(nodeType);
  node.className = className;

  if (text) {
    node.innerHTML = text;
  }

  if (attributes) {
    Object.entries(attributes).forEach(([attr, value]) => node.setAttribute(attr, value))
  }

  return node;
};

BODY.append(createNode("div", "wrapper"));
const WRAPPER = document.querySelector(".wrapper");

WRAPPER.append(createNode("p", "title", "RSS Виртуальная клавиатура"));
WRAPPER.append(createNode("textarea", "textarea", "", TEXTAREA_ATTR));
WRAPPER.append(createNode("div", "keyboard"));
WRAPPER.append(createNode("p", "description", "Клавиатура создана в операционной системе Windows"));
WRAPPER.append(createNode("p", "description", "Для переключения языка комбинация: левыe ctrl + alt"));

const KEYBOARD = document.querySelector('.keyboard');
