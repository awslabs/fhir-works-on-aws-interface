import { createLogger, format, transports } from 'winston';

const { combine, splat, timestamp, printf } = format;

const myFormat = printf(info => {
    let msg = `[${info.level}] : ${info.message} ${info.timestamp} `;
    if (info.metadata) {
        msg += JSON.stringify(info.metadata);
    }
    return msg;
});

// eslint-disable-next-line import/prefer-default-export
export function getLogger(metadata?: any) {
    const logger = createLogger({
        level: 'debug',
        format: combine(format.colorize(), splat(), timestamp(), myFormat),
        transports: [new transports.Console()],
        defaultMeta: metadata,
    });
    return logger;
}
