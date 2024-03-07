const serverInfo = {
    ip: 'your-server-ip',
    version: '1.19',
    playerCount: 15
};

document.getElementById('server-ip').innerText = `IP: ${serverInfo.ip}`;
document.getElementById('server-version').innerText = `Minecraft Version: ${serverInfo.version}`;
document.getElementById('player-count').innerText = `Current Players: ${serverInfo.playerCount}`;
