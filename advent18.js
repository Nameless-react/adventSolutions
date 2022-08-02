export default function fixFiles(files) {
    const fileMap = {};
    files.forEach(file => {
        fileMap[file] = (fileMap[file] || 0) + 1;
    });

    const number = (file) =>  fileMap[file] - 1 === 0 ? "" : `(${fileMap[file] -= 1})`
    const finalFormat = files.reverse().map(file => `${file}${number(file)}`)
    return finalFormat.reverse();
}

