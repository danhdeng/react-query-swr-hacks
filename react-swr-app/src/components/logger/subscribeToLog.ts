export const subscribeToLog = () => {
    let logStorage=[] as any;
    let logIndex = 0;
    setInterval(() =>{
        logStorage.push(`${logIndex}: ${Date.now()}`);
        logIndex++;
        logStorage = logStorage.slice(-5);
    },500);

   
  return ()=>logStorage;
}
