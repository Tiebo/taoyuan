"use strict";
const isObject = (v) => typeof v === "object" && v !== null;
const normalizeOptions = (options, globalOptions) => {
  options = isObject(options) ? options : /* @__PURE__ */ Object.create(null);
  return new Proxy(options, {
    get(t, p, r) {
      return Reflect.get(t, p, r) || Reflect.get(globalOptions, p, r);
    }
  });
};
exports.normalizeOptions = normalizeOptions;
