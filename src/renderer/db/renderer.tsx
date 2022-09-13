export default function send(sql: string) {
    return new Promise((resolve) => {
        // calling IPC exposed from preload script
        window.electron.ipcRenderer.once('ipc-example', (arg) => {
            // eslint-disable-next-line no-console
            resolve(arg);
        });
        window.electron.ipcRenderer.sendMessage('ipc-example', [sql]);
    });
}
