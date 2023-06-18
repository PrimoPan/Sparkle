import { useRef, useEffect } from 'react';
import { FaceMesh } from '@mediapipe/face_mesh';
import * as Facemesh from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import { drawConnectors } from '@mediapipe/drawing_utils';
import Webcam from 'react-webcam';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AUDIO from "@mediapipe/tasks-audio"

import {
    GestureRecognizer,
    DrawingUtils,
    FilesetResolver,
    PoseLandmarker
} from "@mediapipe/tasks-vision"





const { AudioClassifier, AudioClassifierResult} = AUDIO;

let audioClassifier= {}
let audioCtx= {}

let gestureRecognizer={};
let poseLandmarker= null
let runningMode="IMAGE"

let TT={};
let PP={};
const createAudioClassifier = async () => {
    const audio = await AUDIO.FilesetResolver.forAudioTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-audio@0.10.0/wasm"
    );

    audioClassifier = await AudioClassifier.createFromOptions(audio, {
        baseOptions: {
            modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/audio_classifier/yamnet/float32/1/yamnet.tflite"
        }
    });
};

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
    poseLandmarker=await PoseLandmarker.createFromOptions(
        vision,
        {
            baseOptions: {
                modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/latest/pose_landmarker_heavy.task`,
                delegate: "GPU"
            },
            runningMode: runningMode,
            numPoses: 1
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
        if (webcamRef.current.video===null) return ;
        canvasRef.current.width = webcamRef.current.video.videoWidth;
        canvasRef.current.height = webcamRef.current.video.videoHeight;

        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d");
        canvasCtx.save();

        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
        if (PP)
           // if (PP.landmarks[0].length>=30){

            if (PP.landmarks!=undefined) {
                //console.log(PP.landmarks[0]);
                let arr = PP.landmarks[0];
                if (arr.length>=20)
                for (let cor of arr) {
                    let x = cor.x *  canvasRef.current.width;
                    let y = cor.y *canvasRef.current.height;
                    //console.log(x, ' ', y)
                    canvasCtx.beginPath()
                    let radius=5
                    canvasCtx.arc(x,y,radius,0,2*Math.PI)
                    canvasCtx.fillStyle="#ff0"
                    canvasCtx.fill()
                }
            }



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

        const faceMesh = new FaceMesh({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
            }});

        faceMesh.setOptions({
            maxNumFaces: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        });

        faceMesh.onResults(onResults);

        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null) {
            camera = new cam.Camera(webcamRef.current.video, {
                onFrame:async () => {
                    if (webcamRef.current.video==="undefined " || webcamRef.current.video===null) return ;
                    await faceMesh.send({image:webcamRef.current.video})
                    if (gestureRecognizer) {
                        TT = gestureRecognizer.recognize(webcamRef.current.video);
                        //console.log(TT);
                        if (TT.gestures.length>0);
                           // console.log(TT.gestures[0][0].categoryName)
                    }
                    if (poseLandmarker)
                    {
                        PP=poseLandmarker.detect(webcamRef.current.video)

                    }
                },
                width: 640,
                height: 480
            });
            camera.start();
        }
    });


    return (
        <Container className="vh-100"   fluid style={{textAlign:"center",background:"linear-gradient(180deg, #B8FFFD 0%, #FFFFFF 100%)"}}>
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
                        width: 640,
                        height: 480
                    }}
                />

            <Spinner animation="border" role="status" style={{
                position:"absolute",
                top:"20vh",
                left:"48vw",
            }} variant="info" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>


            <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        paddingTop:"auto",
                        marginTop:"auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: 9,
                        width:640,
                        height: 480
                    }}
                />
        </Container>
    );
}

export default Test;