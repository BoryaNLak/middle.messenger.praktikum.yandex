const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const isObjectData = (data: unknown, isGet: boolean): data is Record<string, unknown> => isGet && !!data;

function queryStringify(data: Record<string, unknown>): string {
  if (typeof data !== 'object' || !data) {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=
    ${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

type IOptions = {
  timeout: number,
  data?: Document | XMLHttpRequestBodyInit,
};

type IRequestOption = {
  headers?: Record<string, string>,
  method: string,
  data?: Document | XMLHttpRequestBodyInit,
}

class HTTPTransport {
  get(url: string, options: IOptions) {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  }

  post(url: string, options: IOptions) {
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  }

  put(url: string, options: IOptions) {
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  }

  delete(url: string, options: IOptions) {
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  }

  request = (url: string, options: IRequestOption, timeout = 0) => {
    const {
      headers = {
        'Content-Type': 'application/json',
      },
      method, data,
    } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isObjectData(data, isGet)
          ? `${url}${queryStringify(data)}`
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
        xhr.send(data);
      }
    });
  };
}

export default HTTPTransport;
