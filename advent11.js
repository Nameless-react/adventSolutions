export default function shouldBuyFidelity(times) {
    const normal = times * 12;
    let fidelity = 250;
    for (let i = 0; i < times; i++) {
        const percentage = i + 1;
        fidelity += (12 * 0.75**percentage);
    }
    if (fidelity < normal) return true;
    return false;
};