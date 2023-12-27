import { handleDefaultError } from "./error-handler";

type HookFunction<T> = (...args: any[]) => T;

type ErrorCustomizeFunction = (error: any) => any;

// get
// set

type ErrorHandlers = {
  [errorCode: number]: ErrorCustomizeFunction;
};

class DecoratedHook<T> {
  private hook: HookFunction<T>;
  private preFunction: ((...args: any[]) => any) | null;
  private errorHandlers: ErrorHandlers;
  private catchFunction: ErrorCustomizeFunction | null;

  constructor(hook: HookFunction<T>) {
    this.hook = hook;
    this.preFunction = null;
    this.errorHandlers = {};
    this.catchFunction = null;
  }

  pre = (func: (...args: any[]) => any): this => {
    this.preFunction = func;
    return this;
  };

  errorCustomize = (handlers: ErrorHandlers): this => {
    this.errorHandlers = handlers;
    return this;
  };

  catch = (func: ErrorCustomizeFunction): this => {
    this.catchFunction = func;
    return this;
  };

  then = async (...args: any[]): Promise<any> => {
    try {
      let modifiedArgs = args;
      if (this.preFunction) {
        modifiedArgs = await this.preFunction(args);
      }

      const result = await this.hook(...modifiedArgs);

      return result;
    } catch (error: {status: number}) {
      if (Object.keys(this.errorHandlers).length > 0 && error.status && this.errorHandlers[error.status]) {
        return this.errorHandlers[error.status](error);
      } else if (this.catchFunction) {
        return this.catchFunction(error);
      }

      throw error;
    }
  };
}

const decorator = <T>(hook: HookFunction<T>): DecoratedHook<T> => {
  const decoratedHook = new DecoratedHook<T>(hook);

  decoratedHook.catch((error) => {
    if (error.status) {
      handleDefaultError(error.status);
    } else {
      throw error;
    }
  });

  return decoratedHook;
};

export default decorator;

