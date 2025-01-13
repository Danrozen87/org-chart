import "./index.css";
import App from "./App.svelte";

const target = document.getElementById('app');

if (!target) {
  throw new Error("Failed to find the '#app' element in the DOM.");
}

const app = new App({
  target: target as HTMLElement,
});

export default app;
