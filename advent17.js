export default function countPackages(carriers, carrierID) {
    let packages = 0;
    const carrier = carriers.find(carrier => carrier[0] === carrierID);
    const workers = carrier[2].map(worker => carriers.find(carrierID => carrierID[0] === worker));
    packages += carrier[1] + workers.reduce((acc, curr) => acc + curr[1], 0);
        
    const amountWorkers = (subWorker) => {
        const workers = subWorker[2].map(worker => carriers.find(carrierID => carrierID[0] === worker));
        packages += workers.reduce((acc, curr) => acc + curr[1], 0);
        workers.forEach(worker => worker[2].length === 0 ? null : amountWorkers(worker));
    } 

    workers.forEach(worker => worker[2].length !== 0 ? amountWorkers(worker) : null);
    

    return packages;
}
