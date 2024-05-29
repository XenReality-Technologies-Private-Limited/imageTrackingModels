import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
const loadedData = await loader.loadAsync(
  "https://cdn.jsdelivr.net/gh/XenReality-Technologies-Private-Limited/imageTrackingModels@main/scene.glb"
);

async function loadingSuccess() {
  // inside an async function: OK!
  await loader.loadAsync("yourModel.glb");
}

async function loadingFail() {
  // not inside an async function: ERROR!
  await loader.loadAsync("yourModel.glb");
}

