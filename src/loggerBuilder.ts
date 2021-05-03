import { createLogger, format } from 'winston';
import Transport from 'winston-transport';

const { combine, splat, timestamp, printf } = format;

const myFormat = printf(info => {
    let msg = `${info.message} ${info.timestamp} `;
    if (info.meta) {
        msg += JSON.stringify(info.meta);
    }
    return msg;
});

class SimpleConsole extends Transport {
    log(info: any, callback: () => void) {
        setImmediate(() => this.emit('logged', info));
        const msg = info[Symbol.for('message')];

        // Use console here so request ID and log level can be automatically attached in CloudWatch log
        switch (info[Symbol.for('level')]) {
            case 'debug':
                console.debug(msg);
                break;
            case 'info':
                console.info(msg);
                break;
            case 'warn':
                console.warn(msg);
                break;
            case 'error':
                console.error(msg);
                break;
            default:
                console.log(msg);
                break;
        }

        if (callback) {
            callback();
        }
    }
}

// eslint-disable-next-line import/prefer-default-export
export function getLogger(metadata?: any) {
    return createLogger({
        level: process.env.LOG_LEVEL,
        format: combine(format.colorize(), splat(), timestamp(), format.json(), myFormat),
        transports: [new SimpleConsole({})],
        defaultMeta: metadata,
    });
}
