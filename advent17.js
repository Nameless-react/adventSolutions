export default function countPackages(carriers, carrierID) {
    let packages = 0;
    const {1:amount, 2:workers } = carriers.find(carrier => carrier[0] === carrierID);

    const Amountworkers = workers.map(worker => carriers.find(carrierID => carrierID[0] === worker));
    packages += amount + Amountworkers.reduce((acc, curr) => acc + curr[1], 0);
        
    const amountWorkers = (subWorker) => {
        const workers = subWorker[2].map(worker => carriers.find(carrierID => carrierID[0] === worker));
        packages += workers.reduce((acc, curr) => acc + curr[1], 0);
        workers.forEach(worker => worker[2].length === 0 ? null : amountWorkers(worker));
    } 

    Amountworkers.forEach(worker => worker[2].length !== 0 ? amountWorkers(worker) : null);
    

    return packages;
}
