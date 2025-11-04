// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let cat
// ~~~~~~~~~~~~~~~~Set up scene, camera, + renderer~~~~~~~~~~~~~~~~

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer( {antialias: true});
//   const renderer = new THREE.WebGLRenderer({
//     antialias: true,
//     canvas,
//     alpha: true,
//   });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~

const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new GLTFLoader(); // to load 3d models
const loader = new GLTFLoader();

loader.load('assets/excat.gltf', function (gltf) {
    //   scene.add( gltf.scene );
    cat = gltf.scene;
    scene.add(cat);
    cat.scale.set(.5, .5, .5); // scale your model
    cat.position.y = -2; // set initial position
    cat.position.x = 2;
}, undefined, function (error) {

    console.error(error);

});
// light start
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);
// ~~~~~~~~~~~~~~~~ Create Geometry ~~~~~~~~~~~~~~~~
const geometry = new THREE.BoxGeometry(1, 2, 1);
const material = new THREE.MeshBasicMaterial({ color: 355070 });
// const material2 = new THREE.MeshBasicMaterial({ color: 703550 });
const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material);
// scene.add(color(e56b6f))
scene.add(cube);
scene.add(cube2);

cube.position.y = 2;
cube2.position.y = -1;
cube2.position.x = -3;

// texture
const loader1 = new THREE.TextureLoader();
loader1.load('textures/lavatile.jpg', (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.MeshBasicMaterial({
        map: texture,
    });
const cube3 = new THREE.Mesh(geometry, material);
scene.add(cube3);    
    
    cube3.position.y = 2;
cube3.position.x = -2;
cube3.position.z = -3;
   
});

// ~~~~~~~~~~~~~~~~Position Camera~~~~~~~~~~~~~~~~
camera.position.z = 5;



// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ add your animation here ↓↓↓↓

    // camera.position.z += .03;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.03;
    //  cat.rotation.x += 0.0;
    cat.rotation.y += 0.01;
    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
   
    //  loader1.cube3.rotation.x += 0.01;
    // cube3.rotation.y += 0.01;

    // always end animation loop with renderer
    renderer.render(scene, camera);
}

animate(); // execute animation function
