const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

function queryStringify(data) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=
    ${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

type IOptions = {
  timeout: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Document | XMLHttpRequestBodyInit | null,
};

type IRequestOption = {
  headers?: object,
  method: string,
  data?: Document | XMLHttpRequestBodyInit | null,
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
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
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
