

uniform float uTime;
uniform float uScrollPos;
uniform vec3 uColor;

varying float vTime;
varying vec3 vColor;
varying float vScrollPos;
varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
    vTime = uTime;
    vScrollPos = uScrollPos;
    vColor = uColor;
}