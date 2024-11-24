//npm install @tensorflow/tfjs @tensorflow-models/mobilenet

import { useState, useEffect } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

interface ClassificationResult {
    className: string;
    probability: number;
}

const useImageClassifier = () => {
    const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
    const [results, setResults] = useState<ClassificationResult[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadModel = async () => {
            try {
                const mobilenetModel = await mobilenet.load();
                setModel(mobilenetModel);
            } catch (err) {
                setError('Fehler beim Laden des Modells');
            }
        };

        loadModel();
    }, []);
    const classifyImage = async (image: HTMLImageElement | null) => {
        if (model && image) {
            setLoading(true);
            try {
                const predictions = await model.classify(image);
                setResults(predictions);
                setLoading(false);
            } catch (err) {
                setError('Fehler bei der Bildklassifikation');
                setLoading(false);
            }
        }
    };

    return { classifyImage, results, loading, error };
};
export default useImageClassifier;
