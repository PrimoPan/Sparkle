import audio from "@mediapipe/tasks-audio"
import { useRef, useEffect } from 'react';
const { AudioClassifier, AudioClassifierResult,    FilesetResolver} = audio;


let audioClassifier=null

const createAudioClassifier = async () => {
    const AUDIO = await FilesetResolver.forAudioTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-audio/wasm"
    ).catch()
    {
        audioClassifier = await AudioClassifier.createFromOptions(AUDIO, {
            baseOptions: {
                modelAssetPath:
                    "https://tfhub.dev/google/lite-model/yamnet/classification/tflite/1?lite-format=tflite"
            }
        }).catch()
        {
            console.log("yes")
        }
    }
};

function Audio()
{

    createAudioClassifier()
    return (
        <p>
            hello world
        </p>
    )
}
export default Audio