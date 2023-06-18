import { useRef, useEffect } from 'react';
import { FaceMesh } from '@mediapipe/face_mesh';
import * as Facemesh from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import { drawConnectors } from '@mediapipe/drawing_utils';
import Webcam from 'react-webcam';
import {
    GestureRecognizer,
    DrawingUtils,
    FilesetResolver
} from "@mediapipe/tasks-vision"
let gestureRecognizer={};
let runningMode="IMAGE"
const createGestureRecognizer = async () => {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
    );
    gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
            delegate: "GPU"
        },
        runningMode: runningMode
    });
};
let lastVideoTime = -1;
function Test() {
    // Setup references
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    createGestureRecognizer();
    var camera = null;
    const connect = window.drawConnectors;

    const onResults = async (results) => {
        //console.log(results);

        // Set canvas width and height
        canvasRef.current.width = webcamRef.current.video.videoWidth;
        canvasRef.current.height = webcamRef.current.video.videoHeight;

        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d");
        canvasCtx.save();

        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

        if (results.multiFaceLandmarks){
            for (const landmarks of results.multiFaceLandmarks) {
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION,
                    {color: '#C0C0C070', lineWidth: 0.5});
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {color: '#C0C0C070'});
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_IRIS, {color: '#C0C0C070'});
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {color: '#C0C0C070'});
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_IRIS, {color: '#30FF30'});
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {color: '#C0C0C070'});
                drawConnectors(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {color: '#C0C0C070'});
            }
        }
    }

    useEffect(() => {
        let TT={};
        const faceMesh = new FaceMesh({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
            }});

        faceMesh.setOptions({
            maxNumFaces: 3,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        });

        faceMesh.onResults(onResults);

        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null) {
            camera = new cam.Camera(webcamRef.current.video, {
                onFrame:async () => {
                    await faceMesh.send({image:webcamRef.current.video})
                    if (gestureRecognizer) {
                        TT = gestureRecognizer.recognize(webcamRef.current.video);
                        //console.log(TT);
                        if (TT.gestures.length>0)
                            console.log(TT.gestures[0][0].categoryName)
                    }
                },
                width: 1280,
                height: 960
            });
            camera.start();
        }
    });


    return (
        <div className="App">
            <header className='App-header'>
                <Webcam
                    ref={webcamRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: 9,
                        width: 1280,
                        height: 960
                    }}
                />
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: 9,
                        width:1280,
                        height: 960
                    }}
                />
            </header>
        </div>
    );
}

export default Test;