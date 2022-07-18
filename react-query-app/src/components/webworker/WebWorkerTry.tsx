import {useSampleWorker} from './useSampleWorker';
export default function WebWorkerComp() { 
    const sampleWorker = useSampleWorker();
    
    // ...
    sampleWorker.addTotal(1000, 1000).then(result => console.log(result)) // result is of type 'string'
    return(
        <div>Web Worker</div>

    );
}