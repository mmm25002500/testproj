import { useEffect, useState } from 'react';

export default function Home() {
    const [result, setResult] = useState('');

    useEffect(() => {
        const loadWasm = async () => {
            try {
                const response = await fetch('/wasm/rust_wasm.wasm');
                const wasm = await WebAssembly.instantiateStreaming(response);
                const { add } = wasm.instance.exports;
                setResult(add(2, 3));
            } catch (err) {
                console.error('Failed to load wasm module', err);
            }
        };
        loadWasm();
    }, []);

    return (
        <div>
            <h1>Result: {result}</h1>
        </div>
    );
}

