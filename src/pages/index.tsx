import { useEffect, useState } from 'react';

export default function Home() {
    const [result, setResult] = useState('');

    useEffect(() => {
        const loadWasm = async () => {
            try {
                const wasm = await import('../public/wasm/rust_wasm.wasm');
                const instance = await WebAssembly.instantiateStreaming(fetch(wasm), {});
                const { add } = instance.instance.exports;
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

