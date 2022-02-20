import * as utils from './utils';

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const isObjectData = (data: unknown, isGet: boolean): data is Record<string, unknown> => isGet && !!data;

type IOptions = {
  timeout?: number,
  data?: Record<string, any>,
};

type IRequestOption = {
  headers?: Record<string, string>,
  method: string,
  data?: Record<string, any>,
}

class HTTPTransport {
  get(url: string, options: IOptions) {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  }

  post(url: string, options: IOptions) {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  }

  put(url: string, options: IOptions) {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  }

  delete(url: string, options: IOptions) {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  }

  request(url: string, options: IRequestOption, timeout = 0): Promise<XMLHttpRequest> {
    const {
      headers = {
        'Content-Type': 'application/json',
      },
      method, data,
    } = options;

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isObjectData(data, isGet)
          ? `${url}${utils.queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(xhr);
        } else {
          reject(xhr);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }

  checkResponse(res: XMLHttpRequest): Promise<XMLHttpRequest> {
    if (res.status >= 200 && res.status < 300) {
      return Promise.resolve(res);
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(res);
  }
}

export default HTTPTransport;
