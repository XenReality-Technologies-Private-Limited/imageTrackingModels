import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
const url = 'https://cdn.jsdelivr.net/gh/XenReality-Technologies-Private-Limited/imageTrackingModels@main/assets/scene.gltf'; 

loader.load(url, function(gltf) {
    scene.add(gltf.scene);
    camera.position.z = 5;
    animate();
}, undefined, function(error) {
    console.error(error);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
