import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as THREE from 'three';
import {BrowserRouter} from "react-router-dom";

//* THREE *//

//Scene
let scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH,
    renderer, container;

//Light
let hemisphereLight, shadowLight;

function createScene () {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;


    scene = new THREE.Scene();
    aspectRatio = WIDTH/HEIGHT;
    nearPlane = 1;
    farPlane = 10000;

    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    );

    // Set the position of the camera
    camera.position.set( 0, 50, 10 );

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
    });

    renderer.setSize(WIDTH, HEIGHT);

    renderer.shadowMap.enabled = true;

    container = document.getElementById('world');
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', handleWindowResize, false);
}
function handleWindowResize () {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

function createLights () {

    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, 1)
    shadowLight = new THREE.DirectionalLight(0xffffff, .9);

    shadowLight.position.set(150, 350, 350);

    shadowLight.castShadow = true;

    // define the visible area of the projected shadow
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;

    // define the resolution of the shadow;
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;

    scene.add(hemisphereLight);
    scene.add(shadowLight);
}

let num = 80;

function Sphere () {
    let geom = new THREE.SphereGeometry(3, 32,16);
    let mat = new THREE.MeshNormalMaterial({flatShading: true });
    // let mesh = new THREE.Mesh(geom,mat);
    // scene.add(mesh);
    for (let i = 0; i < num; i ++) {
        let mesh = new THREE.Mesh(geom,mat);
        mesh.position.x = THREE.MathUtils.randFloatSpread(60);
        mesh.position.y = THREE.MathUtils.randFloatSpread(200)
        mesh.position.z = THREE.MathUtils.randFloatSpread(60)
        mesh.rotation.x = THREE.MathUtils.randFloatSpread(Math.PI);
        scene.add(mesh);
    }
}

function animate () {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.0004;
    scene.rotation.x += 0.00004;
    renderer.render(scene, camera);
}


function movCam(event) {

    // event.preventDefault();
    camera.position.y += event.deltaY * -0.01;
    // camera.position.y.clamp(0,-30,30);

}

export function init () {

    createScene();
    createLights()
    Sphere();


    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.update();

    animate();
}


window.addEventListener('load', init, false);
window.addEventListener('wheel', movCam, false);

//* THREE *//

//** REACT **//

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

//** REACT **//