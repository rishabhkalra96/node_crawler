import winston from "winston";


class Logger {
    private static loggerInstance: Logger

    private static transports = [
        new winston.transports.Console()
    ]

    private constructor() {}

    private static createLogger() {
        return winston.createLogger({
            transports: this.transports
        })
    }

    static getInstance(): Logger {
        if (!Logger.loggerInstance) {
            Logger.loggerInstance = this.createLogger();
        }
        return Logger.loggerInstance;
      }

      public info(message: string) {
          Logger.getInstance().info(message);
      }
}

export const logger = Logger.getInstance();
