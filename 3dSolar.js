import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';

function main() {

    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 40;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 100);
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

    const solarSystem = new THREE.Object3D();
    scene.add(solarSystem);
    objects.push(solarSystem);
        
    const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    sunMesh.scale.set(5, 5, 5);  // make the sun large
    solarSystem.add(sunMesh);
    objects.push(sunMesh);

    const earthOrbit = new THREE.Object3D();
    earthOrbit.position.z = 30;
    solarSystem.add(earthOrbit);
    objects.push(earthOrbit);

    const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    earthOrbit.add(earthMesh);
    objects.push(earthMesh);

    const moonOrbit = new THREE.Object3D();
    moonOrbit.position.z = 5;
    earthOrbit.add(moonOrbit);
    
    const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
    const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
    moonMesh.scale.set(.5, .5, .5);
    moonOrbit.add(moonMesh);
    objects.push(moonMesh);

    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.PointLight(color, intensity);
    scene.add(light);

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

        solarSystem.rotation.x = -time/4;
        sunMesh.rotation.x = -time;
        earthMesh.rotation.x = -time;
        earthOrbit.rotation.x = -time*4;
        moonMesh.rotation.x = -time;
        moonOrbit.rotation.x = -time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

}

main();