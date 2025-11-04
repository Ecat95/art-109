// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let cat, scene, camera, renderer, cube, sphere;


// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {

    // ~~~~~~Set up scene, camera, + renderer ~~~~~~

    scene = new THREE.Scene();

        scene.background = new THREE.Color(355070);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // ~~ add directional light 
    const lightRight = new THREE.DirectionalLight(0xffffff, 3);
    lightRight.position.set(3, 4, 5);
    scene.add(lightRight);

    const helperRight = new THREE.DirectionalLightHelper(lightRight, 6);
    // scene.add(helperRight); // comment out when done placing light


    // ~~ add directional light 
    const lightLeft = new THREE.DirectionalLight(0xff00000, 3);
    lightLeft.position.set(-3, 4, 5);
    scene.add(lightLeft);

    const helperLeft = new THREE.DirectionalLightHelper(lightLeft, 5);
    // scene.add(helperLeft); // comment out when done placing light



    // ~~~~~~ Initiate add-ons ~~~~~~

    const controls = new OrbitControls(camera, renderer.domElement);
//     const loader = new GLTFLoader(); // to load 3d models


//  loader.load('assets/excat.gltf', function (gltf) {
//         cat = gltf.scene;
//         scene.add(cat);
//         cat.scale.set(.5, .5, .5); // scale your model
//         cat.position.y = -2; // set initial position
//     });


    // ~~~~~~ Create Geometry ~~~~~~
    const geometry1 = new THREE.BoxGeometry(2, 2, 2);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    const texture1 = new THREE.TextureLoader().load('textures/lavatile.jpg');

    const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
    // texture.minFilter = THREE.LinearFilter; // makes image sharper but aliased

    cube = new THREE.Mesh(geometry1, material1);
    scene.add(cube);
    cube.scale.set(.5,.5,.5);

cube.position.x += 2;
cube.position.y += 2;
cube.position.z += 2;

const texture = new THREE.TextureLoader().load('textures/ice002.jpg');

const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { map:texture} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
sphere.scale.set(.2,.2,.2);

sphere.position.z += -6;

    // ~~~~~~Position Camera~~~~~~
    camera.position.z = 5;

}




// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ add your animation here ↓↓↓↓

    // camera.position.z += .03;
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.005;

 if (sphere) {
        sphere.rotation.x += 0.7;
    }


    // always end animation loop with renderer
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);

init(); // execute initialize function
animate(); // execute animation function
