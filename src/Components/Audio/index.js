import audio from "@mediapipe/tasks-audio"
import { useRef, useEffect } from 'react';
const { AudioClassifier, AudioClassifierResult,    FilesetResolver} = audio;


let audioClassifier=null
//let wasm
const createAudioClassifier = async () => {
     let wasm = await FilesetResolver.forAudioTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-audio/wasm"
    ).catch(e=>console.warn(e))
    if (!wasm) {
        console.log("none")
        return ;
    }
    console.log(wasm)
    audioClassifier = await AudioClassifier.createFromOptions(wasm, {
        baseOptions: {
            modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/audio_classifier/yamnet/float32/1/yamnet.tflite"
        }
    });
}


function Audio()
{

    createAudioClassifier()
    //create();
    return (
        <p>
            hello world
        </p>
    )
}
export default Audio