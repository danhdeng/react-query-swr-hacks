
export function createStopWatch(){
    const startTime=Date.now();
    return ()=>{
        return Math.round((Date.now() - startTime)/1000);
    }

}