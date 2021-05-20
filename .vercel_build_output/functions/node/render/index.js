var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var pairSplitRegExp = /; */;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var pairs = str.split(pairSplitRegExp);
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eq_idx = pair.indexOf("=");
        if (eq_idx < 0) {
          continue;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] == '"') {
          val = val.slice(1, -1);
        }
        if (obj[key] == void 0) {
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// .svelte-kit/vercel/entry.js
__markAsModule(exports);
__export(exports, {
  default: () => entry_default
});

// node_modules/@sveltejs/kit/dist/node.js
function getRawBody(req) {
  return new Promise((fulfil, reject) => {
    const h = req.headers;
    if (!h["content-type"]) {
      fulfil(null);
      return;
    }
    req.on("error", reject);
    const length = Number(h["content-length"]);
    let data;
    if (!isNaN(length)) {
      data = new Uint8Array(length);
      let i = 0;
      req.on("data", (chunk) => {
        data.set(chunk, i);
        i += chunk.length;
      });
    } else {
      if (h["transfer-encoding"] === void 0) {
        fulfil(null);
        return;
      }
      data = new Uint8Array(0);
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data.length + chunk.length);
        new_data.set(data);
        new_data.set(chunk, data.length);
        data = new_data;
      });
    }
    req.on("end", () => {
      const [type] = h["content-type"].split(/;\s*/);
      if (type === "application/octet-stream") {
        fulfil(data);
      }
      const decoder = new TextDecoder(h["content-encoding"] || "utf-8");
      fulfil(decoder.decode(data));
    });
  });
}

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var {Readable} = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const {size} = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], {type: String(type).toLowerCase()});
    Object.assign(wm.get(blob), {size: span, parts: blobParts});
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: {enumerable: true},
  type: {enumerable: true},
  slice: {enumerable: true}
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error3 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error3;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const {buffer, byteOffset, byteLength} = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  bodyUsed: {enumerable: true},
  arrayBuffer: {enumerable: true},
  blob: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let {body} = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error3) {
    if (error3 instanceof FetchBaseError) {
      throw error3;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error3.message}`, "system", error3);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error3) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error3.message}`, "system", error3);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let {body} = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({highWaterMark});
    p2 = new import_stream.PassThrough({highWaterMark});
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request2) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request2[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request2) => {
  const {body} = request2;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request2[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, {body}) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_HTTP_TOKEN"});
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_CHAR"});
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = {enumerable: true};
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: {enumerable: true},
  url: {enumerable: true},
  headers: {enumerable: true},
  redirect: {enumerable: true},
  clone: {enumerable: true},
  signal: {enumerable: true}
});
var getNodeRequestOptions = (request2) => {
  const {parsedURL} = request2[INTERNALS];
  const headers = new Headers(request2[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request2.body === null && /^(post|put)$/i.test(request2.method)) {
    contentLengthValue = "0";
  }
  if (request2.body !== null) {
    const totalBytes = getTotalBytes(request2);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request2.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let {agent} = request2;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request2.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request2.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request2 = new Request(url, options_);
    const options2 = getNodeRequestOptions(request2);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request2.url);
      const response2 = new Response2(data, {headers: {"Content-Type": data.typeFull}});
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const {signal} = request2;
    let response = null;
    const abort = () => {
      const error3 = new AbortError("The operation was aborted.");
      reject(error3);
      if (request2.body && request2.body instanceof import_stream.default.Readable) {
        request2.body.destroy(error3);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error3);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request2.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request2.url);
        switch (request2.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request2.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error3) {
                reject(error3);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request2.counter >= request2.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request2.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request2.headers),
              follow: request2.follow,
              counter: request2.counter + 1,
              agent: request2.agent,
              compress: request2.compress,
              method: request2.method,
              body: request2.body,
              signal: request2.signal,
              size: request2.size
            };
            if (response_.statusCode !== 303 && request2.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request2.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
        reject(error3);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request2.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request2.size,
        counter: request2.counter,
        highWaterMark: request2.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request2.compress || request2.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
          reject(error3);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error3) => {
              reject(error3);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error3) => {
              reject(error3);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request2);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error3,
  branch,
  page: page2
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error3) {
    error3.stack = options2.get_stack(error3);
  }
  if (branch) {
    branch.forEach(({node, loaded, fetched, uses_credentials}) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page: page2,
      components: branch.map(({node}) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = {head: "", html: "", css: {code: "", map: null}};
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"></script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error4) => {
      throw new Error(`Failed to serialize session data: ${error4.message}`);
    })},
				host: ${page2 && page2.host ? s$1(page2.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error3)},
					nodes: [
						${branch.map(({node}) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page2.host ? s$1(page2.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page2.path)},
						query: new URLSearchParams(${s$1(page2.query.toString())}),
						params: ${s$1(page2.params)}
					}
				}` : "null"}
			});
		</script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({url, body: body2, json}) => {
    return body2 ? `<script type="svelte-data" url="${url}" body="${hash(body2)}">${json}</script>` : `<script type="svelte-data" url="${url}">${json}</script>`;
  }).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({head, body})
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error3) {
  if (!error3)
    return null;
  let serialized = try_serialize(error3);
  if (!serialized) {
    const {name, message, stack} = error3;
    serialized = try_serialize({name, message, stack});
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error3 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error3 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error3}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return {status: 500, error: error3};
    }
    return {status, error: error3};
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base2, path) {
  const baseparts = path[0] === "/" ? [] : base2.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request: request2,
  options: options2,
  state,
  route,
  page: page2,
  node,
  $session,
  context,
  is_leaf,
  is_error,
  status,
  error: error3
}) {
  const {module: module2} = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page: page2,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request2.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page2.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = {...opts.headers};
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request2.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request2.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const rendered = await respond({
              host: request2.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: {...context}
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error3;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({request: request2, options: options2, state, $session, status, error: error3}) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page2 = {
    host: request2.host,
    path: request2.path,
    query: request2.query,
    params: {}
  };
  const loaded = await load_node({
    request: request2,
    options: options2,
    state,
    route: null,
    page: page2,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request: request2,
      options: options2,
      state,
      route: null,
      page: page2,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error3
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error3,
      branch,
      page: page2
    });
  } catch (error4) {
    options2.handle_error(error4);
    return {
      status: 500,
      headers: {},
      body: error4.stack
    };
  }
}
async function respond$1({request: request2, options: options2, state, $session, route}) {
  const match = route.pattern.exec(request2.path);
  const params = route.params(match);
  const page2 = {
    host: request2.host,
    path: request2.path,
    query: request2.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request: request2,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error3;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request: request2,
              options: options2,
              state,
              route,
              page: page2,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({status, error: error3} = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error3 = e;
          }
          if (error3) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request: request2,
                    options: options2,
                    state,
                    route,
                    page: page2,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error3
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request: request2,
              options: options2,
              state,
              $session,
              status,
              error: error3
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error3,
      branch: branch && branch.filter(Boolean),
      page: page2
    });
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request: request2,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
}
async function render_page(request2, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request2.path}`
    };
  }
  const $session = await options2.hooks.getSession(request2);
  if (route) {
    const response = await respond$1({
      request: request2,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request: request2,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request2.path}`)
    });
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
async function render_route(request2, route) {
  const mod = await route.load();
  const handler = mod[request2.method.toLowerCase().replace("delete", "del")];
  if (handler) {
    const match = route.pattern.exec(request2.path);
    const params = route.params(match);
    const response = await handler({...request2, params});
    if (response) {
      if (typeof response !== "object") {
        return error(`Invalid response from route ${request2.path}: expected an object, got ${typeof response}`);
      }
      let {status = 200, body, headers = {}} = response;
      headers = lowercase_keys(headers);
      const type = headers["content-type"];
      if (type === "application/octet-stream" && !(body instanceof Uint8Array)) {
        return error(`Invalid response from route ${request2.path}: body must be an instance of Uint8Array if content type is application/octet-stream`);
      }
      if (body instanceof Uint8Array && type !== "application/octet-stream") {
        return error(`Invalid response from route ${request2.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`);
      }
      let normalized_body;
      if (typeof body === "object" && (!type || type === "application/json")) {
        headers = {...headers, "content-type": "application/json"};
        normalized_body = JSON.stringify(body);
      } else {
        normalized_body = body;
      }
      return {status, body: normalized_body, headers};
    }
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(req) {
  const raw = req.rawBody;
  if (!raw)
    return raw;
  const [type, ...directives] = req.headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const {data, append} = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const {data, append} = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !incoming.path.split("/").pop().includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: encodeURI(path + (q ? `?${q}` : ""))
        }
      };
    }
  }
  try {
    return await options2.hooks.handle({
      request: {
        ...incoming,
        headers: lowercase_keys(incoming.headers),
        body: parse_body(incoming),
        params: null,
        locals: {}
      },
      render: async (request2) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request2),
            page_config: {ssr: false, router: true, hydrate: true},
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request2.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request2, route) : await render_page(request2, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request2.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request2, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}

// node_modules/svelte/internal/index.mjs
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}
var tasks = new Set();
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({$$});
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, {$$slots = {}, context = new Map()} = {}) => {
      on_destroy = [];
      const result = {title: "", head: "", css: new Set()};
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
    connectedCallback() {
      const {on_mount} = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// .svelte-kit/output/server/app.js
var import_cookie = __toModule(require_cookie());

// node_modules/@lukeed/uuid/dist/index.mjs
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--)
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
  var i = 0, num, out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = Array(i = 256);
    while (i--)
      BUFFER[i] = 256 * Math.random() | 0;
    i = IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i == 6)
      out += HEX[num & 15 | 64];
    else if (i == 8)
      out += HEX[num & 63 | 128];
    else
      out += HEX[num];
    if (i & 1 && i > 1 && i < 11)
      out += "-";
  }
  IDX++;
  return out;
}

// node_modules/svelte/store/index.mjs
var subscriber_queue2 = [];
function writable2(value, start = noop2) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue2.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue2.length; i += 2) {
            subscriber_queue2[i][0](subscriber_queue2[i + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}

// .svelte-kit/output/server/app.js
var css$8 = {
  code: "#svelte-announcer.svelte-1pdgbjn{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>#svelte-announcer{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}</style>"],"names":[],"mappings":"AAqDO,gCAAiB,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,kBAAkB,MAAM,GAAG,CAAC,CAAC,UAAU,MAAM,GAAG,CAAC,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,CAAC,SAAS,MAAM,CAAC,SAAS,QAAQ,CAAC,IAAI,CAAC,CAAC,YAAY,MAAM,CAAC,MAAM,GAAG,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page: page2} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$8);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1pdgbjn"}">${navigated ? `${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var handle = async ({request: request2, render: render2}) => {
  const cookies = import_cookie.default.parse(request2.headers.cookie || "");
  request2.locals.userid = cookies.userid || v4();
  if (request2.query.has("_method")) {
    request2.method = request2.query.get("_method").toUpperCase();
  }
  const response = await render2(request2);
  if (!cookies.userid) {
    response.headers["set-cookie"] = `userid=${request2.locals.userid}; Path=/; HttpOnly`;
  }
  return response;
};
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  handle
});
var template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-a7ac874f.js",
      css: ["/./_app/assets/start-0826e215.css"],
      js: ["/./_app/start-a7ac874f.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/singletons-bb9012b7.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error22) => String(error22),
    handle_error: (error22) => {
      console.error(error22.stack);
      error22.stack = options.get_stack(error22);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var d = decodeURIComponent;
var empty = () => ({});
var manifest = {
  assets: [{"file": "favicon.ico", "size": 1150, "type": "image/vnd.microsoft.icon"}, {"file": "robots.txt", "size": 67, "type": "text/plain"}, {"file": "svelte-welcome.png", "size": 360807, "type": "image/png"}, {"file": "svelte-welcome.webp", "size": 115470, "type": "image/webp"}],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/contacts\.json$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return index_json$5;
      })
    },
    {
      type: "page",
      pattern: /^\/contacts\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/contacts/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/contacts\/new\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/contacts/new.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/contacts\/([^/]+?)\.json$/,
      params: (m) => ({slug: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _slug__json$2;
      })
    },
    {
      type: "page",
      pattern: /^\/contacts\/([^/]+?)\/?$/,
      params: (m) => ({slug: d(m[1])}),
      a: ["src/routes/__layout.svelte", "src/routes/contacts/[slug].svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/notes\.json$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return index_json$4;
      })
    },
    {
      type: "page",
      pattern: /^\/notes\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/notes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/notes\/new\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/notes/new.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/notes\/([^/]+?)\.json$/,
      params: (m) => ({slug: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _slug__json$1;
      })
    },
    {
      type: "page",
      pattern: /^\/notes\/([^/]+?)\/?$/,
      params: (m) => ({slug: d(m[1])}),
      a: ["src/routes/__layout.svelte", "src/routes/notes/[slug].svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/todos\.json$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return index_json$3;
      })
    },
    {
      type: "page",
      pattern: /^\/todos\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/todos/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/todos\/([^/]+?)\.json$/,
      params: (m) => ({uid: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _uid__json$2;
      })
    },
    {
      type: "page",
      pattern: /^\/tools\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/tools/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/tools\/Stopwatch\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/tools/Stopwatch.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/auth\/login\.json$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return login_json;
      })
    },
    {
      type: "page",
      pattern: /^\/cars\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/cars/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/cars\/([^/]+?)\/?$/,
      params: (m) => ({index: d(m[1])}),
      a: ["src/routes/__layout.svelte", "src/routes/cars/[index].svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/code\.json$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return index_json$2;
      })
    },
    {
      type: "page",
      pattern: /^\/code\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/code/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/code\/DescriptionContent\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/code/DescriptionContent.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/code\/DescriptionForm\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/code/DescriptionForm.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/code\/TitleContent\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/code/TitleContent.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/code\/CodeContent\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/code/CodeContent.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/code\/OurButtons\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/code/OurButtons.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/code\/TitleForm\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/code/TitleForm.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/code\/CodeForm\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/code/CodeForm.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/code\/NoteBody\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/code/NoteBody.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/code\/([^/]+?)\.json$/,
      params: (m) => ({uid: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _uid__json$1;
      })
    },
    {
      type: "page",
      pattern: /^\/code\/([^/]+?)\/?$/,
      params: (m) => ({index: d(m[1])}),
      a: ["src/routes/__layout.svelte", "src/routes/code/[index].svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/quiz\.json$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return index_json$1;
      })
    },
    {
      type: "page",
      pattern: /^\/quiz\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/quiz/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/quiz\/([^/]+?)\.json$/,
      params: (m) => ({slug: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _slug__json;
      })
    },
    {
      type: "page",
      pattern: /^\/quiz\/([^/]+?)\/?$/,
      params: (m) => ({slug: d(m[1])}),
      a: ["src/routes/__layout.svelte", "src/routes/quiz/[slug].svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/app\.json$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return index_json;
      })
    },
    {
      type: "page",
      pattern: /^\/app\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/app/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/app\/([^/]+?)\.json$/,
      params: (m) => ({uid: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _uid__json;
      })
    },
    {
      type: "page",
      pattern: /^\/app\/([^/]+?)\/?$/,
      params: (m) => ({slug: d(m[1])}),
      a: ["src/routes/__layout.svelte", "src/routes/app/[slug].svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request: request2, render: render2}) => render2(request2))
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error2;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index$8;
  }),
  "src/routes/contacts/index.svelte": () => Promise.resolve().then(function() {
    return index$7;
  }),
  "src/routes/contacts/new.svelte": () => Promise.resolve().then(function() {
    return _new$1;
  }),
  "src/routes/contacts/[slug].svelte": () => Promise.resolve().then(function() {
    return _slug_$3;
  }),
  "src/routes/about.svelte": () => Promise.resolve().then(function() {
    return about;
  }),
  "src/routes/notes/index.svelte": () => Promise.resolve().then(function() {
    return index$6;
  }),
  "src/routes/notes/new.svelte": () => Promise.resolve().then(function() {
    return _new;
  }),
  "src/routes/notes/[slug].svelte": () => Promise.resolve().then(function() {
    return _slug_$2;
  }),
  "src/routes/todos/index.svelte": () => Promise.resolve().then(function() {
    return index$5;
  }),
  "src/routes/tools/index.svelte": () => Promise.resolve().then(function() {
    return index$4;
  }),
  "src/routes/tools/Stopwatch.svelte": () => Promise.resolve().then(function() {
    return Stopwatch$1;
  }),
  "src/routes/cars/index.svelte": () => Promise.resolve().then(function() {
    return index$3;
  }),
  "src/routes/cars/[index].svelte": () => Promise.resolve().then(function() {
    return _index_$1;
  }),
  "src/routes/code/index.svelte": () => Promise.resolve().then(function() {
    return index$2;
  }),
  "src/routes/code/DescriptionContent.svelte": () => Promise.resolve().then(function() {
    return DescriptionContent$1;
  }),
  "src/routes/code/DescriptionForm.svelte": () => Promise.resolve().then(function() {
    return DescriptionForm$1;
  }),
  "src/routes/code/TitleContent.svelte": () => Promise.resolve().then(function() {
    return TitleContent$1;
  }),
  "src/routes/code/CodeContent.svelte": () => Promise.resolve().then(function() {
    return CodeContent$1;
  }),
  "src/routes/code/OurButtons.svelte": () => Promise.resolve().then(function() {
    return OurButtons$1;
  }),
  "src/routes/code/TitleForm.svelte": () => Promise.resolve().then(function() {
    return TitleForm$1;
  }),
  "src/routes/code/CodeForm.svelte": () => Promise.resolve().then(function() {
    return CodeForm$1;
  }),
  "src/routes/code/NoteBody.svelte": () => Promise.resolve().then(function() {
    return NoteBody$1;
  }),
  "src/routes/code/[index].svelte": () => Promise.resolve().then(function() {
    return _index_;
  }),
  "src/routes/quiz/index.svelte": () => Promise.resolve().then(function() {
    return index$1;
  }),
  "src/routes/quiz/[slug].svelte": () => Promise.resolve().then(function() {
    return _slug_$1;
  }),
  "src/routes/app/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/app/[slug].svelte": () => Promise.resolve().then(function() {
    return _slug_;
  })
};
var metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-f9c6dd33.js", "css": ["/./_app/assets/pages/__layout.svelte-cc1717e5.css"], "js": ["/./_app/pages/__layout.svelte-f9c6dd33.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-a33fd95b.js", "css": [], "js": ["/./_app/error.svelte-a33fd95b.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-3f05621e.js", "css": [], "js": ["/./_app/pages/index.svelte-3f05621e.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/contacts/index.svelte": {"entry": "/./_app/pages/contacts/index.svelte-2b676bda.js", "css": [], "js": ["/./_app/pages/contacts/index.svelte-2b676bda.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/contacts/new.svelte": {"entry": "/./_app/pages/contacts/new.svelte-dd4ebe0f.js", "css": [], "js": ["/./_app/pages/contacts/new.svelte-dd4ebe0f.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/contacts/[slug].svelte": {"entry": "/./_app/pages/contacts/[slug].svelte-e117c987.js", "css": ["/./_app/assets/pages/contacts/[slug].svelte-4bf92ded.css"], "js": ["/./_app/pages/contacts/[slug].svelte-e117c987.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/about.svelte": {"entry": "/./_app/pages/about.svelte-2977a92e.js", "css": ["/./_app/assets/pages/about.svelte-51ba7a34.css"], "js": ["/./_app/pages/about.svelte-2977a92e.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/notes/index.svelte": {"entry": "/./_app/pages/notes/index.svelte-da92a994.js", "css": [], "js": ["/./_app/pages/notes/index.svelte-da92a994.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/notes/new.svelte": {"entry": "/./_app/pages/notes/new.svelte-88d33ea7.js", "css": [], "js": ["/./_app/pages/notes/new.svelte-88d33ea7.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/notes/[slug].svelte": {"entry": "/./_app/pages/notes/[slug].svelte-2e51178c.js", "css": [], "js": ["/./_app/pages/notes/[slug].svelte-2e51178c.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/todos/index.svelte": {"entry": "/./_app/pages/todos/index.svelte-8559cbee.js", "css": ["/./_app/assets/pages/todos/index.svelte-ab14594b.css"], "js": ["/./_app/pages/todos/index.svelte-8559cbee.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/tools/index.svelte": {"entry": "/./_app/pages/tools/index.svelte-c0bb0d3c.js", "css": ["/./_app/assets/pages/tools/index.svelte-060674c6.css"], "js": ["/./_app/pages/tools/index.svelte-c0bb0d3c.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/tools/Stopwatch.svelte": {"entry": "/./_app/pages/tools/Stopwatch.svelte-ca990f09.js", "css": [], "js": ["/./_app/pages/tools/Stopwatch.svelte-ca990f09.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/cars/index.svelte": {"entry": "/./_app/pages/cars/index.svelte-1c8296b1.js", "css": [], "js": ["/./_app/pages/cars/index.svelte-1c8296b1.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/cars/[index].svelte": {"entry": "/./_app/pages/cars/[index].svelte-3a222996.js", "css": [], "js": ["/./_app/pages/cars/[index].svelte-3a222996.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/code/index.svelte": {"entry": "/./_app/pages/code/index.svelte-de1ed860.js", "css": [], "js": ["/./_app/pages/code/index.svelte-de1ed860.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/pages/code/OurButtons.svelte-7cf31170.js", "/./_app/chunks/store-8cdc886f.js", "/./_app/chunks/navigation-20968cc5.js", "/./_app/chunks/singletons-bb9012b7.js"], "styles": null}, "src/routes/code/DescriptionContent.svelte": {"entry": "/./_app/pages/code/DescriptionContent.svelte-2ef4c681.js", "css": [], "js": ["/./_app/pages/code/DescriptionContent.svelte-2ef4c681.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/code/DescriptionForm.svelte": {"entry": "/./_app/pages/code/DescriptionForm.svelte-0b075d15.js", "css": [], "js": ["/./_app/pages/code/DescriptionForm.svelte-0b075d15.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/code/TitleContent.svelte": {"entry": "/./_app/pages/code/TitleContent.svelte-da190645.js", "css": [], "js": ["/./_app/pages/code/TitleContent.svelte-da190645.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/code/CodeContent.svelte": {"entry": "/./_app/pages/code/CodeContent.svelte-c0b30cc7.js", "css": [], "js": ["/./_app/pages/code/CodeContent.svelte-c0b30cc7.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/code/OurButtons.svelte": {"entry": "/./_app/pages/code/OurButtons.svelte-7cf31170.js", "css": [], "js": ["/./_app/pages/code/OurButtons.svelte-7cf31170.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/code/TitleForm.svelte": {"entry": "/./_app/pages/code/TitleForm.svelte-55a22700.js", "css": [], "js": ["/./_app/pages/code/TitleForm.svelte-55a22700.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/code/CodeForm.svelte": {"entry": "/./_app/pages/code/CodeForm.svelte-5da4cba6.js", "css": [], "js": ["/./_app/pages/code/CodeForm.svelte-5da4cba6.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/code/NoteBody.svelte": {"entry": "/./_app/pages/code/NoteBody.svelte-24379def.js", "css": [], "js": ["/./_app/pages/code/NoteBody.svelte-24379def.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/pages/code/CodeContent.svelte-c0b30cc7.js", "/./_app/chunks/store-8cdc886f.js", "/./_app/pages/code/CodeForm.svelte-5da4cba6.js", "/./_app/pages/code/DescriptionForm.svelte-0b075d15.js", "/./_app/pages/code/DescriptionContent.svelte-2ef4c681.js"], "styles": null}, "src/routes/code/[index].svelte": {"entry": "/./_app/pages/code/[index].svelte-fb6016e8.js", "css": [], "js": ["/./_app/pages/code/[index].svelte-fb6016e8.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/pages/code/NoteBody.svelte-24379def.js", "/./_app/pages/code/CodeContent.svelte-c0b30cc7.js", "/./_app/chunks/store-8cdc886f.js", "/./_app/pages/code/CodeForm.svelte-5da4cba6.js", "/./_app/pages/code/DescriptionForm.svelte-0b075d15.js", "/./_app/pages/code/DescriptionContent.svelte-2ef4c681.js", "/./_app/pages/code/TitleForm.svelte-55a22700.js", "/./_app/pages/code/TitleContent.svelte-da190645.js", "/./_app/pages/code/OurButtons.svelte-7cf31170.js", "/./_app/chunks/navigation-20968cc5.js", "/./_app/chunks/singletons-bb9012b7.js"], "styles": null}, "src/routes/quiz/index.svelte": {"entry": "/./_app/pages/quiz/index.svelte-0e434747.js", "css": ["/./_app/assets/pages/quiz/index.svelte-8e5e91df.css"], "js": ["/./_app/pages/quiz/index.svelte-0e434747.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/quiz/[slug].svelte": {"entry": "/./_app/pages/quiz/[slug].svelte-a025bcb9.js", "css": [], "js": ["/./_app/pages/quiz/[slug].svelte-a025bcb9.js", "/./_app/chunks/vendor-66f8d0bb.js"], "styles": null}, "src/routes/app/index.svelte": {"entry": "/./_app/pages/app/index.svelte-35025992.js", "css": ["/./_app/assets/pages/app/index.svelte-4c60bb27.css"], "js": ["/./_app/pages/app/index.svelte-35025992.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}, "src/routes/app/[slug].svelte": {"entry": "/./_app/pages/app/[slug].svelte-6feef2e4.js", "css": ["/./_app/assets/pages/contacts/[slug].svelte-4bf92ded.css"], "js": ["/./_app/pages/app/[slug].svelte-6feef2e4.js", "/./_app/chunks/vendor-66f8d0bb.js", "/./_app/chunks/store-8cdc886f.js"], "styles": null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {"base": "", "assets": "/."}});
function render(request2, {
  prerender: prerender2
} = {}) {
  const host = request2.headers["host"];
  return respond({...request2, host}, options, {prerender: prerender2});
}
var base$4 = "https://www.imajenation.co.zw/mydiary/wp-json";
async function getJSON$3(request2, resource, data) {
  const res = await fetch(`${base$4}/${resource}`, {
    method: request2.method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
  if (res.ok && request2.method !== "GET" && request2.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/posts"
      },
      body: ""
    };
  }
  return {
    status: res.status,
    body: await res.json()
  };
}
var get$5 = async (request2) => {
  const response = await getJSON$3(request2, `wp/v2/contact`);
  if (response.status === 404) {
    console.log("404 pano");
    return {body: []};
  }
  return response;
};
var index_json$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$5
});
var get$4 = async (request2) => {
  const response = await getJSON$3(request2, `wp/v2/contact/?slug=${request2.params.slug}`);
  if (response.status === 404) {
    console.log("404 pano");
    return {body: []};
  }
  return response;
};
var _slug__json$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$4
});
var base$3 = "https://imajenation.co.zw/mydiary/wp-json";
async function getJSON$2(request2, resource, data) {
  const res = await fetch(`${base$3}/${resource}`, {
    method: request2.method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
  if (res.ok && request2.method !== "GET" && request2.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/posts"
      },
      body: ""
    };
  }
  return {
    status: res.status,
    body: await res.json()
  };
}
var get$3 = async (request2) => {
  const response = await getJSON$2(request2, `wp/v2/note`);
  if (response.status === 404) {
    console.log("404 pano");
    return {body: []};
  }
  return response;
};
var index_json$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$3
});
var _slug__json$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var base$2 = "https://api.svelte.dev";
async function api(request2, resource, data) {
  if (!request2.locals.userid) {
    return {status: 401};
  }
  const res = await fetch(`${base$2}/${resource}`, {
    method: request2.method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
  if (res.ok && request2.method !== "GET" && request2.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/todos"
      }
    };
  }
  return {
    status: res.status,
    body: await res.json()
  };
}
var get$2 = async (request2) => {
  const response = await api(request2, `todos/${request2.locals.userid}`);
  if (response.status === 404) {
    return {body: []};
  }
  return response;
};
var post$1 = async (request2) => {
  const response = await api(request2, `todos/${request2.locals.userid}`, {
    text: request2.body.get("text")
  });
  return response;
};
var index_json$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$2,
  post: post$1
});
var patch = async (request2) => {
  return api(request2, `todos/${request2.locals.userid}/${request2.params.uid}`, {
    text: request2.body.get("text"),
    done: request2.body.has("done") ? !!request2.body.get("done") : void 0
  });
};
var del = async (request2) => {
  return api(request2, `todos/${request2.locals.userid}/${request2.params.uid}`);
};
var _uid__json$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  patch,
  del
});
var base$1 = "https://mydiary.local/wp-json";
async function getJSON$1(request2, resource, data) {
  const res = await fetch(`${base$1}/${resource}`, {
    method: request2.method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
  if (res.ok && request2.method !== "GET" && request2.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/posts"
      },
      body: ""
    };
  }
  return {
    status: res.status,
    body: await res.json()
  };
}
async function post({body}) {
  console.log(body);
  const response = await getJSON$1(request, `/tutor/v1/quiz-question-answer/16/`);
  if (response.status === 404) {
    console.log("404 pano");
    return {body: []};
  }
}
var get$1 = async (request2) => {
  const response = await getJSON$1(request2, `tutor/v1/quiz-question-answer/16/`);
  if (response.status === 404) {
    console.log("404 pano");
    return {body: []};
  }
  return response;
};
var login_json = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  post,
  get: get$1
});
var index_json$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var _uid__json$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var base = "http://mydiary.local/wp-json";
async function getJSON(request2, resource, data) {
  const res = await fetch(`${base}/${resource}`, {
    method: request2.method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
  if (res.ok && request2.method !== "GET" && request2.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/posts"
      },
      body: ""
    };
  }
  return {
    status: res.status,
    body: await res.json()
  };
}
var get = async (request2) => {
  const response = await getJSON(request2, `tutor/v1/quiz-question-answer/16/`);
  if (response.status === 404) {
    console.log("404 pano");
    return {body: []};
  }
  return response;
};
var index_json$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get
});
var _slug__json = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var index_json = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var _uid__json = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
var page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var css$7 = {
  code: ".active.svelte-1037bdi{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(29,78,216,var(--tw-bg-opacity));color:rgba(255,255,255,var(--tw-text-opacity))}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n  import { page } from \\"$app/stores\\";\\n  import logo from \\"./svelte-logo.svg\\";\\n  let menu = true;\\n  let toggleMenu = () => {\\n    menu = !menu;\\n  };\\n</script>\\n\\n<div\\n  class=\\"bg-gray-800 text-gray-900 md:hidden flex justify-between pl-10 fixed top-0 inset-x-0 z-10\\"\\n>\\n  <div class=\\"flex my-2 content-center\\">\\n    <svg\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n      class=\\"h-10 w-10\\"\\n      viewBox=\\"0 0 20 20\\"\\n      fill=\\"white\\"\\n    >\\n      <path\\n        d=\\"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z\\"\\n      />\\n      <path\\n        fill-rule=\\"evenodd\\"\\n        d=\\"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z\\"\\n        clip-rule=\\"evenodd\\"\\n      />\\n    </svg>\\n    <span class=\\"text-xl text-white ml-1 mt-2\\">My Diary</span>\\n  </div>\\n  <button on:click={toggleMenu} class=\\"p-4 focus:outline-none focus:bg-gray-700\\"\\n    ><svg\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n      class=\\"h-6 w-6\\"\\n      fill=\\"none\\"\\n      viewBox=\\"0 0 24 24\\"\\n      stroke=\\"white\\"\\n    >\\n      <path\\n        stroke-linecap=\\"round\\"\\n        stroke-linejoin=\\"round\\"\\n        stroke-width=\\"2\\"\\n        d=\\"M4 6h16M4 12h16M4 18h16\\"\\n      />\\n    </svg></button\\n  >\\n</div>\\n<header\\n  class:-translate-x-full={menu}\\n  class=\\"bg-blue-800 text-blue-100 w-64 p-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-20\\"\\n>\\n  <div class=\\"flex my-2 content-center\\">\\n    <svg\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n      class=\\"h-10 w-10\\"\\n      viewBox=\\"0 0 20 20\\"\\n      fill=\\"white\\"\\n    >\\n      <path\\n        d=\\"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z\\"\\n      />\\n      <path\\n        fill-rule=\\"evenodd\\"\\n        d=\\"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z\\"\\n        clip-rule=\\"evenodd\\"\\n      />\\n    </svg>\\n    <span class=\\"text-xl text-white ml-1 mt-2\\">My Diary</span>\\n  </div>\\n  <nav class=\\"mt-10\\">\\n    <a class=\\"text-blue-100 hover:no-underline\\" href=\\"/\\">\\n      <li\\n        on:click={toggleMenu}\\n        class:active={$page.path === \\"/\\"}\\n        class=\\"block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200\\"\\n      >\\n        Home\\n      </li></a\\n    >\\n    <a\\n      sveltekit:prefetch\\n      class=\\"text-blue-100 hover:no-underline\\"\\n      href=\\"/contacts\\"\\n    >\\n      <li\\n        on:click={toggleMenu}\\n        class:active={$page.path === \\"/contacts\\"}\\n        class=\\"block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200\\"\\n      >\\n        Contacts\\n      </li></a\\n    >\\n    <a class=\\"text-blue-100 hover:no-underline\\" href=\\"/app\\">\\n      <li\\n        on:click={toggleMenu}\\n        class:active={$page.path === \\"/app\\"}\\n        class=\\"block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200\\"\\n      >\\n        App Notes\\n      </li></a\\n    >\\n    <a\\n      sveltekit:prefetch\\n      class=\\"text-blue-100 hover:no-underline\\"\\n      href=\\"/notes\\"\\n    >\\n      <li\\n        on:click={toggleMenu}\\n        class:active={$page.path === \\"/notes\\"}\\n        class=\\"block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200\\"\\n      >\\n        Notes\\n      </li></a\\n    >\\n    <a class=\\"text-blue-100 hover:no-underline\\" href=\\"/code\\">\\n      <li\\n        on:click={toggleMenu}\\n        class:active={$page.path === \\"/code\\"}\\n        class=\\"block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200\\"\\n      >\\n        Code Notes\\n      </li></a\\n    >\\n\\n    <a class=\\"text-blue-100 hover:no-underline\\" href=\\"/tools\\">\\n      <li\\n        on:click={toggleMenu}\\n        class:active={$page.path === \\"/tools\\"}\\n        class=\\"block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200\\"\\n      >\\n        Tools\\n      </li></a\\n    >\\n\\n    <a class=\\"text-blue-100 hover:no-underline\\" href=\\"/quiz\\">\\n      <li\\n        on:click={toggleMenu}\\n        class:active={$page.path === \\"/quiz\\"}\\n        class=\\"block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200\\"\\n      >\\n        Quiz\\n      </li></a\\n    >\\n  </nav>\\n</header>\\n\\n<style>.active{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgba(29,78,216,var(--tw-bg-opacity));color:rgba(255,255,255,var(--tw-text-opacity))}</style>\\n"],"names":[],"mappings":"AAkJO,sBAAO,CAAC,gBAAgB,CAAC,CAAC,kBAAkB,CAAC,CAAC,iBAAiB,KAAK,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,MAAM,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,iBAAiB,CAAC,CAAC,CAAC"}'
};
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$7);
  $$unsubscribe_page();
  return `<div class="${"bg-gray-800 text-gray-900 md:hidden flex justify-between pl-10 fixed top-0 inset-x-0 z-10"}"><div class="${"flex my-2 content-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-10 w-10"}" viewBox="${"0 0 20 20"}" fill="${"white"}"><path d="${"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}" clip-rule="${"evenodd"}"></path></svg>
    <span class="${"text-xl text-white ml-1 mt-2"}">My Diary</span></div>
  <button class="${"p-4 focus:outline-none focus:bg-gray-700"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"white"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></button></div>
<header class="${[
    "bg-blue-800 text-blue-100 w-64 p-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-20",
    "-translate-x-full"
  ].join(" ").trim()}"><div class="${"flex my-2 content-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-10 w-10"}" viewBox="${"0 0 20 20"}" fill="${"white"}"><path d="${"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}" clip-rule="${"evenodd"}"></path></svg>
    <span class="${"text-xl text-white ml-1 mt-2"}">My Diary</span></div>
  <nav class="${"mt-10"}"><a class="${"text-blue-100 hover:no-underline"}" href="${"/"}"><li class="${[
    "block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200 svelte-1037bdi",
    $page.path === "/" ? "active" : ""
  ].join(" ").trim()}">Home
      </li></a>
    <a sveltekit:prefetch class="${"text-blue-100 hover:no-underline"}" href="${"/contacts"}"><li class="${[
    "block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200 svelte-1037bdi",
    $page.path === "/contacts" ? "active" : ""
  ].join(" ").trim()}">Contacts
      </li></a>
    <a class="${"text-blue-100 hover:no-underline"}" href="${"/app"}"><li class="${[
    "block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200 svelte-1037bdi",
    $page.path === "/app" ? "active" : ""
  ].join(" ").trim()}">App Notes
      </li></a>
    <a sveltekit:prefetch class="${"text-blue-100 hover:no-underline"}" href="${"/notes"}"><li class="${[
    "block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200 svelte-1037bdi",
    $page.path === "/notes" ? "active" : ""
  ].join(" ").trim()}">Notes
      </li></a>
    <a class="${"text-blue-100 hover:no-underline"}" href="${"/code"}"><li class="${[
    "block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200 svelte-1037bdi",
    $page.path === "/code" ? "active" : ""
  ].join(" ").trim()}">Code Notes
      </li></a>

    <a class="${"text-blue-100 hover:no-underline"}" href="${"/tools"}"><li class="${[
    "block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200 svelte-1037bdi",
    $page.path === "/tools" ? "active" : ""
  ].join(" ").trim()}">Tools
      </li></a>

    <a class="${"text-blue-100 hover:no-underline"}" href="${"/quiz"}"><li class="${[
    "block py-2 px-4 hover:bg-blue-600 hover:text-white rounded transition duration-200 svelte-1037bdi",
    $page.path === "/quiz" ? "active" : ""
  ].join(" ").trim()}">Quiz
      </li></a></nav>
</header>`;
});
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"relative min-h-screen md:flex"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  <div class="${"bg-gray-200 flex-1 p-10 relative"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load$9({error: error22, status}) {
  return {props: {error: error22, status}};
}
var Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error22} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error22 !== void 0)
    $$bindings.error(error22);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error22.message)}</p>


${error22.stack ? `<pre>${escape2(error22.stack)}</pre>` : ``}`;
});
var error2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error$1,
  load: load$9
});
var prerender$1 = true;
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username;
  let password;
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<div class="${"mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg"}"><h3 class="${"text-center text-2xl mb-5"}">Login</h3>
  <input class="${"w-full rounded mb-5"}" placeholder="${"Email"}" type="${"text"}"${add_attribute("value", username, 1)}>
  <input class="${"w-full rounded mb-5"}" placeholder="${"Password"}" type="${"password"}"${add_attribute("value", password, 1)}>
  <button class="${"px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"}">Submit</button></div>

<div class="${"grid grid-rows-2 grid-flow-col gap-4"}"><a href="${"/app"}" class="${"text-blue-100"}"><div class="${"p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center"}">App Notes
    </div></a>
  <a href="${"/code"}" class="${"text-blue-100"}"><div class="${" p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center"}">Code Notes
    </div></a>
  <a href="${"/contacts"}" class="${"text-blue-100"}"><div class="${"p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center"}">Contacts
    </div></a>
  <a href="${"/notes"}" class="${"text-blue-100"}"><div class="${"p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center"}">Notes
    </div></a></div>`;
});
var index$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes,
  prerender: prerender$1
});
var load$8 = async ({fetch: fetch22}) => {
  const res = await fetch22("/contacts.json");
  console.log(res);
  if (res.ok) {
    const jsonData = await res.json();
    const contacts = await jsonData;
    return {props: {contacts}};
  }
  const {message} = await res.json();
  return {error: new Error(message)};
};
var Contacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {contacts} = $$props;
  console.log(contacts);
  if ($$props.contacts === void 0 && $$bindings.contacts && contacts !== void 0)
    $$bindings.contacts(contacts);
  return `<div class="${"fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"}"><h3 class="${"ml-10"}">Contacts</h3></div>
<a href="${"/contacts/new"}"><button class="${"px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"}">New</button></a>

${each(contacts, (contact, index2) => `<li><div style="${"border-bottom: 2px solid gray"}" class="${"d-flex flex-row mb-8"}"><div>icon</div>
      <div><a sveltekit:prefetch href="${"/contacts/" + escape2(contact.slug)}"><h5>${escape2(contact.full_name)}</h5></a>

        <span>edit </span>
        <span>${typeof contact.phone_numbers === "string" ? `<span class="${"block"}"><span class="${"ml-5"}">phone</span>
              ${escape2(contact.phone_numbers)}
            </span>` : `Not a string
            ${each(contact.phone_numbers, (number, index3) => `<span class="${"block"}"><span class="${"ml-5"}">phone</span>
                ${escape2(number)}
              </span>`)}`}
          <span class="${"ml-5"}">email</span>${escape2(contact.email)}<br></span>
      </div></div>
  </li>`)}`;
});
var index$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Contacts,
  load: load$8
});
var New$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name, email, phoneNumber = [""];
  return `<div class="${"section md:mt-32 mt-20"}"><label class="${""}" for="${"input-name"}">Name...</label>

  <div class="${"section md:mt-32 mt-20"}"><label class="${""}" for="${"input-name"}">Name...</label>

    <input class="${"bg-gray-300  hover:bg-red-400 flex flex-col"}" type="${"text"}"${add_attribute("value", name, 1)}>

    ${each(phoneNumber, (number, index2) => `<div class="${"flex flex-row"}"><div style="${"\n        width: 100%;"}" class="${"pr-2"}"><label class="${""}" for="${"input-phoneNumber"}">Phone Number...</label>

          <input class="${"bg-gray-300  hover:bg-red-400 flex flex-col"}" type="${"text"}"${add_attribute("value", number, 1)}></div>

        <div class="${"add-btn"}">${index2 !== phoneNumber.length - 1 ? `<button fab size="${""}" class="${"red white-text text-white bg-green-600 grid place-items-center rounded-full h-12 w-12  items-center justify-center text-2xl"}">-
            </button>` : ``}
          ${index2 === phoneNumber.length - 1 ? `<button class="${"text-white   bg-pink-700 grid place-items-center rounded-full h-12 w-12  items-center justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round-full"}" stroke-linejoin="${"round-full"}" stroke-width="${"2"}" d="${"M12 6v6m0 0v6m0-6h6m-6 0H6"}"></path></svg>
            </button>` : ``}</div>
      </div>`)}

    <label class="${""}" for="${"input-email"}">Email...</label>

    <input class="${"bg-gray-300  hover:bg-red-400 flex flex-col"}" type="${"text"}"${add_attribute("value", email, 1)}>

    <button class="${"red white-text bg-blue-600 hover:text-red-600 m-2 w-16"}">Save</button></div></div>

<h1 class="${"text-2xl font-bold "}">Notes</h1>`;
});
var _new$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": New$1
});
var css$6 = {
  code: ".add-btn.svelte-t3afc3{align-self:flex-end;margin-bottom:15px}",
  map: '{"version":3,"file":"[slug].svelte","sources":["[slug].svelte"],"sourcesContent":["<script context=\\"module\\">\\n  // export const load = async (ctx) => {\\n  //   const res = await fetch(\\n  //     `https://imajenation.co.zw/mydiary/wp-json/wp/v2` +\\n  //       `/contact/?slug=${ctx.page.params.slug}`\\n  //   );\\n  //   if (res.ok) {\\n  //     console.log(\\"res is ok\\");\\n  //     const data = await res.json();\\n  //     const post = await data[0];\\n\\n  //     return {\\n  //       props: { post },\\n  //     };\\n  //   }\\n\\n  //   const { message } = await res.json();\\n\\n  //   return {\\n  //     error: new Error(message),\\n  //   };\\n  // };\\n\\n  export const load = async (ctx) => {\\n    const res = await fetch(`/contacts/${ctx.page.params.slug}.json`);\\n\\n    console.log(res);\\n\\n    if (res.ok) {\\n      const jsonData = await res.json();\\n      const post = await jsonData[0];\\n\\n      return {\\n        props: { post },\\n      };\\n    }\\n\\n    const { message } = await res.json();\\n\\n    return {\\n      error: new Error(message),\\n    };\\n  };\\n</script>\\n\\n<script>\\n  export let post;\\n  console.log(post);\\n  if (typeof post.phone_numbers === \\"string\\") {\\n    let num = post.phone_numbers.split();\\n    post.phone_numbers = num;\\n  }\\n\\n  let name = post.full_name;\\n  let phoneNumber = post.phone_numbers;\\n  let email = post.email;\\n\\n  $: newContact = {\\n    title: name,\\n    full_name: name,\\n    phone_numbers: phoneNumber,\\n    email: email,\\n    status: \\"publish\\",\\n  };\\n\\n  function newNumber() {\\n    phoneNumber = [phoneNumber, \\"\\"];\\n  }\\n\\n  function deleteNumber(index) {\\n    phoneNumber.splice(index, 1);\\n    phoneNumber = phoneNumber;\\n  }\\n\\n  async function editPost() {\\n    let body = newContact;\\n    let token = localStorage.getItem(\\"token\\");\\n    console.log(token);\\n    token = JSON.parse(token);\\n    try {\\n      const res = await fetch(\\n        `https://www.imajenation.co.zw/mydiary/wp-json/wp/v2/contact/${post.id}`,\\n        {\\n          method: \\"PUT\\",\\n          credentials: \\"include\\",\\n          headers: {\\n            \\"Content-type\\": \\"application/json\\",\\n            Authorization: \\"Bearer \\" + token,\\n          },\\n          body: JSON.stringify(body),\\n        }\\n      );\\n\\n      const data = await res.json();\\n      console.log(data);\\n\\n      if (res.ok) {\\n        console.log(\\"res is okay\\");\\n        console.log(data);\\n\\n        edit = false;\\n      } else {\\n        console.log(\\"res has an error\\");\\n      }\\n    } catch (error) {\\n      console.log(\\"ERROR!!!: \\", error);\\n    }\\n  }\\n</script>\\n\\n<div\\n  class=\\"fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10\\"\\n>\\n  <h3 class=\\"ml-10\\">Contacts: {post.full_name}</h3>\\n</div>\\n\\n<div class=\\"section md:mt-32 mt-20\\">\\n  <label class=\\"\\" for=\\"input-name\\">Name...</label>\\n\\n  <input\\n    class=\\"bg-gray-300  hover:bg-red-400 flex flex-col\\"\\n    type=\\"text\\"\\n    bind:value={name}\\n  />\\n\\n  {#each phoneNumber as number, index}\\n    <div class=\\"flex flex-row\\">\\n      <div\\n        style=\\"\\n        width: 100%;\\"\\n        class=\\"pr-2\\"\\n      >\\n        <label class=\\"\\" for=\\"input-phoneNumber\\">Phone Number...</label>\\n\\n        <input\\n          class=\\"bg-gray-300  hover:bg-red-400 flex flex-col\\"\\n          type=\\"text\\"\\n          bind:value={number}\\n        />\\n      </div>\\n\\n      <div class=\\"add-btn\\">\\n        {#if index !== phoneNumber.length - 1}\\n          <button\\n            on:click={() => {\\n              deleteNumber(index);\\n            }}\\n            fab\\n            size=\\"\\"\\n            class=\\"red white-text text-white bg-green-600 grid place-items-center rounded-full h-12 w-12  items-center justify-center text-2xl\\"\\n          >\\n            -\\n          </button>\\n        {/if}\\n        {#if index === phoneNumber.length - 1}\\n          <button\\n            class=\\"text-white   bg-pink-700 grid place-items-center rounded-full h-12 w-12  items-center justify-center\\"\\n            on:click={newNumber}\\n          >\\n            <svg\\n              xmlns=\\"http://www.w3.org/2000/svg\\"\\n              class=\\"h-6 w-6\\"\\n              fill=\\"none\\"\\n              viewBox=\\"0 0 24 24\\"\\n              stroke=\\"currentColor\\"\\n            >\\n              <path\\n                stroke-linecap=\\"round-full\\"\\n                stroke-linejoin=\\"round-full\\"\\n                stroke-width=\\"2\\"\\n                d=\\"M12 6v6m0 0v6m0-6h6m-6 0H6\\"\\n              />\\n            </svg>\\n          </button>\\n        {/if}\\n      </div>\\n    </div>\\n  {/each}\\n\\n  <label class=\\"\\" for=\\"input-email\\">Email...</label>\\n\\n  <input\\n    class=\\"bg-gray-300  hover:bg-red-400 flex flex-col\\"\\n    type=\\"text\\"\\n    bind:value={email}\\n  />\\n\\n  <button\\n    on:click={editPost}\\n    class=\\"red white-text bg-blue-600 hover:text-red-600 m-2 w-16\\">Save</button\\n  >\\n</div>\\n\\n<style>.add-btn{align-self:flex-end;margin-bottom:15px}</style>\\n"],"names":[],"mappings":"AAiMO,sBAAQ,CAAC,WAAW,QAAQ,CAAC,cAAc,IAAI,CAAC"}'
};
var load$7 = async (ctx) => {
  const res = await fetch(`/contacts/${ctx.page.params.slug}.json`);
  console.log(res);
  if (res.ok) {
    const jsonData = await res.json();
    const post2 = await jsonData[0];
    return {props: {post: post2}};
  }
  const {message} = await res.json();
  return {error: new Error(message)};
};
var U5Bslugu5D$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {post: post2} = $$props;
  console.log(post2);
  if (typeof post2.phone_numbers === "string") {
    let num = post2.phone_numbers.split();
    post2.phone_numbers = num;
  }
  let name = post2.full_name;
  let phoneNumber = post2.phone_numbers;
  let email = post2.email;
  if ($$props.post === void 0 && $$bindings.post && post2 !== void 0)
    $$bindings.post(post2);
  $$result.css.add(css$6);
  return `<div class="${"fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"}"><h3 class="${"ml-10"}">Contacts: ${escape2(post2.full_name)}</h3></div>

<div class="${"section md:mt-32 mt-20"}"><label class="${""}" for="${"input-name"}">Name...</label>

  <input class="${"bg-gray-300  hover:bg-red-400 flex flex-col"}" type="${"text"}"${add_attribute("value", name, 1)}>

  ${each(phoneNumber, (number, index2) => `<div class="${"flex flex-row"}"><div style="${"\n        width: 100%;"}" class="${"pr-2"}"><label class="${""}" for="${"input-phoneNumber"}">Phone Number...</label>

        <input class="${"bg-gray-300  hover:bg-red-400 flex flex-col"}" type="${"text"}"${add_attribute("value", number, 1)}></div>

      <div class="${"add-btn svelte-t3afc3"}">${index2 !== phoneNumber.length - 1 ? `<button fab size="${""}" class="${"red white-text text-white bg-green-600 grid place-items-center rounded-full h-12 w-12  items-center justify-center text-2xl"}">-
          </button>` : ``}
        ${index2 === phoneNumber.length - 1 ? `<button class="${"text-white   bg-pink-700 grid place-items-center rounded-full h-12 w-12  items-center justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round-full"}" stroke-linejoin="${"round-full"}" stroke-width="${"2"}" d="${"M12 6v6m0 0v6m0-6h6m-6 0H6"}"></path></svg>
          </button>` : ``}</div>
    </div>`)}

  <label class="${""}" for="${"input-email"}">Email...</label>

  <input class="${"bg-gray-300  hover:bg-red-400 flex flex-col"}" type="${"text"}"${add_attribute("value", email, 1)}>

  <button class="${"red white-text bg-blue-600 hover:text-red-600 m-2 w-16"}">Save</button>
</div>`;
});
var _slug_$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bslugu5D$3,
  load: load$7
});
var browser = false;
var dev = false;
var css$5 = {
  code: ".content.svelte-t58uux{margin:var(--column-margin-top) auto 0 auto;max-width:var(--column-width);width:100%}",
  map: `{"version":3,"file":"about.svelte","sources":["about.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport { browser, dev } from '$app/env';\\n\\n\\t// we don't need any JS on this page, though we'll load\\n\\t// it in dev so that we get hot module replacement...\\n\\texport const hydrate = dev;\\n\\n\\t// ...but if the client-side router is already loaded\\n\\t// (i.e. we came here from elsewhere in the app), use it\\n\\texport const router = browser;\\n\\n\\t// since there's no dynamic data here, we can prerender\\n\\t// it so that it gets served as a static asset in prod\\n\\texport const prerender = true;\\n</script>\\n\\n<svelte:head>\\n\\t<title>About</title>\\n</svelte:head>\\n\\n<div class=\\"content\\">\\n\\t<h1>About this app</h1>\\n\\n\\t<p>\\n\\t\\tThis is a <a href=\\"https://kit.svelte.dev\\">SvelteKit</a> app. You can make your own by typing the\\n\\t\\tfollowing into your command line and following the prompts:\\n\\t</p>\\n\\n\\t<!-- TODO lose the @next! -->\\n\\t<pre>npm init svelte@next</pre>\\n\\n\\t<p>\\n\\t\\tThe page you're looking at is purely static HTML, with no client-side interactivity needed.\\n\\t\\tBecause of that, we don't need to load any JavaScript. Try viewing the page's source, or opening\\n\\t\\tthe devtools network panel and reloading.\\n\\t</p>\\n\\n\\t<p>\\n\\t\\tThe <a href=\\"/todos\\">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using\\n\\t\\tit with JavaScript disabled!\\n\\t</p>\\n</div>\\n\\n<style>.content{margin:var(--column-margin-top) auto 0 auto;max-width:var(--column-width);width:100%}</style>\\n"],"names":[],"mappings":"AA2CO,sBAAQ,CAAC,OAAO,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,UAAU,IAAI,cAAc,CAAC,CAAC,MAAM,IAAI,CAAC"}`
};
var hydrate = dev;
var router = browser;
var prerender = true;
var About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<div class="${"content svelte-t58uux"}"><h1>About this app</h1>

	<p>This is a <a href="${"https://kit.svelte.dev"}">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	
	<pre>npm init svelte@next</pre>

	<p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
		the devtools network panel and reloading.
	</p>

	<p>The <a href="${"/todos"}">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>`;
});
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": About,
  hydrate,
  router,
  prerender
});
var load$6 = async ({fetch: fetch22}) => {
  const res = await fetch22("/notes.json");
  console.log(res);
  if (res.ok) {
    const jsonData = await res.json();
    const notes = await jsonData;
    return {props: {notes}};
  }
  const {message} = await res.json();
  return {error: new Error(message)};
};
var Notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {notes} = $$props;
  if ($$props.notes === void 0 && $$bindings.notes && notes !== void 0)
    $$bindings.notes(notes);
  return `<h1 class="${"text-2xl font-bold "}">Notes</h1>
<a href="${"/notes/new"}"><button class="${"px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"}">Add Note</button></a>

${each(notes, (note) => `<a href="${"/notes/" + escape2(note.slug)}"><h2>${escape2(note.title.rendered)}</h2>
  </a>`)}`;
});
var index$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Notes,
  load: load$6
});
var New = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title, content;
  return `<h1 class="${"text-2xl font-bold "}">Notes</h1>

<div class="${"mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg"}"><h3 class="${"text-center text-2xl mb-5"}">Add Note</h3>

  <input class="${"w-full rounded mb-5"}" placeholder="${"Title"}" type="${"text"}"${add_attribute("value", title, 1)}>
  <input class="${"w-full rounded mb-5"}" placeholder="${"Content"}" type="${"text"}"${add_attribute("value", content, 1)}>

  <button class="${"px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"}">Publish</button></div>`;
});
var _new = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": New
});
var load$5 = async (ctx) => {
  const res = await fetch(`https://imajenation.co.zw/mydiary/wp-json/wp/v2/note/?slug=${ctx.page.params.slug}`);
  if (res.ok) {
    console.log("res is ok");
    const data = await res.json();
    const post2 = await data[0];
    console.log(post2);
    return {props: {post: post2}};
  }
  const {message} = await res.json();
  return {error: new Error(message)};
};
var U5Bslugu5D$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {post: post2} = $$props;
  console.log(post2);
  post2.title.rendered;
  post2.content.rendered;
  if ($$props.post === void 0 && $$bindings.post && post2 !== void 0)
    $$bindings.post(post2);
  return `<div class="${"mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg"}">${`<h1>${escape2(post2.title.rendered)}</h1>

    <div>${post2.content.rendered}</div>

    <button class="${"px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"}">Edit</button>`}

  ${``}</div>`;
});
var _slug_$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bslugu5D$2,
  load: load$5
});
var css$4 = {
  code: `.todos.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{line-height:1;margin:var(--column-margin-top) auto 0 auto;max-width:var(--column-width);width:100%}.new.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{margin:0 0 .5rem}input.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{border:1px solid transparent}input.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn:focus-visible{border:1px solid #ff3e00!important;box-shadow:inset 1px 1px 6px rgba(0,0,0,.1);outline:none}.new.svelte-2qlxbn input.svelte-2qlxbn.svelte-2qlxbn{background:hsla(0,0%,100%,.05);box-sizing:border-box;font-size:28px;padding:.5em 1em .3em;text-align:center;width:100%}.new.svelte-2qlxbn input.svelte-2qlxbn.svelte-2qlxbn,.todo.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{border-radius:8px}.todo.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{grid-gap:.5rem;align-items:center;background-color:#fff;display:grid;filter:drop-shadow(2px 4px 6px rgba(0,0,0,.1));grid-template-columns:2rem 1fr 2rem;margin:0 0 .5rem;padding:.5rem;transform:translate(-1px,-1px);transition:filter .2s,transform .2s}.done.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{filter:drop-shadow(0 0 1px rgba(0,0,0,.1));opacity:.4;transform:none}form.text.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{align-items:center;display:flex;flex:1;position:relative}.todo.svelte-2qlxbn input.svelte-2qlxbn.svelte-2qlxbn{border-radius:3px;flex:1;padding:.5em 2em .5em .8em}.todo.svelte-2qlxbn button.svelte-2qlxbn.svelte-2qlxbn{background-color:transparent;background-position:50% 50%;background-repeat:no-repeat;border:none;height:2em;width:2em}button.toggle.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{background-size:1em auto;border:1px solid rgba(0,0,0,.2);border-radius:50%;box-sizing:border-box}.done.svelte-2qlxbn .toggle.svelte-2qlxbn.svelte-2qlxbn{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m20.5 1.5-13.063 13L1.5 8.59' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.delete.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5v17h15V5h-15z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10v6.5M14 10v6.5' stroke='%23fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5h20' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m8 5 1.645-3h4.744L16 5H8z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E");opacity:.2}.delete.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn:focus,.delete.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn:hover{opacity:1;transition:opacity .2s}.save.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2v9H7.5V2H17z' fill='%23fff' stroke='%23fff' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5v2M5.998 2H18.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");opacity:0;position:absolute;right:0}.save.svelte-2qlxbn.svelte-2qlxbn.svelte-2qlxbn:focus,.todo.svelte-2qlxbn input.svelte-2qlxbn:focus+.save.svelte-2qlxbn{opacity:1;transition:opacity .2s}`,
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport { enhance } from '$lib/form';\\n\\n\\t// see https://kit.svelte.dev/docs#loading\\n\\texport const load = async ({ fetch }) => {\\n\\t\\tconst res = await fetch('/todos.json');\\n\\n\\t\\tif (res.ok) {\\n\\t\\t\\tconst todos = await res.json();\\n\\n\\t\\t\\treturn {\\n\\t\\t\\t\\tprops: { todos }\\n\\t\\t\\t};\\n\\t\\t}\\n\\n\\t\\tconst { message } = await res.json();\\n\\n\\t\\treturn {\\n\\t\\t\\terror: new Error(message)\\n\\t\\t};\\n\\t};\\n</script>\\n\\n<script>\\n\\timport { scale } from 'svelte/transition';\\n\\timport { flip } from 'svelte/animate';\\n\\n\\texport let todos;\\n\\n\\tasync function patch(res) {\\n\\t\\tconst todo = await res.json();\\n\\n\\t\\ttodos = todos.map((t) => {\\n\\t\\t\\tif (t.uid === todo.uid) return todo;\\n\\t\\t\\treturn t;\\n\\t\\t});\\n\\t}\\n</script>\\n\\n<svelte:head>\\n\\t<title>Todos</title>\\n</svelte:head>\\n\\n<div class=\\"todos\\">\\n\\t<h1>Todos</h1>\\n\\n\\t<form\\n\\t\\tclass=\\"new\\"\\n\\t\\taction=\\"/todos.json\\"\\n\\t\\tmethod=\\"post\\"\\n\\t\\tuse:enhance={{\\n\\t\\t\\tresult: async (res, form) => {\\n\\t\\t\\t\\tconst created = await res.json();\\n\\t\\t\\t\\ttodos = [...todos, created];\\n\\n\\t\\t\\t\\tform.reset();\\n\\t\\t\\t}\\n\\t\\t}}\\n\\t>\\n\\t\\t<input name=\\"text\\" aria-label=\\"Add todo\\" placeholder=\\"+ tap to add a todo\\" />\\n\\t</form>\\n\\n\\t{#each todos as todo (todo.uid)}\\n\\t\\t<div\\n\\t\\t\\tclass=\\"todo\\"\\n\\t\\t\\tclass:done={todo.done}\\n\\t\\t\\ttransition:scale|local={{ start: 0.7 }}\\n\\t\\t\\tanimate:flip={{ duration: 200 }}\\n\\t\\t>\\n\\t\\t\\t<form\\n\\t\\t\\t\\taction=\\"/todos/{todo.uid}.json?_method=patch\\"\\n\\t\\t\\t\\tmethod=\\"post\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tpending: (data) => {\\n\\t\\t\\t\\t\\t\\ttodo.done = !!data.get('done');\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\tresult: patch\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<input type=\\"hidden\\" name=\\"done\\" value={todo.done ? '' : 'true'} />\\n\\t\\t\\t\\t<button class=\\"toggle\\" aria-label=\\"Mark todo as {todo.done ? 'not done' : 'done'}\\" />\\n\\t\\t\\t</form>\\n\\n\\t\\t\\t<form\\n\\t\\t\\t\\tclass=\\"text\\"\\n\\t\\t\\t\\taction=\\"/todos/{todo.uid}.json?_method=patch\\"\\n\\t\\t\\t\\tmethod=\\"post\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tresult: patch\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<input aria-label=\\"Edit todo\\" type=\\"text\\" name=\\"text\\" value={todo.text} />\\n\\t\\t\\t\\t<button class=\\"save\\" aria-label=\\"Save todo\\" />\\n\\t\\t\\t</form>\\n\\n\\t\\t\\t<form\\n\\t\\t\\t\\taction=\\"/todos/{todo.uid}.json?_method=delete\\"\\n\\t\\t\\t\\tmethod=\\"post\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tresult: () => {\\n\\t\\t\\t\\t\\t\\ttodos = todos.filter((t) => t.uid !== todo.uid);\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<button class=\\"delete\\" aria-label=\\"Delete todo\\" />\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\t{/each}\\n</div>\\n\\n<style>.todos{line-height:1;margin:var(--column-margin-top) auto 0 auto;max-width:var(--column-width);width:100%}.new{margin:0 0 .5rem}input{border:1px solid transparent}input:focus-visible{border:1px solid #ff3e00!important;box-shadow:inset 1px 1px 6px rgba(0,0,0,.1);outline:none}.new input{background:hsla(0,0%,100%,.05);box-sizing:border-box;font-size:28px;padding:.5em 1em .3em;text-align:center;width:100%}.new input,.todo{border-radius:8px}.todo{grid-gap:.5rem;align-items:center;background-color:#fff;display:grid;filter:drop-shadow(2px 4px 6px rgba(0,0,0,.1));grid-template-columns:2rem 1fr 2rem;margin:0 0 .5rem;padding:.5rem;transform:translate(-1px,-1px);transition:filter .2s,transform .2s}.done{filter:drop-shadow(0 0 1px rgba(0,0,0,.1));opacity:.4;transform:none}form.text{align-items:center;display:flex;flex:1;position:relative}.todo input{border-radius:3px;flex:1;padding:.5em 2em .5em .8em}.todo button{background-color:transparent;background-position:50% 50%;background-repeat:no-repeat;border:none;height:2em;width:2em}button.toggle{background-size:1em auto;border:1px solid rgba(0,0,0,.2);border-radius:50%;box-sizing:border-box}.done .toggle{background-image:url(\\"data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m20.5 1.5-13.063 13L1.5 8.59' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\\")}.delete{background-image:url(\\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5v17h15V5h-15z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10v6.5M14 10v6.5' stroke='%23fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5h20' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m8 5 1.645-3h4.744L16 5H8z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E\\");opacity:.2}.delete:focus,.delete:hover{opacity:1;transition:opacity .2s}.save{background-image:url(\\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2v9H7.5V2H17z' fill='%23fff' stroke='%23fff' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5v2M5.998 2H18.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\\");opacity:0;position:absolute;right:0}.save:focus,.todo input:focus+.save{opacity:1;transition:opacity .2s}</style>\\n"],"names":[],"mappings":"AA8GO,gDAAM,CAAC,YAAY,CAAC,CAAC,OAAO,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,UAAU,IAAI,cAAc,CAAC,CAAC,MAAM,IAAI,CAAC,8CAAI,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,+CAAK,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,WAAW,CAAC,+CAAK,cAAc,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,OAAO,UAAU,CAAC,WAAW,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,QAAQ,IAAI,CAAC,kBAAI,CAAC,iCAAK,CAAC,WAAW,KAAK,CAAC,CAAC,EAAE,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,WAAW,UAAU,CAAC,UAAU,IAAI,CAAC,QAAQ,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,WAAW,MAAM,CAAC,MAAM,IAAI,CAAC,kBAAI,CAAC,iCAAK,CAAC,+CAAK,CAAC,cAAc,GAAG,CAAC,+CAAK,CAAC,SAAS,KAAK,CAAC,YAAY,MAAM,CAAC,iBAAiB,IAAI,CAAC,QAAQ,IAAI,CAAC,OAAO,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,sBAAsB,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,QAAQ,KAAK,CAAC,UAAU,UAAU,IAAI,CAAC,IAAI,CAAC,CAAC,WAAW,MAAM,CAAC,GAAG,CAAC,SAAS,CAAC,GAAG,CAAC,+CAAK,CAAC,OAAO,YAAY,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,QAAQ,EAAE,CAAC,UAAU,IAAI,CAAC,IAAI,+CAAK,CAAC,YAAY,MAAM,CAAC,QAAQ,IAAI,CAAC,KAAK,CAAC,CAAC,SAAS,QAAQ,CAAC,mBAAK,CAAC,iCAAK,CAAC,cAAc,GAAG,CAAC,KAAK,CAAC,CAAC,QAAQ,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,mBAAK,CAAC,kCAAM,CAAC,iBAAiB,WAAW,CAAC,oBAAoB,GAAG,CAAC,GAAG,CAAC,kBAAkB,SAAS,CAAC,OAAO,IAAI,CAAC,OAAO,GAAG,CAAC,MAAM,GAAG,CAAC,MAAM,iDAAO,CAAC,gBAAgB,GAAG,CAAC,IAAI,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,cAAc,GAAG,CAAC,WAAW,UAAU,CAAC,mBAAK,CAAC,mCAAO,CAAC,iBAAiB,IAAI,6PAA6P,CAAC,CAAC,iDAAO,CAAC,iBAAiB,IAAI,ykBAAykB,CAAC,CAAC,QAAQ,EAAE,CAAC,iDAAO,MAAM,CAAC,iDAAO,MAAM,CAAC,QAAQ,CAAC,CAAC,WAAW,OAAO,CAAC,GAAG,CAAC,+CAAK,CAAC,iBAAiB,IAAI,ohBAAohB,CAAC,CAAC,QAAQ,CAAC,CAAC,SAAS,QAAQ,CAAC,MAAM,CAAC,CAAC,+CAAK,MAAM,CAAC,mBAAK,CAAC,mBAAK,MAAM,CAAC,mBAAK,CAAC,QAAQ,CAAC,CAAC,WAAW,OAAO,CAAC,GAAG,CAAC"}`
};
var load$4 = async ({fetch: fetch22}) => {
  const res = await fetch22("/todos.json");
  if (res.ok) {
    const todos = await res.json();
    return {props: {todos}};
  }
  const {message} = await res.json();
  return {error: new Error(message)};
};
var Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {todos} = $$props;
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  $$result.css.add(css$4);
  return `${$$result.head += `${$$result.title = `<title>Todos</title>`, ""}`, ""}

<div class="${"todos svelte-2qlxbn"}"><h1>Todos</h1>

	<form class="${"new svelte-2qlxbn"}" action="${"/todos.json"}" method="${"post"}"><input name="${"text"}" aria-label="${"Add todo"}" placeholder="${"+ tap to add a todo"}" class="${"svelte-2qlxbn"}"></form>

	${each(todos, (todo) => `<div class="${["todo svelte-2qlxbn", todo.done ? "done" : ""].join(" ").trim()}"><form action="${"/todos/" + escape2(todo.uid) + ".json?_method=patch"}" method="${"post"}"><input type="${"hidden"}" name="${"done"}"${add_attribute("value", todo.done ? "" : "true", 0)} class="${"svelte-2qlxbn"}">
				<button class="${"toggle svelte-2qlxbn"}" aria-label="${"Mark todo as " + escape2(todo.done ? "not done" : "done")}"></button></form>

			<form class="${"text svelte-2qlxbn"}" action="${"/todos/" + escape2(todo.uid) + ".json?_method=patch"}" method="${"post"}"><input aria-label="${"Edit todo"}" type="${"text"}" name="${"text"}"${add_attribute("value", todo.text, 0)} class="${"svelte-2qlxbn"}">
				<button class="${"save svelte-2qlxbn"}" aria-label="${"Save todo"}"></button></form>

			<form action="${"/todos/" + escape2(todo.uid) + ".json?_method=delete"}" method="${"post"}"><button class="${"delete svelte-2qlxbn"}" aria-label="${"Delete todo"}"></button></form>
		</div>`)}
</div>`;
});
var index$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Todos,
  load: load$4
});
var css$3 = {
  code: '.clock.svelte-m3fud5{align-items:center;border:4px solid #091921;border-radius:50%;box-shadow:0 -15px 15px rgba(255,255,255,0,5),inset 0 -15px 15px rgba(255,255,255,0,5),0 15px 15px rgba(0,0,0,0,0,3),inset 0 15px 15px rgba(0,0,0,0,3);display:flex;height:350px;justify-content:center;width:350px}.clock.svelte-m3fud5:before{content:""}',
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<div class=\\"flex justify-center items-center min-h-full bg-gray-800 p-5\\">\\n  <div class=\\"clock\\">\\n    <div class=\\"hour\\">\\n      <div class=\\"hr\\" id=\\"hr\\" />\\n    </div>\\n    <div class=\\"min\\">\\n      <div class=\\"mn\\" id=\\"mn\\" />\\n    </div>\\n    <div class=\\"sec\\">\\n      <div class=\\"sc\\" id=\\"sc\\" />\\n    </div>\\n  </div>\\n</div>\\n\\n<style>.clock{align-items:center;border:4px solid #091921;border-radius:50%;box-shadow:0 -15px 15px rgba(255,255,255,0,5),inset 0 -15px 15px rgba(255,255,255,0,5),0 15px 15px rgba(0,0,0,0,0,3),inset 0 15px 15px rgba(0,0,0,0,3);display:flex;height:350px;justify-content:center;width:350px}.clock:before{content:\\"\\"}</style>\\n"],"names":[],"mappings":"AAcO,oBAAM,CAAC,YAAY,MAAM,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,OAAO,CAAC,cAAc,GAAG,CAAC,WAAW,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,QAAQ,IAAI,CAAC,OAAO,KAAK,CAAC,gBAAgB,MAAM,CAAC,MAAM,KAAK,CAAC,oBAAM,OAAO,CAAC,QAAQ,EAAE,CAAC"}'
};
var Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"flex justify-center items-center min-h-full bg-gray-800 p-5"}"><div class="${"clock svelte-m3fud5"}"><div class="${"hour"}"><div class="${"hr"}" id="${"hr"}"></div></div>
    <div class="${"min"}"><div class="${"mn"}" id="${"mn"}"></div></div>
    <div class="${"sec"}"><div class="${"sc"}" id="${"sc"}"></div></div></div>
</div>`;
});
var index$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Tools
});
var Stopwatch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var Stopwatch$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Stopwatch
});
var domState = writable2({
  showTitleForm: false,
  showTitleContent: false,
  showFabs: false,
  showAdd: true,
  showAddDesc: false,
  activeIndex: 0,
  pageIndex: 0,
  save: false
});
writable2([]);
writable2([
  {
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email"
  },
  {
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email"
  },
  {
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email"
  },
  {
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email"
  },
  {
    name: "name",
    phoneNumber: ["phoneNumber"],
    email: "email"
  }
]);
var codeNotes = writable2([]);
var appNotes = writable2([
  {
    note: {
      title: "App",
      level: 1,
      steps: [
        {note: {title: "potsi"}},
        {
          note: {
            title: "piri",
            level: 2,
            steps: [
              {note: {title: "one"}},
              {note: {title: "two"}},
              {note: {title: "three"}},
              {
                note: {
                  title: "piri",
                  level: 3,
                  steps: [
                    {note: {title: "ichi"}},
                    {
                      note: {
                        title: "piri",
                        level: 4,
                        steps: [
                          {note: {title: "uno"}},
                          {note: {title: "dos"}},
                          {
                            note: {
                              title: "piri",
                              level: 5,
                              steps: [
                                {note: {title: "un"}},
                                {note: {title: "deaux"}},
                                {note: {title: "trois"}},
                                {note: {title: "quatre"}},
                                {note: {title: "cinq"}}
                              ]
                            }
                          },
                          {note: {title: "quattro"}}
                        ]
                      }
                    },
                    {note: {title: "san"}},
                    {note: {title: "chii"}},
                    {note: {title: "go"}}
                  ]
                }
              },
              {note: {title: "five"}}
            ]
          }
        },
        {note: {title: "tatu"}},
        {note: {title: "ina"}}
      ]
    }
  },
  {
    note: {
      title: "App",
      level: 1,
      steps: [
        {note: {title: "potsi"}},
        {
          note: {
            title: "piri",
            level: 2,
            steps: [
              {note: {title: "one"}},
              {note: {title: "two"}},
              {note: {title: "three"}},
              {
                note: {
                  title: "piri",
                  level: 3,
                  steps: [
                    {note: {title: "ichi"}},
                    {
                      note: {
                        title: "piri",
                        level: 4,
                        steps: [
                          {note: {title: "uno"}},
                          {note: {title: "dos"}},
                          {
                            note: {
                              title: "piri",
                              level: 5,
                              steps: [
                                {note: {title: "un"}},
                                {note: {title: "deaux"}},
                                {note: {title: "trois"}},
                                {note: {title: "quatre"}},
                                {note: {title: "cinq"}}
                              ]
                            }
                          },
                          {note: {title: "quattro"}}
                        ]
                      }
                    },
                    {note: {title: "san"}},
                    {note: {title: "chii"}},
                    {note: {title: "go"}}
                  ]
                }
              },
              {note: {title: "five"}}
            ]
          }
        },
        {note: {title: "tatu"}},
        {note: {title: "ina"}}
      ]
    }
  },
  {
    note: {
      title: "App",
      level: 1,
      steps: [
        {note: {title: "potsi"}},
        {
          note: {
            title: "piri",
            level: 2,
            steps: [
              {note: {title: "one"}},
              {note: {title: "two"}},
              {note: {title: "three"}},
              {
                note: {
                  title: "piri",
                  level: 3,
                  steps: [
                    {note: {title: "ichi"}},
                    {
                      note: {
                        title: "piri",
                        level: 4,
                        steps: [
                          {note: {title: "uno"}},
                          {note: {title: "dos"}},
                          {
                            note: {
                              title: "piri",
                              level: 5,
                              steps: [
                                {note: {title: "un"}},
                                {note: {title: "deaux"}},
                                {note: {title: "trois"}},
                                {note: {title: "quatre"}},
                                {note: {title: "cinq"}}
                              ]
                            }
                          },
                          {note: {title: "quattro"}}
                        ]
                      }
                    },
                    {note: {title: "san"}},
                    {note: {title: "chii"}},
                    {note: {title: "go"}}
                  ]
                }
              },
              {note: {title: "five"}}
            ]
          }
        },
        {note: {title: "tatu"}},
        {note: {title: "ina"}}
      ]
    }
  }
]);
writable2([
  {
    value: ["Rice", "Cooking oil", "Soap", "Royco"]
  }
]);
var cars = writable2([
  {
    name: "mazda",
    color: "gray",
    year: "2009"
  },
  {
    name: "toyota",
    color: "red",
    year: "2019"
  },
  {
    name: "bmw",
    color: "brown",
    year: "1990"
  },
  {
    name: "benz",
    color: "blue",
    year: "2020"
  },
  {
    name: "honda",
    color: "white",
    year: "2011"
  },
  {
    name: "wish",
    color: "yellow",
    year: "2018"
  }
]);
var Cars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cars, $$unsubscribe_cars;
  $$unsubscribe_cars = subscribe(cars, (value) => $cars = value);
  $$unsubscribe_cars();
  return `${each($cars, (mota, index2) => `<h2>${escape2(mota.name)}</h2>
    <h3>${escape2(mota.color)}</h3>
    <h3>${escape2(mota.year)}</h3>
    <a href="${"/cars/" + escape2(index2)}"><button class="${"py-1 px-2 bg-pink-700 text-white text-sm"}">Edit </button></a>

    <br>

    ---------------------`)}`;
});
var index$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Cars
});
async function load$3(ctx) {
  let index2 = ctx.page.params.index;
  return {props: {index: index2}};
}
var U5Bindexu5D$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cars, $$unsubscribe_cars;
  $$unsubscribe_cars = subscribe(cars, (value) => $cars = value);
  let {index: index2} = $$props;
  if ($$props.index === void 0 && $$bindings.index && index2 !== void 0)
    $$bindings.index(index2);
  $$unsubscribe_cars();
  return `<div class="${"w-full h-full"}"><div class="${"max-w-md mx-auto p-5 bg-white rounded-lg"}"><h1 class="${"mb-5"}">${escape2($cars[index2].name)}</h1>
        <input class="${"block w-full rounded-md mb-3"}" type="${"text"}"${add_attribute("value", $cars[index2].name, 1)}>
        <input class="${"block w-full rounded-md mb-3"}" type="${"text"}"${add_attribute("value", $cars[index2].color, 1)}>
        <input class="${"block w-full rounded-md mb-3"}" type="${"text"}"${add_attribute("value", $cars[index2].year, 1)}>

        <a href="${"/cars/"}"><button class="${"py-2 px-4 bg-pink-700 rounded-md text-white text-sm "}">Save
            </button></a></div></div>`;
});
var _index_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bindexu5D$1,
  load: load$3
});
var OurButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeIndex;
  let pageIndex;
  let $domState, $$unsubscribe_domState;
  let $codeNotes, $$unsubscribe_codeNotes;
  $$unsubscribe_domState = subscribe(domState, (value) => $domState = value);
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  activeIndex = 0;
  pageIndex = $domState.pageIndex;
  $$unsubscribe_domState();
  $$unsubscribe_codeNotes();
  return `${$domState.showFabs ? `<div class="${"fab"}">${$domState.showAddDesc ? `<div id="${"subject-btn"}"><button class="${"text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8 w-8"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"}" clip-rule="${"evenodd"}"></path></svg></button></div>` : ``}
    ${$codeNotes[pageIndex].steps.length > 0 ? `${$codeNotes[pageIndex].steps[activeIndex].showDForm ? `<div id="${"code-btn"}"><button class="${"text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8 w-8"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}"></path></svg></button></div>` : ``}

      ${$codeNotes[pageIndex].steps[activeIndex].showCForm ? `<div id="${"save-btn"}"><button class="${"text-white bg-green-600 rounded-full w-14 h-14 grid place-items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8 w-8"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M5 13l4 4L19 7"}"></path></svg></button></div>` : ``}` : ``}</div>` : ``}`;
});
var OurButtons$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": OurButtons
});
var Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $codeNotes, $$unsubscribe_codeNotes;
  let $domState, $$unsubscribe_domState;
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  $$unsubscribe_domState = subscribe(domState, (value) => $domState = value);
  $$unsubscribe_codeNotes();
  $$unsubscribe_domState();
  return `<div class="${"fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"}"><h3 class="${"ml-10"}">Code Notes</h3></div>

<div class="${"section md:mt-32 mt-20"}"><div class="${"container mx-auto max-w-lg "}">${$codeNotes.length ? each($codeNotes, (note, index2) => `<a href="${"/code/" + escape2(index2)}"><h3 class="${"md:text-4xl text-lg ml-8 md:ml-10"}">${escape2($codeNotes[index2].title)}</h3>
      </a>`) : `Please Press The Add Button To Create Your Notes!!!`}

    <div class="${"app-wrapper"}"><div class="${"note-footer"}">
        ${validate_component(OurButtons, "OurButtons").$$render($$result, {}, {}, {})}</div>
      <div class="${"bottom-bar md:pl-64"}"><div id="${"add-btn"}">${!$domState.save ? `<button class="${"text-white rounded-full h-14 w-14 bg-pink-700 grid place-items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8 w-8"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 6v6m0 0v6m0-6h6m-6 0H6"}"></path></svg></button>` : ``}

          ${$domState.save ? `<button class="${"text-white rounded-full h-14 w-14 bg-green-700 grid place-items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8 w-8"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M5 13l4 4L19 7"}"></path></svg></button>` : ``}</div></div></div></div></div>`;
});
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Code
});
var DescriptionContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_domState;
  let $codeNotes, $$unsubscribe_codeNotes;
  $$unsubscribe_domState = subscribe(domState, (value) => value);
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  let {step} = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$unsubscribe_domState();
  $$unsubscribe_codeNotes();
  return `<div><div id="${"desc-form-btn"}" class="${"edit-btn"}"><button class="${""}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"}"></path></svg></button></div>

  <h3 class="${"text-2xl mb-3"}">${escape2($codeNotes[0].steps[step].subtitle)}</h3>
  <p class="${"text-lg mb-3"}">${escape2($codeNotes[0].steps[step].desc)}</p></div>`;
});
var DescriptionContent$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": DescriptionContent
});
var DescriptionForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $codeNotes, $$unsubscribe_codeNotes;
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  let {step} = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$unsubscribe_codeNotes();
  return `<div class="${"flex flex-col-reverse mb-3"}"><input class="${"desc__subtitle-input "}" type="${"text"}" id="${"subtitle-field"}"${add_attribute("value", $codeNotes[0].steps[step].subtitle, 1)}>
  <label class="${""}" for="${"subtitle-field"}">Subtitle...</label></div>

<div class="${"flex flex-col-reverse mb-3"}"><textarea class="${"desc__content-input "}" type="${"text"}" rows="${"3"}" id="${"content-field"}">${$codeNotes[0].steps[step].desc || ""}</textarea>
  <label class="${""}" for="${"content-field"}">Content...</label></div>

<div class="${"flex flex-col-reverse mb-3"}"><input class="${"desc__subtitle-input "}" type="${"file"}" id="${"image-field"}" multiple>
  <label class="${""}" for="${"image-field"}">Upload Images...</label></div>`;
});
var DescriptionForm$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": DescriptionForm
});
var TitleContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_domState;
  let $codeNotes, $$unsubscribe_codeNotes;
  $$unsubscribe_domState = subscribe(domState, (value) => value);
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  let {index: index2} = $$props;
  if ($$props.index === void 0 && $$bindings.index && index2 !== void 0)
    $$bindings.index(index2);
  $$unsubscribe_domState();
  $$unsubscribe_codeNotes();
  return `<div class="${"w-full bg-gray-400 p-4 md:top-14 top-24 fixed inset-x-0 md:pl-64 text-black z-10"}"><div id="${"title-form-btn"}" class="${"edit-btn"}"><button class="${""}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"}"></path></svg></button></div>

  <h3 class="${"md:text-4xl text-xl ml-8 md:ml-10"}">${escape2($codeNotes[index2].title)}</h3></div>`;
});
var TitleContent$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": TitleContent
});
var CodeContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $codeNotes, $$unsubscribe_codeNotes;
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  let {step} = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$unsubscribe_codeNotes();
  return `<div><div id="${"snippet-form-btn"}" class="${"edit-btn"}"><button class="${""}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"}"></path></svg></button></div>
  <h3>${escape2($codeNotes[0].steps[step].code)}</h3></div>`;
});
var CodeContent$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": CodeContent
});
var TitleForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_domState;
  let $codeNotes, $$unsubscribe_codeNotes;
  $$unsubscribe_domState = subscribe(domState, (value) => value);
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  let {index: index2} = $$props;
  if ($$props.index === void 0 && $$bindings.index && index2 !== void 0)
    $$bindings.index(index2);
  $$unsubscribe_domState();
  $$unsubscribe_codeNotes();
  return `<div class="${"flex flex-col"}"><label class="${""}" for="${"input-title"}">Title...</label>

  <input class="${"title__input "}" type="${"text"}" id="${"input-title"}"${add_attribute("value", $codeNotes[index2].title, 1)}></div>

<button>Save</button>`;
});
var TitleForm$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": TitleForm
});
var CodeForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $codeNotes, $$unsubscribe_codeNotes;
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  let {step} = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$unsubscribe_codeNotes();
  return `<div class="${"flex flex-col-reverse"}">

  <textarea class="${"snippet__code-input  "}" type="${"text"}" rows="${"3"}" id="${"snippet-field"}">${$codeNotes[0].steps[step].code || ""}</textarea>
  <label class="${""}" for="${"snippet-field"}">Code...</label></div>`;
});
var CodeForm$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": CodeForm
});
var idCount = 1;
var NoteBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $codeNotes, $$unsubscribe_codeNotes;
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  let {step} = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$unsubscribe_codeNotes();
  return `<div class="${"note-body-wrapper note-body-wrapper-" + escape2(idCount)}"><div class="${"note-body__desc note-body__desc-" + escape2(idCount)}"><div class="${"desc__form-div desc__form-div-" + escape2(idCount)}">${$codeNotes[0].steps[step].showDForm ? `${validate_component(DescriptionForm, "DescriptionForm").$$render($$result, {step}, {}, {})}` : ``}</div>
    <div class="${"desc__content-div desc__content-div-" + escape2(idCount)}">${$codeNotes[0].steps[step].showDContent ? `${validate_component(DescriptionContent, "DescriptionContent").$$render($$result, {step}, {}, {})}` : ``}</div></div>
  <div class="${"note-body__snippet note-body__snippet-" + escape2(idCount)}"><div class="${"snippet__form-div snippet__form-div-" + escape2(idCount)}">${$codeNotes[0].steps[step].showCForm ? `${validate_component(CodeForm, "CodeForm").$$render($$result, {step}, {}, {})}` : ``}</div>
    <div class="${"snippet__content-div snippet__content-div-" + escape2(idCount)}">${$codeNotes[0].steps[step].showCContent ? `${validate_component(CodeContent, "CodeContent").$$render($$result, {step}, {}, {})}` : ``}</div></div></div>`;
});
var NoteBody$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": NoteBody
});
async function load$2(ctx) {
  console.log(ctx.page.params.index);
  let index2 = ctx.page.params.index;
  return {props: {index: index2}};
}
var U5Bindexu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $domState, $$unsubscribe_domState;
  let $codeNotes, $$unsubscribe_codeNotes;
  $$unsubscribe_domState = subscribe(domState, (value) => $domState = value);
  $$unsubscribe_codeNotes = subscribe(codeNotes, (value) => $codeNotes = value);
  let {index: index2} = $$props;
  let noteIndex = index2;
  set_store_value(domState, $domState.pageIndex = index2, $domState);
  console.log("page index", $domState.pageIndex);
  if ($$props.index === void 0 && $$bindings.index && index2 !== void 0)
    $$bindings.index(index2);
  $$unsubscribe_domState();
  $$unsubscribe_codeNotes();
  return `<div class="${"fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"}"><h3 class="${"ml-10"}">Code Notes</h3></div>

<div class="${"section md:mt-32 mt-20"}"><div class="${"container mx-auto max-w-lg "}"><div class="${"app-wrapper"}"><div class="${"note-title"}"><div class="${"note-title__title"}"><div class="${"title__form-div"}">${$domState.showTitleForm ? `${validate_component(TitleForm, "TitleForm").$$render($$result, {index: index2}, {}, {})}` : ``}</div>
          <div class="${"title__content-div"}">${$domState.showTitleContent ? `${validate_component(TitleContent, "TitleContent").$$render($$result, {index: index2}, {}, {})}` : ``}</div></div></div>
      <div class="${"note-body"}">${$domState.showTitleContent ? `<ol class="${"list-decimal"}">${each($codeNotes[noteIndex].steps, (step, index3) => `<li class="${"mb-5"}">${validate_component(NoteBody, "NoteBody").$$render($$result, {step: index3}, {}, {})}
              </li>`)}</ol>` : ``}</div>

      <div class="${"note-footer"}">
        ${validate_component(OurButtons, "OurButtons").$$render($$result, {}, {}, {})}</div>
      <div class="${"bottom-bar md:pl-64"}"><div id="${"add-btn"}">${!$domState.save ? `<button class="${"text-white rounded-full h-14 w-14 bg-pink-700 grid place-items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8 w-8"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 6v6m0 0v6m0-6h6m-6 0H6"}"></path></svg></button>` : ``}

          ${$domState.save ? `<button class="${"text-white rounded-full h-14 w-14 bg-green-700 grid place-items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-8 w-8"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M5 13l4 4L19 7"}"></path></svg></button>` : ``}</div></div></div></div></div>`;
});
var _index_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bindexu5D,
  load: load$2
});
var Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hours;
  let minutes;
  let seconds;
  let milliseconds;
  let formattedTime;
  let {elapsedTime} = $$props;
  const pad2 = (number) => `00${number}`.slice(-2);
  const pad3 = (number) => `000${number}`.slice(-3);
  if ($$props.elapsedTime === void 0 && $$bindings.elapsedTime && elapsedTime !== void 0)
    $$bindings.elapsedTime(elapsedTime);
  hours = pad2(Math.floor(elapsedTime / 1e3 / 60 / 60) % 60);
  minutes = pad2(Math.floor(elapsedTime / 1e3 / 60) % 60);
  seconds = pad2(Math.floor(elapsedTime / 1e3) % 60);
  milliseconds = pad3(elapsedTime % 1e3);
  formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  return `<div class="${"block mb-10"}">${escape2(formattedTime)}</div>`;
});
var css$2 = {
  code: ".app.svelte-11v3xen.svelte-11v3xen.svelte-11v3xen{height:100vh;left:0;position:absolute;top:0}.app.svelte-11v3xen>div.svelte-11v3xen.svelte-11v3xen{height:100%;width:100%}.app.svelte-11v3xen .score-screen.svelte-11v3xen.svelte-11v3xen,.app.svelte-11v3xen .start-screen.svelte-11v3xen.svelte-11v3xen{align-items:center;display:flex;justify-content:center}.app.svelte-11v3xen .score-screen button.svelte-11v3xen.svelte-11v3xen,.app.svelte-11v3xen .start-screen button.svelte-11v3xen.svelte-11v3xen{background:#4a77dc;border:none;border-radius:20px;color:#eee;cursor:pointer;outline:none;padding:10px 20px}.app.svelte-11v3xen .quiz-screen .main.svelte-11v3xen.svelte-11v3xen{padding:50px}.app.svelte-11v3xen .quiz-screen .main .options.svelte-11v3xen.svelte-11v3xen{display:flex;flex-wrap:wrap;justify-content:space-between}.app.svelte-11v3xen .quiz-screen .main .options button.svelte-11v3xen.svelte-11v3xen{background-color:#d3d3d3;border:1px solid grey;border-radius:30px;margin:10px 0;padding:10px 0;width:45%}.app.svelte-11v3xen .quiz-screen .main .options button.selected.svelte-11v3xen.svelte-11v3xen{background:#111;color:#eee}.app.svelte-11v3xen .quiz-screen .footer.svelte-11v3xen.svelte-11v3xen{align-items:center;background:#eee;bottom:0;display:flex;height:50px;justify-content:space-between;left:0;position:fixed;width:100%}.app.svelte-11v3xen .quiz-screen .footer.svelte-11v3xen>div.svelte-11v3xen{margin:0 10px}.app.svelte-11v3xen .quiz-screen .footer .progress-bar.svelte-11v3xen.svelte-11v3xen{background:#aaa;border-radius:10px;height:10px;overflow:hidden;width:150px}.app.svelte-11v3xen .quiz-screen .footer .progress-bar div.svelte-11v3xen.svelte-11v3xen{background:#4a77dc;height:100%}.app.svelte-11v3xen .score-screen.svelte-11v3xen.svelte-11v3xen{flex-direction:column}.app.svelte-11v3xen .score-screen h1.svelte-11v3xen.svelte-11v3xen{margin-bottom:10px}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\">\\n  export const load = async ({ fetch }) => {\\n    const res = await fetch(\\"/quiz.json\\");\\n\\n    if (res.ok) {\\n      const jsonData = await res.json();\\n      const quiz = await jsonData.data;\\n\\n      return {\\n        props: { quiz },\\n      };\\n    }\\n\\n    const { message } = await res.json();\\n\\n    return {\\n      error: new Error(message),\\n    };\\n  };\\n</script>\\n\\n<script>\\n  import Timer from \\"$lib/Timer/index.svelte\\";\\n  export let quiz;\\n  console.log(quiz);\\n\\n  let questions = quiz,\\n    elapsedTime = 0,\\n    elapsedGameTime = 0,\\n    now = 0,\\n    countDownTimer = null,\\n    pauseTime = 0,\\n    quizDuration = 5,\\n    quizTime = quizDuration,\\n    gameTimerId = null,\\n    gameTime = 15;\\n\\n  let answers = new Array(questions.length).fill(\\"answer\\");\\n  let questionPointer = -1;\\n\\n  function getScore() {\\n    let score = answers.reduce((zzero, selectedAnswer, quizIndex) => {\\n      if (\\n        questions[quizIndex].question_answers[selectedAnswer].is_correct == 1\\n      ) {\\n        return zzero + 1;\\n      }\\n      return zzero;\\n    }, 0);\\n    return (score / questions.length) * 100 + \\"%\\";\\n  }\\n\\n  function restartQuiz() {\\n    answers = new Array(questions.length).fill(null);\\n    questionPointer = 0;\\n  }\\n\\n  let getAns = (opt) => {\\n    let option = opt.answer_title.split(\\"$\\");\\n    return option[0];\\n  };\\n\\n  let getImg = (opt) => {\\n    let image = opt.answer_title.split(\\"$\\");\\n    return image[1];\\n  };\\n\\n  function start() {\\n    questions = quiz;\\n    questionPointer = 0;\\n    chachaya();\\n  }\\n\\n  function clear(id) {\\n    clearInterval(id);\\n  }\\n\\n  function gameTimer() {\\n    quizTime--;\\n    gameTime--;\\n    console.log(quizTime);\\n\\n    if (quizTime === 0 && gameTime >= 0) {\\n      questionPointer++;\\n      quizTime += quizDuration;\\n    } else if (gameTime <= 0 && quizTime === 0) {\\n      console.log(\\"Game Over\\");\\n      clear(gameTimerId);\\n      questionPointer++;\\n    }\\n  }\\n\\n  function newGameTimer() {\\n    let duration = quizDuration * 1000;\\n    let gameDuration = gameTime * 1000;\\n    let everyMilliSecond = Date.now();\\n    \\n    elapsedTime = now + duration - everyMilliSecond + pauseTime;\\n\\n    elapsedGameTime = now + gameDuration - everyMilliSecond + pauseTime;\\n\\n    if (elapsedTime <= 0 && elapsedGameTime > 0) {\\n      console.log(\\"Adding\\");\\n      //questionPointer++;\\n      elapsedTime += duration;\\n    } else if (elapsedGameTime <= 0 && elapsedTime <= 0) {\\n      console.log(\\"Game Over\\");\\n      clear(countDownTimer);\\n      (elapsedGameTime = 0), (elapsedTime = 0);\\n\\n      //questionPointer++;\\n    }\\n  }\\n\\n  function countDown() {\\n    countDownTimer = setInterval(newGameTimer);\\n  }\\n\\n  function chachaya() {\\n    now = Date.now();\\n    countDown();\\n  }\\n\\n  function pause() {\\n    clearInterval(countDownTimer);\\n    pauseTime = elapsedTime;\\n  }\\n\\n  function stopCountDown() {\\n    elapsedTime = 0;\\n    clearInterval(countDownTimer);\\n  }\\n</script>\\n\\n<div class=\\"hidden\\">\\n  <button\\n    class=\\"px-2 py-1 mb-3 ml-20 text-white bg-yellow-500\\"\\n    on:click={chachaya}>Start</button\\n  >\\n  <button class=\\"px-2 py-1 mb-3 text-white bg-yellow-700\\" on:click={pause}\\n    >Pause</button\\n  >\\n  <button\\n    class=\\"px-2 py-1 mb-3 text-white bg-yellow-900\\"\\n    on:click={stopCountDown}>Stop</button\\n  >\\n</div>\\n\\n<div class=\\"app\\">\\n  <Timer {elapsedTime} />\\n  <Timer elapsedTime={elapsedGameTime} />\\n  {#if questionPointer == -1}\\n    <div class=\\"start-screen\\">\\n      <button on:click={start}> Start Quiz </button>\\n    </div>\\n  {:else if !(questionPointer > answers.length - 1)}\\n    <div class=\\"quiz-screen\\">\\n      <div class=\\"main\\">\\n        <h2>{questions[questionPointer].question_title}</h2>\\n\\n        <div class=\\"options\\">\\n          {#each questions[questionPointer].question_answers as opt, i}\\n            <div class=\\"w-24 \\">\\n              <img src={getImg(opt)} alt=\\"\\" />\\n              <button\\n                class={answers[questionPointer] == i ? \\"selected\\" : \\"\\"}\\n                on:click={() => {\\n                  answers[questionPointer] = i;\\n                  console.log(answers);\\n                }}\\n              >\\n                {getAns(opt)}\\n              </button>\\n            </div>\\n          {/each}\\n        </div>\\n      </div>\\n\\n      <div class=\\"footer\\">\\n        <div class=\\"progress-bar\\">\\n          <div style=\\"width:{(questionPointer / questions.length) * 100}%\\" />\\n        </div>\\n\\n        <div class=\\"buttons\\">\\n          <button\\n            disabled={questionPointer === 0}\\n            on:click={() => {\\n              questionPointer--;\\n            }}\\n          >\\n            &lt;\\n          </button>\\n          <button\\n            on:click={() => {\\n              questionPointer++;\\n            }}\\n          >\\n            &gt;\\n          </button>\\n        </div>\\n      </div>\\n    </div>\\n  {:else}\\n    <div class=\\"score-screen\\">\\n      <h1>Your score:{getScore()}</h1>\\n\\n      <button on:click={restartQuiz}> Restar Quiz </button>\\n    </div>\\n  {/if}\\n</div>\\n\\n<style>.app{height:100vh;left:0;position:absolute;top:0}.app>div{height:100%;width:100%}.app .score-screen,.app .start-screen{align-items:center;display:flex;justify-content:center}.app .score-screen button,.app .start-screen button{background:#4a77dc;border:none;border-radius:20px;color:#eee;cursor:pointer;outline:none;padding:10px 20px}.app .quiz-screen .main{padding:50px}.app .quiz-screen .main .options{display:flex;flex-wrap:wrap;justify-content:space-between}.app .quiz-screen .main .options button{background-color:#d3d3d3;border:1px solid grey;border-radius:30px;margin:10px 0;padding:10px 0;width:45%}.app .quiz-screen .main .options button.selected{background:#111;color:#eee}.app .quiz-screen .footer{align-items:center;background:#eee;bottom:0;display:flex;height:50px;justify-content:space-between;left:0;position:fixed;width:100%}.app .quiz-screen .footer>div{margin:0 10px}.app .quiz-screen .footer .progress-bar{background:#aaa;border-radius:10px;height:10px;overflow:hidden;width:150px}.app .quiz-screen .footer .progress-bar div{background:#4a77dc;height:100%}.app .score-screen{flex-direction:column}.app .score-screen h1{margin-bottom:10px}</style>\\n"],"names":[],"mappings":"AAmNO,iDAAI,CAAC,OAAO,KAAK,CAAC,KAAK,CAAC,CAAC,SAAS,QAAQ,CAAC,IAAI,CAAC,CAAC,mBAAI,CAAC,iCAAG,CAAC,OAAO,IAAI,CAAC,MAAM,IAAI,CAAC,mBAAI,CAAC,2CAAa,CAAC,mBAAI,CAAC,2CAAa,CAAC,YAAY,MAAM,CAAC,QAAQ,IAAI,CAAC,gBAAgB,MAAM,CAAC,mBAAI,CAAC,aAAa,CAAC,oCAAM,CAAC,mBAAI,CAAC,aAAa,CAAC,oCAAM,CAAC,WAAW,OAAO,CAAC,OAAO,IAAI,CAAC,cAAc,IAAI,CAAC,MAAM,IAAI,CAAC,OAAO,OAAO,CAAC,QAAQ,IAAI,CAAC,QAAQ,IAAI,CAAC,IAAI,CAAC,mBAAI,CAAC,YAAY,CAAC,mCAAK,CAAC,QAAQ,IAAI,CAAC,mBAAI,CAAC,YAAY,CAAC,KAAK,CAAC,sCAAQ,CAAC,QAAQ,IAAI,CAAC,UAAU,IAAI,CAAC,gBAAgB,aAAa,CAAC,mBAAI,CAAC,YAAY,CAAC,KAAK,CAAC,QAAQ,CAAC,oCAAM,CAAC,iBAAiB,OAAO,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,cAAc,IAAI,CAAC,OAAO,IAAI,CAAC,CAAC,CAAC,QAAQ,IAAI,CAAC,CAAC,CAAC,MAAM,GAAG,CAAC,mBAAI,CAAC,YAAY,CAAC,KAAK,CAAC,QAAQ,CAAC,MAAM,uCAAS,CAAC,WAAW,IAAI,CAAC,MAAM,IAAI,CAAC,mBAAI,CAAC,YAAY,CAAC,qCAAO,CAAC,YAAY,MAAM,CAAC,WAAW,IAAI,CAAC,OAAO,CAAC,CAAC,QAAQ,IAAI,CAAC,OAAO,IAAI,CAAC,gBAAgB,aAAa,CAAC,KAAK,CAAC,CAAC,SAAS,KAAK,CAAC,MAAM,IAAI,CAAC,mBAAI,CAAC,YAAY,CAAC,sBAAO,CAAC,kBAAG,CAAC,OAAO,CAAC,CAAC,IAAI,CAAC,mBAAI,CAAC,YAAY,CAAC,OAAO,CAAC,2CAAa,CAAC,WAAW,IAAI,CAAC,cAAc,IAAI,CAAC,OAAO,IAAI,CAAC,SAAS,MAAM,CAAC,MAAM,KAAK,CAAC,mBAAI,CAAC,YAAY,CAAC,OAAO,CAAC,aAAa,CAAC,iCAAG,CAAC,WAAW,OAAO,CAAC,OAAO,IAAI,CAAC,mBAAI,CAAC,2CAAa,CAAC,eAAe,MAAM,CAAC,mBAAI,CAAC,aAAa,CAAC,gCAAE,CAAC,cAAc,IAAI,CAAC"}'
};
var load$1 = async ({fetch: fetch22}) => {
  const res = await fetch22("/quiz.json");
  if (res.ok) {
    const jsonData = await res.json();
    const quiz = await jsonData.data;
    return {props: {quiz}};
  }
  const {message} = await res.json();
  return {error: new Error(message)};
};
var Quiz = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {quiz} = $$props;
  console.log(quiz);
  let questions = quiz, elapsedTime = 0, elapsedGameTime = 0;
  let answers = new Array(questions.length).fill("answer");
  let questionPointer = -1;
  function getScore() {
    let score = answers.reduce((zzero, selectedAnswer, quizIndex) => {
      if (questions[quizIndex].question_answers[selectedAnswer].is_correct == 1) {
        return zzero + 1;
      }
      return zzero;
    }, 0);
    return score / questions.length * 100 + "%";
  }
  let getAns = (opt) => {
    let option = opt.answer_title.split("$");
    return option[0];
  };
  let getImg = (opt) => {
    let image = opt.answer_title.split("$");
    return image[1];
  };
  if ($$props.quiz === void 0 && $$bindings.quiz && quiz !== void 0)
    $$bindings.quiz(quiz);
  $$result.css.add(css$2);
  return `<div class="${"hidden"}"><button class="${"px-2 py-1 mb-3 ml-20 text-white bg-yellow-500"}">Start</button>
  <button class="${"px-2 py-1 mb-3 text-white bg-yellow-700"}">Pause</button>
  <button class="${"px-2 py-1 mb-3 text-white bg-yellow-900"}">Stop</button></div>

<div class="${"app svelte-11v3xen"}">${validate_component(Timer, "Timer").$$render($$result, {elapsedTime}, {}, {})}
  ${validate_component(Timer, "Timer").$$render($$result, {elapsedTime: elapsedGameTime}, {}, {})}
  ${questionPointer == -1 ? `<div class="${"start-screen svelte-11v3xen"}"><button class="${"svelte-11v3xen"}">Start Quiz </button></div>` : `${!(questionPointer > answers.length - 1) ? `<div class="${"quiz-screen svelte-11v3xen"}"><div class="${"main svelte-11v3xen"}"><h2>${escape2(questions[questionPointer].question_title)}</h2>

        <div class="${"options svelte-11v3xen"}">${each(questions[questionPointer].question_answers, (opt, i) => `<div class="${"w-24  svelte-11v3xen"}"><img${add_attribute("src", getImg(opt), 0)} alt="${""}">
              <button class="${escape2(null_to_empty(answers[questionPointer] == i ? "selected" : "")) + " svelte-11v3xen"}">${escape2(getAns(opt))}</button>
            </div>`)}</div></div>

      <div class="${"footer svelte-11v3xen"}"><div class="${"progress-bar svelte-11v3xen"}"><div style="${"width:" + escape2(questionPointer / questions.length * 100) + "%"}" class="${"svelte-11v3xen"}"></div></div>

        <div class="${"buttons svelte-11v3xen"}"><button ${questionPointer === 0 ? "disabled" : ""} class="${"svelte-11v3xen"}">&lt;
          </button>
          <button class="${"svelte-11v3xen"}">&gt;
          </button></div></div></div>` : `<div class="${"score-screen svelte-11v3xen"}"><h1 class="${"svelte-11v3xen"}">Your score:${escape2(getScore())}</h1>

      <button class="${"svelte-11v3xen"}">Restar Quiz </button></div>`}`}
</div>`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Quiz,
  load: load$1
});
var U5Bslugu5D$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var _slug_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bslugu5D$1
});
var css$1 = {
  code: ".fab.svelte-1xt8mje{bottom:50px;position:fixed;right:50px}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n  import { appNotes } from \\"$lib/js/store\\";\\n\\n  function displayForm() {}\\n</script>\\n\\n<style>.fab{bottom:50px;position:fixed;right:50px}</style>\\n\\n<h1 class=\\"text-2xl font-bold\\">App Notes</h1>\\n\\n<main>\\n  <a href=\\"/app/hello\\">\\n    <h3 class=\\"mb-10\\">App Notes</h3>\\n  </a>\\n  <ul>\\n    {#each $appNotes as notes, index}\\n      <li>\\n        <div class=\\"bg-\\" style=\\"border-bottom: 2px solid gray\\">\\n          <h5>{notes.note.title}</h5>\\n          <span>\\n            <a href=\\"/app/{index}\\">\\n              <button\\n                class=\\"py-2 px-4 bg-pink-700 rounded-md text-white text-sm \\">\\n                More\\n              </button>\\n            </a></span>\\n          <span>{notes.note.steps.length}\\n            Step{#if notes.note.steps.length > 1}s{/if}</span>\\n        </div>\\n      </li>\\n    {/each}\\n  </ul>\\n</main>\\n<div class=\\"fab\\"><button on:click={displayForm}> + </button></div>\\n"],"names":[],"mappings":"AAMO,mBAAI,CAAC,OAAO,IAAI,CAAC,SAAS,KAAK,CAAC,MAAM,IAAI,CAAC"}'
};
var App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $appNotes, $$unsubscribe_appNotes;
  $$unsubscribe_appNotes = subscribe(appNotes, (value) => $appNotes = value);
  $$result.css.add(css$1);
  $$unsubscribe_appNotes();
  return `<h1 class="${"text-2xl font-bold"}">App Notes</h1>

<main><a href="${"/app/hello"}"><h3 class="${"mb-10"}">App Notes</h3></a>
  <ul>${each($appNotes, (notes, index2) => `<li><div class="${"bg-"}" style="${"border-bottom: 2px solid gray"}"><h5>${escape2(notes.note.title)}</h5>
          <span><a href="${"/app/" + escape2(index2)}"><button class="${"py-2 px-4 bg-pink-700 rounded-md text-white text-sm "}">More
              </button>
            </a></span>
          <span>${escape2(notes.note.steps.length)}
            Step${notes.note.steps.length > 1 ? `s` : ``}</span></div>
      </li>`)}</ul></main>
<div class="${"fab svelte-1xt8mje"}"><button>+ </button></div>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": App
});
var css = {
  code: ".add-btn.svelte-t3afc3{align-self:flex-end;margin-bottom:15px}",
  map: '{"version":3,"file":"[slug].svelte","sources":["[slug].svelte"],"sourcesContent":["<script context=\\"module\\">\\n  export async function load(ctx) {\\n    let slug = ctx.page.params.slug;\\n    return { props: { slug } };\\n  }\\n</script>\\n\\n<script>\\n  import { appNotes } from \\"$lib/js/store\\";\\n  export let slug;\\n  let appName;\\n  let steps = [\\"\\"];\\n\\n  $: myNotes = {\\n    appName: appName,\\n    steps: steps,\\n  };\\n\\n  function displayNotes() {\\n    $appNotes = [...$appNotes, myNotes];\\n    appName = \\"\\";\\n    steps = [\\"\\"];\\n  }\\n\\n  function newStep() {\\n    steps = [...steps, \\"\\"];\\n    console.log(steps);\\n  }\\n\\n  function deleteStep(index) {\\n    steps.splice(index, 1);\\n    steps = steps;\\n  }\\n</script>\\n\\n<style>.add-btn{align-self:flex-end;margin-bottom:15px}</style>\\n\\n<h1>I am slug App notes</h1>\\n\\n<input type=\\"text\\" bind:value={appName} />App Name\\n{#each steps as step, index}\\n  <div class=\\"flex flex-row\\">\\n    <div style=\\"width: 100%;\\" class=\\"pr-2\\">\\n      <input type=\\"text\\" bind:value={steps[index]} />Step\\n      {index + 1}\\n    </div>\\n\\n    <div class=\\"add-btn\\">\\n      {#if index !== steps.length - 1}\\n        <button\\n          on:click={() => {\\n            deleteStep(index);\\n          }}>\\n          -\\n        </button>\\n      {/if}\\n      {#if index === steps.length - 1}\\n        <button on:click={newStep}> + </button>\\n      {/if}\\n    </div>\\n  </div>\\n{/each}\\n\\n<button on:click={displayNotes}>Save</button>\\n"],"names":[],"mappings":"AAmCO,sBAAQ,CAAC,WAAW,QAAQ,CAAC,cAAc,IAAI,CAAC"}'
};
async function load(ctx) {
  let slug = ctx.page.params.slug;
  return {props: {slug}};
}
var U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_appNotes;
  $$unsubscribe_appNotes = subscribe(appNotes, (value) => value);
  let {slug} = $$props;
  let appName;
  let steps = [""];
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  $$result.css.add(css);
  $$unsubscribe_appNotes();
  return `<h1>I am slug App notes</h1>

<input type="${"text"}"${add_attribute("value", appName, 1)}>App Name
${each(steps, (step, index2) => `<div class="${"flex flex-row"}"><div style="${"width: 100%;"}" class="${"pr-2"}"><input type="${"text"}"${add_attribute("value", steps[index2], 1)}>Step
      ${escape2(index2 + 1)}</div>

    <div class="${"add-btn svelte-t3afc3"}">${index2 !== steps.length - 1 ? `<button>-
        </button>` : ``}
      ${index2 === steps.length - 1 ? `<button>+ </button>` : ``}</div>
  </div>`)}

<button>Save</button>`;
});
var _slug_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bslugu5D,
  load
});

// .svelte-kit/vercel/entry.js
var entry_default = async (req, res) => {
  const {pathname, searchParams} = new URL(req.url || "", "http://localhost");
  const rendered = await render({
    method: req.method,
    headers: req.headers,
    path: pathname,
    query: searchParams,
    rawBody: await getRawBody(req)
  });
  if (rendered) {
    const {status, headers, body} = rendered;
    return res.writeHead(status, headers).end(body);
  }
  return res.writeHead(404).end();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
