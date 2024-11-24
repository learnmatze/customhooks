import React, { useRef, useState } from 'react';
import useImageClassifier from './hooks/useImageClassifier.tsx';

const ImageClassifier: React.FC = () => {
    const { classifyImage, results, loading, error } = useImageClassifier();
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
        }
    };

    const handleClassifyClick = () => {
        if (imageRef.current) {
            classifyImage(imageRef.current);
        }
    };

    return (
        <div>
            <h2>Bild-Klassifikator</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageUrl && (
                <div>
                    <img
                        src={imageUrl}
                        alt="Hochgeladenes Bild"
                        ref={imageRef}
                        style={{ maxWidth: '300px', margin: '10px 0' }}
                    />
                    <button onClick={handleClassifyClick} disabled={loading}>
                        Klassifizieren
                    </button>
                </div>
            )}
            {loading && <p>Lädt...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {results.length > 0 && (
                <div>
                    <h3>Ergebnisse:</h3>
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>
                                {result.className} - {Math.round(result.probability * 100)}%
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default ImageClassifier;
