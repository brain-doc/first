import * as THREE from "three";

// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const cube_geometry = new THREE.BoxGeometry();
const capsule_geometry = new THREE.CapsuleGeometry();
const cube_material = new THREE.MeshBasicMaterial({ color: 0x909090 });
const capsule_material = new THREE.MeshBasicMaterial({ color: 0x110099 });
const cube = new THREE.Mesh(cube_geometry, cube_material);
const capsule = new THREE.Mesh(capsule_geometry, capsule_material);
cube.position.x = 3;
console.log(cube);
scene.add(cube);
scene.add(capsule);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;

  capsule.rotation.x -= 0.02;
  capsule.rotation.y -= 0.02;

  renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
