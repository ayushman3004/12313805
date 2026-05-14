//log(stack,level,package,message)
const log = (stack, level, packageName, message) => {
    const res = axios.post(ProcessingInstruction.env.logginApiUrl, {
        stack,
        level,
        packageName,
        message
    });
};

export default log;