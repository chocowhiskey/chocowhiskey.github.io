import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

// Debug
const gui = new dat.GUI();

let scene, camera, renderer;

/* ********************** Basic Set Up ********************** */
function init() {
  // Canvas
  const canvas = document.querySelector("canvas.webgl");

  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 1;
  camera.rotation.x = 1.16;
  camera.rotation.y = -0.12;
  camera.rotation.z = 0.27;

  // Ambient Light
  let ambient = new THREE.AmbientLight(0x555555);
  scene.add(ambient);

  // Render
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add fog
  scene.fog = new THREE.FogExp2(0x03544e, 0.001);
  renderer.setClearColor(scene.fog.color);
  document.body.appendChild(renderer.domElement);

  render();
}

// Render function
function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

init();
