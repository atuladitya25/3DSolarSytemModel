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
    const far = 2000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    const controls = new OrbitControls(camera, canvas);
    controls.update();

    camera.position.set(0, 0, 200);
    camera.up.set(0, 0, 0);
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

    const ganymedeOrbit = new THREE.Object3D();
    let ganymedeModel = new THREE.Object3D();

    const europaOrbit = new THREE.Object3D();
    let europaModel = new THREE.Object3D();

    const saturnOrbit = new THREE.Object3D();
    const saturnLocale = new THREE.Object3D();
    let saturnModel = new THREE.Object3D();

    const titanOrbit = new THREE.Object3D();
    let titanModel = new THREE.Object3D();

    const uranusOrbit = new THREE.Object3D();
    const uranusLocale = new THREE.Object3D();
    let uranusModel = new THREE.Object3D();

    const neptuneOrbit = new THREE.Object3D();
    const neptuneLocale = new THREE.Object3D();
    let neptuneModel = new THREE.Object3D();

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
        
        gltfLoader.load('./resources/Moon_3D_Nasa.glb', (gltf) => {
            moonModel = gltf.scene;
            moonModel.scale.set(0.00125, 0.00125, 0.00125);
            moonOrbit.add(moonModel);
            moonModel.position.z = 8;
        });
        objects.push(moonModel);

    }

    function addMarsEnvironment() {

        solarSystem.add(marsOrbit);
        objects.push(marsOrbit);

        marsLocale.position.z = 70;
        marsOrbit.add(marsLocale);
        objects.push(marsLocale);

        gltfLoader.load('./resources/Mars_3D_Nasa.glb', (gltf) => {
            marsModel = gltf.scene;
            marsModel.scale.set(0.00125, 0.00125, 0.00125);
            marsLocale.add(marsModel);
        });

        marsLocale.add(deimosOrbit);
        
        gltfLoader.load('./resources/Deimos_3D_Nasa.glb', (gltf) => {
            deimosModel = gltf.scene;
            deimosModel.scale.set(0.025, 0.025, 0.025);   
            deimosOrbit.add(deimosModel);
            deimosModel.position.z = 3;
        });

        objects.push(deimosModel);

    }

    function addVenusEnvironment() {

        solarSystem.add(venusOrbit);
        objects.push(venusOrbit);

        venusLocale.position.z = 35;
        venusOrbit.add(venusLocale);
        objects.push(venusLocale);

        gltfLoader.load('./resources/Venus_3D_Nasa.glb', (gltf) => {
            venusModel = gltf.scene;
            venusModel.scale.set(0.003, 0.003, 0.003);
            venusLocale.add(venusModel);
        });
        objects.push(venusModel);

    }

    function addMercuryEnvironment() {

        solarSystem.add(mercuryOrbit);
        objects.push(mercuryOrbit);

        mercuryLocale.position.z = 20;
        mercuryOrbit.add(mercuryLocale);
        objects.push(mercuryLocale);

        gltfLoader.load('./resources/Mercury_3D_Nasa.glb', (gltf) => {
            mercuryModel = gltf.scene;
            mercuryModel.scale.set(.0025, .0025, .0025);
            mercuryLocale.add(mercuryModel);
        });
        objects.push(mercuryModel);

    }

    function addJupiterEnvironment() {

        solarSystem.add(jupiterOrbit);
        objects.push(jupiterOrbit);

        jupiterLocale.position.z = 120;
        jupiterOrbit.add(jupiterLocale);
        objects.push(jupiterLocale);

        gltfLoader.load('./resources/Jupiter_3D_Nasa.glb', (gltf) => {
            jupiterModel = gltf.scene;
            jupiterModel.scale.set(0.005, 0.005, 0.005);
            jupiterLocale.add(jupiterModel);
        });

        jupiterLocale.add(europaOrbit);
        
        gltfLoader.load('./resources/Europa_3D_Nasa.glb', (gltf) => {
            europaModel = gltf.scene;
            europaModel.scale.set(0.00125, 0.00125, 0.00125);
            europaOrbit.add(europaModel);
            europaModel.position.z = 8;
        });

        jupiterLocale.add(ganymedeOrbit);
        
        gltfLoader.load('./resources/Ganymede_3D_Nasa.glb', (gltf) => {
            ganymedeModel = gltf.scene;
            ganymedeModel.scale.set(0.00125, 0.00125, 0.00125);
            ganymedeOrbit.add(ganymedeModel);
            ganymedeModel.position.z = 10;
        });

    }

    function addSaturnEnvironment() {

        solarSystem.add(saturnOrbit);
        objects.push(saturnOrbit);
    
        saturnLocale.position.z = 160;
        saturnOrbit.add(saturnLocale);
        objects.push(saturnLocale);
    
        gltfLoader.load('./resources/Saturn_3D_Nasa.glb', (gltf) => {
            saturnModel = gltf.scene;
            saturnModel.scale.set(0.0035, 0.0035, 0.0035);
            saturnLocale.add(saturnModel);
        });

        saturnLocale.add(titanOrbit);
        
        gltfLoader.load('./resources/Titan_3D_Nasa.glb', (gltf) => {
            titanModel = gltf.scene;
            titanModel.scale.set(0.00125, 0.00125, 0.00125);
            titanOrbit.add(titanModel);
            titanModel.position.z = 10;
        });
    
    }

    function addUranusEnvironment() {

        solarSystem.add(uranusOrbit);
        objects.push(uranusOrbit);
      
        uranusLocale.position.z = 190;
        uranusOrbit.add(uranusLocale);
        objects.push(uranusLocale);
      
        gltfLoader.load('./resources/Uranus_3D_Nasa.glb', (gltf) => {
            uranusModel = gltf.scene;
            uranusModel.scale.set(0.003, 0.003, 0.003);
            uranusLocale.add(uranusModel);
        });
      
    }

    function addNeptuneEnvironment() {

        solarSystem.add(neptuneOrbit);
        objects.push(neptuneOrbit);
      
        neptuneLocale.position.z = 220;
        neptuneOrbit.add(neptuneLocale);
        objects.push(neptuneLocale);
      
        gltfLoader.load('./resources/Neptune_3D_Nasa.glb', (gltf) => {
            neptuneModel = gltf.scene;
            neptuneModel.scale.set(0.003, 0.003, 0.003);
            neptuneLocale.add(neptuneModel);
        });
      
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
    addSaturnEnvironment();
    addUranusEnvironment();
    addNeptuneEnvironment();

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
        sunModel.rotation.y = time;

        earthOrbit.rotation.y = time/4; 
        earthModel.rotation.y = time*4;

        moonOrbit.rotation.y = time*4;

        marsOrbit.rotation.y = time/6;
        marsModel.rotation.y = time*2;

        deimosOrbit.rotation.y = time*3;

        venusOrbit.rotation.y = time/3; 
        venusModel.rotation.y = time*4;

        mercuryOrbit.rotation.y = time/2;
        mercuryModel.rotation.y = time*6;

        jupiterOrbit.rotation.y = time/10;
        jupiterModel.rotation.y = time*6;

        europaOrbit.rotation.y = time*3;
        ganymedeOrbit.rotation.y = time*2.5;

        saturnOrbit.rotation.y = time/14;
        saturnModel.rotation.y = time*6;

        titanOrbit.rotation.y = time*3;

        uranusOrbit.rotation.y = -time/18;
        uranusModel.rotation.y = -time*6;

        neptuneOrbit.rotation.y = time/21;
        neptuneModel.rotation.y = time*6;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

}

main();