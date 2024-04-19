class Log{
    static logmsg(logmsg, recentLogMsg){
        const newLog = document.createElement("p");
        const logText = document.createTextNode(logmsg);

        newLog.appendChild(logText);
        recentLogMsg.insertBefore(newLog, recentLogMsg.firstChild);
    }
}