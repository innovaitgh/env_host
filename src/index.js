const envHost = (host, path = "") => {

  if(host.includes("localhost")) return `http://${host}${path}`;

  if(process.env.NODE_ENV === 'production') return `https://${host}.com${path}`
  return `http://${host}.test${path}`
}

module.exports = envHost;
