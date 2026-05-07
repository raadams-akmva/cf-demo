async function main() {
  await sleep();
  render();
}

async function sleep(delay) {
  if (!delay) {
    delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  }
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function render() {
  const root = document.getElementById("root");
  const h1 = document.createElement("h1");
  h1.textContent = "Hello, World!";
  root.replaceChildren(h1);
}

main();
