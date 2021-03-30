import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/controls/OrbitControls.js';

function main() {

    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    const gltfLoader = new GLTFLoader();

    const fov = 40;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    const controls = new OrbitControls(camera, canvas);
    controls.update();

    camera.position.set(0, 0, 140);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const objects = [];

        // use just one sphere for everything
    const radius = 1;
    const widthSegments = 60;
    const heightSegments = 60;
    const sphereGeometry = new THREE.SphereGeometry(
        radius, widthSegments, heightSegments);

    //const textureLoader = new THREE.TextureLoader();
    //const glowMap = textureLoader.load("./resources/glow.png");

    const solarSystem = new THREE.Object3D();
    let sunModel = new THREE.Object3D();

    const earthOrbit = new THREE.Object3D();
    const earthLocale = new THREE.Object3D();
    let earthModel = new THREE.Object3D();

    const moonOrbit = new THREE.Object3D();
    let moonModel = new THREE.Object3D();

    const marsOrbit = new THREE.Object3D();
    const marsLocale = new THREE.Object3D();
    let marsModel = new THREE.Object3D();

    const deimosOrbit = new THREE.Object3D();
    let deimosModel = new THREE.Object3D();

    const venusOrbit = new THREE.Object3D();
    const venusLocale = new THREE.Object3D();
    let venusModel = new THREE.Object3D();

    const mercuryOrbit = new THREE.Object3D();
    const mercuryLocale = new THREE.Object3D();
    let mercuryModel = new THREE.Object3D();

    const jupiterOrbit = new THREE.Object3D();
    const jupiterLocale = new THREE.Object3D();
    let jupiterModel = new THREE.Object3D();

    function addSunEnvironment() {

        scene.add(solarSystem);
        objects.push(solarSystem);

        gltfLoader.load('./resources/Sun_3D_Nasa.glb', (gltf) => {
            sunModel = gltf.scene;
            sunModel.scale.set(0.015, 0.015, 0.015); 
            solarSystem.add(sunModel);

            // const spriteMaterial = new THREE.SpriteMaterial( 
            //     { 
            //         map: glowMap,
            //         color: 0xfffa99, transparent: false, blending: THREE.AdditiveBlending
            //     });
            // const sprite = new THREE.Sprite( spriteMaterial );
            // sprite.scale.set(100, 100, 100);
            // solarSystem.add(sprite);
        });
    }

    function addEarthEnvironment() {

        solarSystem.add(earthOrbit);
        objects.push(earthOrbit);

        gltfLoader.load('./resources/Earth_3D_Nasa.glb', (gltf) => {
            earthModel = gltf.scene;
            earthModel.scale.set(0.0025, 0.0025, 0.0025);
            earthLocale.add(earthModel);
        });
        
        earthLocale.position.z = 50;
        earthOrbit.add(earthLocale);
        objects.push(earthLocale);

        earthLocale.add(moonOrbit);
        
        const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
        moonModel = new THREE.Mesh(sphereGeometry, moonMaterial);
        moonModel.position.z = 5;
        moonModel.scale.set(.5, .5, .5);
        moonOrbit.add(moonModel);
        objects.push(moonModel);

    }

    function addMarsEnvironment() {

        solarSystem.add(marsOrbit);
        objects.push(marsOrbit);

        marsLocale.position.z = 70;
        marsOrbit.add(marsLocale);
        objects.push(marsLocale);

        const marsMaterial = new THREE.MeshPhongMaterial({color: 0xE27B58, emissive: 0x112244});
        marsModel = new THREE.Mesh(sphereGeometry, marsMaterial);
        marsModel.scale.set(.75, .75, .75);
        marsLocale.add(marsModel);
        objects.push(marsModel);

        marsLocale.add(deimosOrbit);
        
        const deimosMaterial = new THREE.MeshPhongMaterial({color: 0xE27B58, emissive: 0x222222});
        deimosModel = new THREE.Mesh(sphereGeometry, deimosMaterial);
        deimosModel.position.z = 3;
        deimosModel.scale.set(.15, .15, .15);
        deimosOrbit.add(deimosModel);
        objects.push(deimosModel);

    }

    function addVenusEnvironment() {

        solarSystem.add(venusOrbit);
        objects.push(venusOrbit);

        venusLocale.position.z = 35;
        venusOrbit.add(venusLocale);
        objects.push(venusLocale);

        const venusMaterial = new THREE.MeshPhongMaterial({color: 0x00FF00, emissive: 0x112244});
        venusModel = new THREE.Mesh(sphereGeometry, venusMaterial);
        venusModel.scale.set(.8, .8, .8);
        venusLocale.add(venusModel);
        objects.push(venusModel);

    }

    function addMercuryEnvironment() {

        solarSystem.add(mercuryOrbit);
        objects.push(mercuryOrbit);

        mercuryLocale.position.z = 20;
        mercuryOrbit.add(mercuryLocale);
        objects.push(mercuryLocale);

        const mercuryMaterial = new THREE.MeshPhongMaterial({color: 0x0000FF, emissive: 0x112244});
        mercuryModel = new THREE.Mesh(sphereGeometry, mercuryMaterial);
        mercuryModel.scale.set(.5, .5, .5);
        mercuryLocale.add(mercuryModel);
        objects.push(mercuryModel);

    }

    function addJupiterEnvironment() {

        solarSystem.add(jupiterOrbit);
        objects.push(jupiterOrbit);

        jupiterLocale.position.z = 120;
        jupiterOrbit.add(jupiterLocale);
        objects.push(jupiterLocale);

        const jupiterMaterial = new THREE.MeshPhongMaterial({color: 0xFF0000, emissive: 0x112244});
        jupiterModel = new THREE.Mesh(sphereGeometry, jupiterMaterial);
        jupiterModel.scale.set(2, 2, 2);
        jupiterLocale.add(jupiterModel);
        objects.push(jupiterModel);

    }

    const color = 0xFFFFFF;
    const intensity = 8;
    const light = new THREE.PointLight(color, intensity);
    scene.add(light);

    addSunEnvironment();
    addEarthEnvironment();
    addMarsEnvironment();
    addVenusEnvironment();
    addMercuryEnvironment();
    addJupiterEnvironment();

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
        renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render(time) {
        time *= 0.001;

        if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        }

        //solarSystem.rotation.x = -time/4;
        sunModel.rotation.x = -time;

        earthOrbit.rotation.x = -time/4; 
        earthModel.rotation.x = -time*4;

        moonOrbit.rotation.x = -time*4;

        marsOrbit.rotation.x = -time/6;
        marsModel.rotation.x = -time*2;

        deimosOrbit.rotation.x = -time*3;

        venusOrbit.rotation.x = -time/3; 
        venusModel.rotation.x = -time*4;

        mercuryOrbit.rotation.x = -time/2;
        mercuryModel.rotation.x = -time*6;

        jupiterOrbit.rotation.x = -time/10;
        jupiterModel.rotation.x = -time*6;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

}

main();