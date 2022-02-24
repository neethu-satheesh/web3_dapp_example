const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (Number.isNaN(port)) return val; // named port
    if (port >= 0) return port; // port number
    return false;
}

export default normalizePort;