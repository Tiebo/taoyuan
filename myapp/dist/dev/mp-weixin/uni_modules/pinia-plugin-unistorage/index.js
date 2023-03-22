"use strict";
const common_vendor = require("../../common/vendor.js");
const uni_modules_piniaPluginUnistorage_shared_filter = require("./shared/filter.js");
const uni_modules_piniaPluginUnistorage_shared_normalize = require("./shared/normalize.js");
function createUnistorage(globalOptions = {}) {
  return function(ctx) {
    {
      const { store, options } = ctx;
      let { unistorage } = options || {};
      if (!unistorage)
        return;
      const {
        paths = null,
        afterRestore,
        beforeRestore,
        serializer = {
          serialize: JSON.stringify,
          deserialize: JSON.parse
        },
        key = store.$id
      } = uni_modules_piniaPluginUnistorage_shared_normalize.normalizeOptions(unistorage, globalOptions);
      beforeRestore == null ? void 0 : beforeRestore(ctx);
      try {
        const fromStorage = common_vendor.index.getStorageSync(store.$id);
        if (fromStorage)
          store.$patch(serializer.deserialize(fromStorage));
      } catch (_error) {
      }
      afterRestore == null ? void 0 : afterRestore(ctx);
      store.$subscribe(
        (_, state) => {
          try {
            const toStore = Array.isArray(paths) ? uni_modules_piniaPluginUnistorage_shared_filter.pick(state, paths) : state;
            common_vendor.index.setStorageSync(
              key,
              serializer.serialize(toStore)
            );
          } catch (_error) {
          }
        },
        { detached: true }
      );
    }
  };
}
exports.createUnistorage = createUnistorage;
