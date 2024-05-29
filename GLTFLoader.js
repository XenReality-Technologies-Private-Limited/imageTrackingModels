import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
const loadedData = await loader.loadAsync(
  "https://cdn.jsdelivr.net/gh/XenReality-Technologies-Private-Limited/imageTrackingModels@main/scene.gltf"
);

loader.parse(loadedData,'',function(gltf){
	scene.add(gltf.scene);
},function(){
	console.log('model load error')
});


