if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$g = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$5], ["__scopeId", "data-v-b40d096c"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_LOAD = "onLoad";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  function re_get(url, data) {
    return uni.request({
      url,
      data,
      header: {},
      method: "GET"
    });
  }
  function showMsg(title) {
    uni.showToast({
      title,
      duration: 1500,
      icon: "none",
      position: "bottom"
    });
  }
  const _sfc_main$f = {
    __name: "home",
    setup(__props) {
      vue.onMounted(() => {
        showMsg("\u52A0\u8F7D\u6210\u529F");
      });
      let comm_data = vue.ref([]);
      let img_data = vue.ref([]);
      let find_data = vue.ref([]);
      const getData = async () => {
        img_data.value.push("https://i.328888.xyz/2023/02/25/E0wxc.jpeg");
        img_data.value.push("https://i.328888.xyz/2023/02/25/EA3XU.png");
        img_data.value.push("https://i.328888.xyz/2023/02/25/EfprJ.jpeg");
        await re_get("http://127.0.0.1:8000/api/commodity/all/", {}).then((res) => {
          find_data.value = res.data.resp;
          for (let i2 = 0; i2 < res.data.resp.length; i2++) {
            if (i2 == 5)
              break;
            comm_data.value.push(find_data.value[i2]);
          }
        });
      };
      const router_to = (type) => {
        setTimeout(() => {
          uni.navigateTo({
            url: `../list/${type}/${type}`,
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      const router_to_commodity = (id) => {
        setTimeout(() => {
          uni.navigateTo({
            url: "../commodity/commodity?id=" + id,
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      getData();
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "arc-select" }, [
            vue.createElementVNode("label", { for: "input" }, [
              vue.createVNode(_component_uni_icons, {
                type: "search",
                size: "25"
              })
            ]),
            vue.createElementVNode("input", {
              name: "input",
              class: "arc-input",
              type: "text",
              placeholder: "\u641C\u7D22"
            })
          ]),
          vue.createElementVNode("view", { class: "container" }, [
            vue.createCommentVNode(" \u8F6E\u64AD\u56FE "),
            vue.createElementVNode("view", {
              style: { "border-radius": "30rpx" },
              class: "swiper_adv"
            }, [
              vue.createCommentVNode(" \u8F6E\u64AD\u56FE\u533A\u57DF "),
              vue.createElementVNode("swiper", {
                "indicator-dots": true,
                autoplay: true,
                interval: 3e3,
                duration: 1e3,
                circular: true
              }, [
                vue.createCommentVNode(" \u5FAA\u73AF\u6E32\u67D3\u8F6E\u64AD\u56FE\u7684 item \u9879 "),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(img_data), (item) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", {
                    style: { "border-radius": "20rpx" },
                    key: item
                  }, [
                    vue.createElementVNode("view", { class: "swiper-item" }, [
                      vue.createCommentVNode(" \u52A8\u6001\u7ED1\u5B9A\u56FE\u7247\u7684 src \u5C5E\u6027 "),
                      vue.createElementVNode("image", {
                        src: item,
                        mode: "aspectFill"
                      }, null, 8, ["src"])
                    ])
                  ]);
                }), 128))
              ])
            ]),
            vue.createCommentVNode(" \u8DF3\u8F6C\u56FE\u8868 "),
            vue.createElementVNode("view", {
              class: "row-cols-3",
              style: { "margin-top": "20rpx", "text-align": "center", "padding": "30rpx" }
            }, [
              vue.createElementVNode("view", {
                class: "list",
                onClick: _cache[0] || (_cache[0] = ($event) => router_to("tree"))
              }, [
                vue.createElementVNode("image", { src: "/static/icon/taozi.png" }),
                vue.createElementVNode("br"),
                vue.createElementVNode("span", { style: { "font-size": "24rpx" } }, "\u9886\u517B\u6843\u6811")
              ]),
              vue.createElementVNode("view", {
                class: "list",
                onClick: _cache[1] || (_cache[1] = ($event) => router_to("hotel"))
              }, [
                vue.createElementVNode("image", { src: "/static/icon/minsu.png" }),
                vue.createElementVNode("br"),
                vue.createElementVNode("span", { style: { "font-size": "24rpx" } }, "\u4E16\u5916\u6843\u6E90")
              ]),
              vue.createElementVNode("view", {
                class: "list",
                onClick: _cache[2] || (_cache[2] = ($event) => router_to("shop"))
              }, [
                vue.createElementVNode("image", { src: "/static/icon/shangpin.png" }),
                vue.createElementVNode("br"),
                vue.createElementVNode("span", { style: { "font-size": "24rpx" } }, "\u6843\u6E90\u54C1")
              ]),
              vue.createElementVNode("view", {
                class: "list",
                onClick: _cache[3] || (_cache[3] = ($event) => router_to("article"))
              }, [
                vue.createElementVNode("image", { src: "/static/icon/wenhua.png" }),
                vue.createElementVNode("br"),
                vue.createElementVNode("span", { style: { "font-size": "24rpx" } }, "\u4E1C\u65B0\u6587\u5316")
              ])
            ]),
            vue.createCommentVNode(" \u63A8\u8350\u5546\u54C1 "),
            vue.createElementVNode("view", {
              class: "recommend",
              style: { "margin-top": "40rpx" }
            }, [
              vue.createElementVNode("view", { class: "title" }, " \u4ECA\u65E5\u63A8\u8350 > "),
              vue.createElementVNode("view", {
                class: "re-sale",
                style: { "margin-top": "30rpx" }
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(comm_data), (i2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    onClick: ($event) => router_to_commodity(i2.id),
                    key: i2.id,
                    class: "re-sale-body"
                  }, [
                    vue.createElementVNode("image", {
                      mode: "aspectFill",
                      src: i2.photo[1]
                    }, null, 8, ["src"]),
                    vue.createElementVNode("br"),
                    vue.createElementVNode("span", { class: "des" }, vue.toDisplayString(i2.name), 1)
                  ], 8, ["onClick"]);
                }), 128))
              ])
            ]),
            vue.createCommentVNode(" \u53D1\u73B0 "),
            vue.createElementVNode("view", {
              class: "recommend",
              style: { "margin-top": "40rpx" }
            }, [
              vue.createElementVNode("view", { class: "title" }, " \u53D1\u73B0 "),
              vue.createElementVNode("view", {
                class: "re-card",
                style: { "margin-top": "30rpx" }
              }, [
                vue.createCommentVNode(" v-for "),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(find_data), (find) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "re-card-body",
                    key: find.id
                  }, [
                    vue.createElementVNode("image", {
                      mode: "aspectFill",
                      src: find.photo[1]
                    }, null, 8, ["src"]),
                    vue.createElementVNode("br"),
                    vue.createElementVNode("view", { class: "body-find" }, vue.toDisplayString(find.name), 1)
                  ]);
                }), 128))
              ])
            ])
          ])
        ], 64);
      };
    }
  };
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-0cd09a48"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/home/home.vue"]]);
  const _sfc_main$e = {
    components: {},
    data() {
      return {
        loadding: true,
        isEdit: false,
        tableData: [],
        arrIds: [],
        checkedAll: false,
        totalPrice: 0
      };
    },
    onLoad() {
    },
    onShow() {
      this.getData();
    },
    methods: {
      getData() {
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D",
          mask: true
        });
        let self = this;
        uni.hideLoading();
        self.loadding = false;
        self._initGoodsChecked();
      },
      _initGoodsChecked() {
        let self = this;
        let checkedData = self.getCheckedData();
        self.tableData.forEach((item) => {
          item.checked = self.inArray(`${item.product_id}_${item.product_sku_id}`, checkedData);
        });
        self.isEdit = false;
        self.checkedAll = checkedData.length == self.tableData.length;
        self.updateTotalPrice();
      },
      getCheckedData() {
        let checkedData = uni.getStorageSync("checkedData");
        return checkedData ? checkedData : [];
      },
      checkItem(e, index) {
        e.checked = !e.checked;
        this.$set(this.tableData, index, e);
        this.onUpdateChecked();
        this.updateTotalPrice();
        this.checkedAll = this.getCheckedData().length == this.tableData.length;
      },
      onUpdateChecked() {
        let self = this, checkedData = [];
        self.tableData.forEach((item) => {
          if (item.checked == true) {
            checkedData.push(`${item.product_id}_${item.product_sku_id}`);
          }
        });
        uni.setStorageSync("checkedData", checkedData);
      },
      onCheckedAll() {
        let self = this;
        self.checkedAll = !self.checkedAll;
        self.tableData.forEach((item) => {
          item.checked = self.checkedAll;
        });
        self.updateTotalPrice();
        self.onUpdateChecked();
      },
      updateTotalPrice: function() {
        let total_price = 0;
        let items = this.tableData;
        for (let i2 = 0; i2 < items.length; i2++) {
          if (items[i2]["checked"] == true) {
            total_price += items[i2]["total_num"] * items[i2]["product_price"];
          }
        }
        this.totalPrice = total_price.toFixed(2);
      },
      Submit() {
        let arrIds = [];
        this.tableData.forEach((item) => {
          if (item.checked == true) {
            arrIds.push(`${item.product_id}_${item.product_sku_id}`);
          }
        });
        if (arrIds.length == 0) {
          uni.showToast({
            title: "\u8BF7\u9009\u62E9\u5546\u54C1",
            icon: "none"
          });
          return false;
        }
        uni.navigateTo({
          url: "/pages/order/confirm-order/confirm-order?order_type=cart&cart_ids=" + arrIds
        });
      },
      addFunc(item) {
        let self = this;
        let product_id = item.product_id;
        let product_sku_id = item.product_sku_id;
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D",
          mask: true
        });
        self._post(
          "order.cart/add",
          {
            product_id,
            product_sku_id,
            total_num: 1
          },
          function(res) {
            self.loadding = false;
            self.getData();
          },
          function() {
            self.loadding = false;
          }
        );
      },
      reduceFunc(item) {
        let self = this;
        let product_id = item.product_id;
        let product_sku_id = item.product_sku_id;
        if (item.total_num <= 1) {
          return;
        }
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D",
          mask: true
        });
        self._post(
          "order.cart/sub",
          {
            product_id,
            product_sku_id
          },
          function(res) {
            self.loadding = false;
            self.getData();
          },
          function() {
            self.loadding = false;
          }
        );
      },
      onDelete() {
        let self = this;
        let cartIds = self.getCheckedIds();
        if (!cartIds.length) {
          self.showError("\u60A8\u8FD8\u6CA1\u6709\u9009\u62E9\u5546\u54C1");
          return false;
        }
        uni.showModal({
          title: "\u63D0\u793A",
          content: "\u60A8\u786E\u5B9A\u8981\u79FB\u9664\u9009\u62E9\u7684\u5546\u54C1\u5417?",
          success(e) {
            e.confirm && self._post(
              "order.cart/delete",
              {
                product_sku_id: cartIds
              },
              function(res) {
                self.onDeleteEvent(cartIds);
                self.getData();
              }
            );
          }
        });
      },
      getCheckedIds() {
        let self = this;
        let arrIds = [];
        self.tableData.forEach((item) => {
          if (item.checked === true) {
            arrIds.push(`${item.product_id}_${item.product_sku_id}`);
          }
        });
        return arrIds;
      },
      onDeleteEvent(cartIds) {
        let self = this;
        cartIds.forEach((cartIndex) => {
          self.tableData.forEach((item, productIndex) => {
            if (cartIndex == `${item.product_id}_${item.product_sku_id}`) {
              self.tableData.splice(productIndex, 1);
            }
          });
        });
        self.onUpdateChecked();
        return true;
      },
      inArray(search, array) {
        for (var i2 in array) {
          if (array[i2] == search) {
            return true;
          }
        }
        return false;
      },
      gotoShop() {
        uni.switchTab({
          url: "/pages/index/index"
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return !$data.loadding ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "card"
    }, [
      vue.createCommentVNode("\u4EA7\u54C1\u5217\u8868"),
      $data.tableData.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        vue.createElementVNode("view", { class: "address-bar d-e-c" }, [
          vue.createElementVNode("view", {
            class: "f30",
            onClick: _cache[0] || (_cache[0] = ($event) => $data.isEdit = !$data.isEdit)
          }, [
            $data.isEdit ? (vue.openBlock(), vue.createElementBlock("button", { key: 0 }, "\u5B8C\u6210")) : (vue.openBlock(), vue.createElementBlock("button", { key: 1 }, "\u7F16\u8F91"))
          ])
        ]),
        vue.createElementVNode("view", { class: "section" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tableData, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "item",
              key: index
            }, [
              vue.createElementVNode("label", {
                class: "d-c-c",
                onClick: ($event) => $options.checkItem(item, index)
              }, [
                vue.createElementVNode("checkbox", {
                  value: "cb",
                  class: "checkbox",
                  checked: item.checked
                }, null, 8, ["checked"])
              ], 8, ["onClick"]),
              vue.createElementVNode("image", {
                src: item.product_image,
                class: "cover",
                mode: "aspectFit"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "info" }, [
                vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.product_name), 1),
                vue.createElementVNode("view", { class: "describe" }, vue.toDisplayString(item.selling_point), 1),
                vue.createElementVNode("view", { class: "level-box count_choose" }, [
                  vue.createElementVNode("view", { class: "price" }, [
                    vue.createTextVNode(" \xA5 "),
                    vue.createElementVNode("text", { class: "num" }, vue.toDisplayString(item.product_price), 1)
                  ]),
                  vue.createElementVNode("view", { class: "num-wrap" }, [
                    vue.createElementVNode("view", {
                      class: "icon-box minus d-c-c",
                      onClick: ($event) => $options.reduceFunc(item)
                    }, [
                      vue.createElementVNode("span", {
                        class: vue.normalizeClass(["icon iconfont icon-jian", item.total_num <= 1 ? "gray" : "gray3"])
                      }, null, 2)
                    ], 8, ["onClick"]),
                    vue.createElementVNode("view", { class: "text-wrap" }, [
                      vue.withDirectives(vue.createElementVNode("input", {
                        type: "number",
                        maxlength: item.product_sku.stock_num,
                        "onUpdate:modelValue": ($event) => item.total_num = $event
                      }, null, 8, ["maxlength", "onUpdate:modelValue"]), [
                        [vue.vModelText, item.total_num]
                      ])
                    ]),
                    vue.createElementVNode("view", {
                      class: "icon-box plus d-c-c",
                      onClick: ($event) => $options.addFunc(item)
                    }, [
                      vue.createElementVNode("span", {
                        class: vue.normalizeClass(["icon iconfont icon-jia", item.total_num >= item.product_sku.stock_num ? "gray" : "gray3"])
                      }, null, 2)
                    ], 8, ["onClick"])
                  ])
                ])
              ])
            ]);
          }), 128))
        ])
      ], 64)) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "none-data-box"
      }, [
        vue.createElementVNode("image", {
          src: "/static/none.png",
          mode: "widthFix"
        }),
        vue.createElementVNode("br"),
        vue.createElementVNode("text", null, "\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"),
        vue.createElementVNode("button", {
          type: "default",
          class: "btn-red mt30 ww100",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.gotoShop && $options.gotoShop(...args))
        }, "\u53BB\u8D2D\u7269")
      ])),
      vue.createCommentVNode("\u5E95\u90E8\u6309\u94AE"),
      $data.tableData.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "bottom-btns f28"
      }, [
        vue.createElementVNode("label", {
          class: "d-c-c mr20",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.onCheckedAll())
        }, [
          vue.createElementVNode("checkbox", {
            class: "checkbox",
            checked: $data.checkedAll,
            value: "cb"
          }, null, 8, ["checked"]),
          vue.createTextVNode(" \u5168\u9009 ")
        ]),
        !$data.isEdit ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "d-e-c"
        }, [
          vue.createElementVNode("view", { class: "total d-s-c flex-1 mr20" }, [
            vue.createElementVNode("text", null, "\u5408\u8BA1\uFF1A"),
            vue.createElementVNode("view", { class: "price f22" }, [
              vue.createTextVNode(" \xA5 "),
              vue.createElementVNode("text", { class: "num f40" }, vue.toDisplayString($data.totalPrice), 1)
            ])
          ]),
          vue.createElementVNode("button", {
            type: "primary",
            class: "buy-btn",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.Submit())
          }, "\u53BB\u7ED3\u7B97")
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: ""
        }, [
          vue.createElementVNode("button", {
            type: "primary",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.onDelete()),
            class: "delete-btn mr20"
          }, "\u5220\u9664")
        ]))
      ])) : vue.createCommentVNode("v-if", true)
    ])) : vue.createCommentVNode("v-if", true);
  }
  const PagesCartCart = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$4], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/cart/cart.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages && messages[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn2) {
      const index = this.watchers.push(fn2) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages] = [
        messages,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn2) {
        return i18n.watchLocale(fn2);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const pages = [
    {
      path: "pages/home/home",
      style: {
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/cart/cart",
      style: {
        navigationBarTitleText: "\u8D2D\u7269\u8F66",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/message/message",
      style: {
        navigationBarTitleText: "\u5BA2\u670D",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/user/user",
      style: {
        navigationBarTitleText: "\u4E2A\u4EBA\u4E2D\u5FC3",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/list/tree/tree",
      style: {
        navigationBarTitleText: "\u9886\u517B\u6843\u6811",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/commodity/commodity",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/list/hotel/hotel",
      style: {
        navigationBarTitleText: "\u9152\u5E97",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/list/shop/shop",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/list/article/article",
      style: {
        navigationBarTitleText: "\u4E1C\u65B0\u6587\u5316",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/list/articleBody/articleBody",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/money/money",
      style: {
        navigationBarTitleText: "\u94B1\u5305",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/message/dialog/dialog",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: true
      }
    }
  ];
  const style = {
    "app-plus": {
      animationType: "fade-in",
      animationDuration: 300
    }
  };
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "\u6843\u6E90\u8BB0",
    navigationBarBackgroundColor: "#F8F8F8",
    backgroundColor: "#F8F8F8"
  };
  const tabBar = {
    position: "bottom",
    borderStyle: "black",
    selectedColor: "#000000",
    list: [
      {
        pagePath: "pages/home/home",
        text: "\u9996\u9875",
        iconPath: "static/icon/home.png",
        selectedIconPath: "static/icon/home-copy.png"
      },
      {
        pagePath: "pages/message/message",
        text: "\u6D88\u606F",
        iconPath: "static/icon/message.png",
        selectedIconPath: "static/icon/message-copy.png"
      },
      {
        pagePath: "pages/cart/cart",
        text: "\u8D2D\u7269\u8F66",
        iconPath: "static/icon/gouwu.png",
        selectedIconPath: "static/icon/gouwu-copy.png"
      },
      {
        pagePath: "pages/user/user",
        text: "\u6211\u7684",
        iconPath: "static/icon/wode.png",
        selectedIconPath: "static/icon/wode-copy.png"
      }
    ]
  };
  const t = {
    pages,
    style,
    globalStyle,
    tabBar
  };
  function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function s(e, t2, n2) {
    return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var r = s(function(e, t2) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, r3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, h2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        "string" == typeof e3 && (e3 = l2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e2.min(4 * c3, r3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += i3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(h3, u3);
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      r2.Hasher = h2.extend({ cfg: i2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), i = r, o = (s(function(e, t2) {
    var n2;
    e.exports = (n2 = i, function(e2) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e3[s3];
          e3[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e3[t4 + 0], c3 = e3[t4 + 1], f2 = e3[t4 + 2], p2 = e3[t4 + 3], g2 = e3[t4 + 4], m2 = e3[t4 + 5], y2 = e3[t4 + 6], _2 = e3[t4 + 7], w = e3[t4 + 8], v2 = e3[t4 + 9], S2 = e3[t4 + 10], k2 = e3[t4 + 11], I2 = e3[t4 + 12], b = e3[t4 + 13], T2 = e3[t4 + 14], A2 = e3[t4 + 15], C2 = i3[0], P2 = i3[1], E2 = i3[2], O2 = i3[3];
        C2 = u2(C2, P2, E2, O2, o3, 7, a2[0]), O2 = u2(O2, C2, P2, E2, c3, 12, a2[1]), E2 = u2(E2, O2, C2, P2, f2, 17, a2[2]), P2 = u2(P2, E2, O2, C2, p2, 22, a2[3]), C2 = u2(C2, P2, E2, O2, g2, 7, a2[4]), O2 = u2(O2, C2, P2, E2, m2, 12, a2[5]), E2 = u2(E2, O2, C2, P2, y2, 17, a2[6]), P2 = u2(P2, E2, O2, C2, _2, 22, a2[7]), C2 = u2(C2, P2, E2, O2, w, 7, a2[8]), O2 = u2(O2, C2, P2, E2, v2, 12, a2[9]), E2 = u2(E2, O2, C2, P2, S2, 17, a2[10]), P2 = u2(P2, E2, O2, C2, k2, 22, a2[11]), C2 = u2(C2, P2, E2, O2, I2, 7, a2[12]), O2 = u2(O2, C2, P2, E2, b, 12, a2[13]), E2 = u2(E2, O2, C2, P2, T2, 17, a2[14]), C2 = l2(C2, P2 = u2(P2, E2, O2, C2, A2, 22, a2[15]), E2, O2, c3, 5, a2[16]), O2 = l2(O2, C2, P2, E2, y2, 9, a2[17]), E2 = l2(E2, O2, C2, P2, k2, 14, a2[18]), P2 = l2(P2, E2, O2, C2, o3, 20, a2[19]), C2 = l2(C2, P2, E2, O2, m2, 5, a2[20]), O2 = l2(O2, C2, P2, E2, S2, 9, a2[21]), E2 = l2(E2, O2, C2, P2, A2, 14, a2[22]), P2 = l2(P2, E2, O2, C2, g2, 20, a2[23]), C2 = l2(C2, P2, E2, O2, v2, 5, a2[24]), O2 = l2(O2, C2, P2, E2, T2, 9, a2[25]), E2 = l2(E2, O2, C2, P2, p2, 14, a2[26]), P2 = l2(P2, E2, O2, C2, w, 20, a2[27]), C2 = l2(C2, P2, E2, O2, b, 5, a2[28]), O2 = l2(O2, C2, P2, E2, f2, 9, a2[29]), E2 = l2(E2, O2, C2, P2, _2, 14, a2[30]), C2 = h2(C2, P2 = l2(P2, E2, O2, C2, I2, 20, a2[31]), E2, O2, m2, 4, a2[32]), O2 = h2(O2, C2, P2, E2, w, 11, a2[33]), E2 = h2(E2, O2, C2, P2, k2, 16, a2[34]), P2 = h2(P2, E2, O2, C2, T2, 23, a2[35]), C2 = h2(C2, P2, E2, O2, c3, 4, a2[36]), O2 = h2(O2, C2, P2, E2, g2, 11, a2[37]), E2 = h2(E2, O2, C2, P2, _2, 16, a2[38]), P2 = h2(P2, E2, O2, C2, S2, 23, a2[39]), C2 = h2(C2, P2, E2, O2, b, 4, a2[40]), O2 = h2(O2, C2, P2, E2, o3, 11, a2[41]), E2 = h2(E2, O2, C2, P2, p2, 16, a2[42]), P2 = h2(P2, E2, O2, C2, y2, 23, a2[43]), C2 = h2(C2, P2, E2, O2, v2, 4, a2[44]), O2 = h2(O2, C2, P2, E2, I2, 11, a2[45]), E2 = h2(E2, O2, C2, P2, A2, 16, a2[46]), C2 = d2(C2, P2 = h2(P2, E2, O2, C2, f2, 23, a2[47]), E2, O2, o3, 6, a2[48]), O2 = d2(O2, C2, P2, E2, _2, 10, a2[49]), E2 = d2(E2, O2, C2, P2, T2, 15, a2[50]), P2 = d2(P2, E2, O2, C2, m2, 21, a2[51]), C2 = d2(C2, P2, E2, O2, I2, 6, a2[52]), O2 = d2(O2, C2, P2, E2, p2, 10, a2[53]), E2 = d2(E2, O2, C2, P2, S2, 15, a2[54]), P2 = d2(P2, E2, O2, C2, c3, 21, a2[55]), C2 = d2(C2, P2, E2, O2, w, 6, a2[56]), O2 = d2(O2, C2, P2, E2, A2, 10, a2[57]), E2 = d2(E2, O2, C2, P2, y2, 15, a2[58]), P2 = d2(P2, E2, O2, C2, b, 21, a2[59]), C2 = d2(C2, P2, E2, O2, g2, 6, a2[60]), O2 = d2(O2, C2, P2, E2, k2, 10, a2[61]), E2 = d2(E2, O2, C2, P2, f2, 15, a2[62]), P2 = d2(P2, E2, O2, C2, v2, 21, a2[63]), i3[0] = i3[0] + C2 | 0, i3[1] = i3[1] + P2 | 0, i3[2] = i3[2] + E2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e2.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e, t2) {
    var n2;
    e.exports = (n2 = i, void function() {
      var e2 = n2, t3 = e2.lib.Base, s2 = e2.enc.Utf8;
      e2.algo.HMAC = t3.extend({ init: function(e3, t4) {
        e3 = this._hasher = new e3.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e3.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e3.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e3 = this._hasher;
        e3.reset(), e3.update(this._iKey);
      }, update: function(e3) {
        return this._hasher.update(e3), this;
      }, finalize: function(e3) {
        var t4 = this._hasher, n3 = t4.finalize(e3);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), s(function(e, t2) {
    e.exports = i.HmacMD5;
  })), a = s(function(e, t2) {
    e.exports = i.enc.Utf8;
  }), c = s(function(e, t2) {
    var n2;
    e.exports = (n2 = i, function() {
      var e2 = n2, t3 = e2.lib.WordArray;
      function s2(e3, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e3.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e3.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e2.enc.Base64 = { stringify: function(e3) {
        var t4 = e3.words, n3 = e3.sigBytes, s3 = this._map;
        e3.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e3) {
        var t4 = e3.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e3.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e3, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const u = "FUNCTION", l = "OBJECT", h = "CLIENT_DB";
  function d(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function f(e) {
    return "object" === d(e);
  }
  function p(e) {
    return "function" == typeof e;
  }
  function g(e) {
    return function() {
      try {
        return e.apply(e, arguments);
      } catch (e2) {
        console.error(e2);
      }
    };
  }
  function m(e) {
    return e && "string" == typeof e ? JSON.parse(e) : e;
  }
  const y = true, _ = "app", v = m([]);
  let S;
  S = _;
  const k = m(""), I = m("[]") || [];
  let T = "";
  try {
    T = "__UNI__5216753";
  } catch (e) {
  }
  let A = {};
  function C(e, t2 = {}) {
    var n2, s2;
    return n2 = A, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (A[e] = t2), A[e];
  }
  "app" === S && (A = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
  const P = ["invoke", "success", "fail", "complete"], E = C("_globalUniCloudInterceptor");
  function O(e, t2) {
    E[e] || (E[e] = {}), f(t2) && Object.keys(t2).forEach((n2) => {
      P.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = E[e2][t3];
        s2 || (s2 = E[e2][t3] = []), -1 === s2.indexOf(n3) && p(n3) && s2.push(n3);
      }(e, n2, t2[n2]);
    });
  }
  function x(e, t2) {
    E[e] || (E[e] = {}), f(t2) ? Object.keys(t2).forEach((n2) => {
      P.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = E[e2][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e, n2, t2[n2]);
    }) : delete E[e];
  }
  function U(e, t2) {
    return e && 0 !== e.length ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function R(e, t2) {
    return E[e] && E[e][t2] || [];
  }
  function L(e) {
    O("callObject", e);
  }
  const N = C("_globalUniCloudListener"), D = "response", F = "needLogin", q = "refreshToken", K = "clientdb", M = "cloudfunction", j = "cloudobject";
  function B(e) {
    return N[e] || (N[e] = []), N[e];
  }
  function $(e, t2) {
    const n2 = B(e);
    n2.includes(t2) || n2.push(t2);
  }
  function W(e, t2) {
    const n2 = B(e), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function z(e, t2) {
    const n2 = B(e);
    for (let e2 = 0; e2 < n2.length; e2++) {
      (0, n2[e2])(t2);
    }
  }
  let J, H = false;
  function G() {
    return J || (J = new Promise((e) => {
      H && e(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (H = true, e());
        }
        H || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), J);
  }
  function V(e) {
    const t2 = {};
    for (const n2 in e) {
      const s2 = e[n2];
      p(s2) && (t2[n2] = g(s2));
    }
    return t2;
  }
  function Y(e, t2) {
    return t2 ? function(n2) {
      let s2 = false;
      if ("callFunction" === t2) {
        const e2 = n2 && n2.type || u;
        s2 = e2 !== u;
      }
      const r2 = "callFunction" === t2 && !s2;
      let i2;
      i2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const { success: o2, fail: a2, complete: c2 } = V(n2), l2 = i2.then(() => s2 ? Promise.resolve() : U(R(t2, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => s2 ? Promise.resolve(e2) : U(R(t2, "success"), e2).then(() => U(R(t2, "complete"), e2)).then(() => (r2 && z(D, { type: M, content: e2 }), Promise.resolve(e2))), (e2) => s2 ? Promise.reject(e2) : U(R(t2, "fail"), e2).then(() => U(R(t2, "complete"), e2)).then(() => (z(D, { type: M, content: e2 }), Promise.reject(e2))));
      if (!(o2 || a2 || c2))
        return l2;
      l2.then((e2) => {
        o2 && o2(e2), c2 && c2(e2), r2 && z(D, { type: M, content: e2 });
      }, (e2) => {
        a2 && a2(e2), c2 && c2(e2), r2 && z(D, { type: M, content: e2 });
      });
    } : function(t3) {
      t3 = t3 || {};
      const { success: n2, fail: s2, complete: r2 } = V(t3);
      if (!(n2 || s2 || r2))
        return e.call(this, t3);
      e.call(this, t3).then((e2) => {
        n2 && n2(e2), r2 && r2(e2);
      }, (e2) => {
        s2 && s2(e2), r2 && r2(e2);
      });
    };
  }
  class Q extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || e.errMsg || "unknown system error", this.code = this.errCode = e.code || e.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e.subject || e.errSubject, this.cause = e.cause, this.requestId = e.requestId;
    }
    toJson(e = 0) {
      if (!(e >= 10))
        return e++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause };
    }
  }
  var X = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() };
  function Z(e) {
    return e && Z(e.__v_raw) || e;
  }
  function ee() {
    return { token: X.getStorageSync("uni_id_token") || X.getStorageSync("uniIdToken"), tokenExpired: X.getStorageSync("uni_id_token_expired") };
  }
  function te({ token: e, tokenExpired: t2 } = {}) {
    e && X.setStorageSync("uni_id_token", e), t2 && X.setStorageSync("uni_id_token_expired", t2);
  }
  function ne() {
    if ("web" !== S)
      return;
    uni.getStorageSync("__LAST_DCLOUD_APPID") !== T && (uni.setStorageSync("__LAST_DCLOUD_APPID", T), console.warn("\u68C0\u6D4B\u5230\u5F53\u524D\u9879\u76EE\u4E0E\u4E0A\u6B21\u8FD0\u884C\u5230\u6B64\u7AEF\u53E3\u7684\u9879\u76EE\u4E0D\u4E00\u81F4\uFF0C\u81EA\u52A8\u6E05\u7406uni-id\u4FDD\u5B58\u7684token\u4FE1\u606F\uFF08\u4EC5\u5F00\u53D1\u8C03\u8BD5\u65F6\u751F\u6548\uFF09"), X.removeStorageSync("uni_id_token"), X.removeStorageSync("uniIdToken"), X.removeStorageSync("uni_id_token_expired"));
  }
  let se, re;
  function ie() {
    return se || (se = uni.getSystemInfoSync()), se;
  }
  function oe() {
    let e, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e = s2, t2 = n2;
      }
    } catch (e2) {
    }
    return { channel: e, scene: t2 };
  }
  function ae() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (re)
      return { ...re, locale: e, LOCALE: e };
    const t2 = ie(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e2 = 0; e2 < o2.length; e2++) {
      delete t2[o2[e2]];
    }
    return re = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...oe(), ...t2 }, { ...re, locale: e, LOCALE: e };
  }
  var ce = { sign: function(e, t2) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), o(n2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {}), "web" === S && e2.errMsg && 0 === e2.errMsg.indexOf("request:fail") && console.warn("\u53D1\u5E03H5\uFF0C\u9700\u8981\u5728uniCloud\u540E\u53F0\u64CD\u4F5C\uFF0C\u7ED1\u5B9A\u5B89\u5168\u57DF\u540D\uFF0C\u5426\u5219\u4F1A\u56E0\u4E3A\u8DE8\u57DF\u95EE\u9898\u800C\u65E0\u6CD5\u8BBF\u95EE\u3002\u6559\u7A0B\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new Q({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const r2 = e2.data;
        if (r2.error)
          return s2(new Q({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e) {
    return c.stringify(a.parse(e));
  } }, ue = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: le } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: ue, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: ue }, "zh-Hans");
  var he = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(le("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = X, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return ce.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = ce.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = ce.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if ("pending" === this._getAccessTokenPromiseStatus)
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t2, n2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new Q({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? o2(e2) : a2(new Q({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new Q({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
          i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: r2 }) {
      if ("string" !== d(t2))
        throw new Q({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t2 = t2.trim()))
        throw new Q({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t2))
        throw new Q({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const i2 = r2 && r2.envType || this.config.envType, o2 = (await this.getOSSUploadOptionsFromPath({ env: i2, filename: t2 })).result, a2 = "https://" + o2.cdnDomain + "/" + o2.ossPath, { securityToken: c2, accessKeyId: u2, signature: l2, host: h2, ossPath: f2, id: p2, policy: g2, ossCallbackUrl: m2 } = o2, y2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: u2, Signature: l2, host: h2, id: p2, key: f2, policy: g2, success_action_status: 200 };
      if (c2 && (y2["x-oss-security-token"] = c2), m2) {
        const e2 = JSON.stringify({ callbackUrl: m2, callbackBody: JSON.stringify({ fileId: p2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        y2.callback = ce.toBase64(e2);
      }
      const _2 = { url: "https://" + o2.host, formData: y2, fileName: "file", name: "file", filePath: e, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, _2, { onUploadProgress: s2 })), m2)
        return { success: true, filePath: e, fileID: a2 };
      if ((await this.reportOSSUpload({ id: p2 })).success)
        return { success: true, filePath: e, fileID: a2 };
      throw new Q({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" });
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e) && 0 !== e.length || n2(new Q({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
    async getFileInfo({ fileList: e } = {}) {
      if (!Array.isArray(e) || 0 === e.length)
        throw new Q({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e.map((e2) => e2.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var de = { init(e) {
    const t2 = new he(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var pe;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(pe || (pe = {}));
  var ge = function() {
  };
  const me = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new Q({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t2, e;
  };
  function ye(e) {
    return void 0 === e;
  }
  function _e(e) {
    return "[object Null]" === Object.prototype.toString.call(e);
  }
  var we;
  function ve(e) {
    const t2 = (n2 = e, "[object Array]" === Object.prototype.toString.call(n2) ? e : [e]);
    var n2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(we || (we = {}));
  const Se = { adapter: null, runtime: void 0 }, ke = ["anonymousUuidKey"];
  class Ie extends ge {
    constructor() {
      super(), Se.adapter.root.tcbObject || (Se.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      Se.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return Se.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete Se.adapter.root.tcbObject[e];
    }
    clear() {
      delete Se.adapter.root.tcbObject;
    }
  }
  function be(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new Ie();
      case "none":
        return new Ie();
      default:
        return t2.sessionStorage || new Ie();
    }
  }
  class Te {
    constructor(e) {
      if (!this._storage) {
        this._persistence = Se.adapter.primaryStorage || e.persistence, this._storage = be(this._persistence, Se.adapter);
        const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, r2 = `anonymous_uuid_${e.env}`, i2 = `login_type_${e.env}`, o2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e;
      const n2 = be(e, Se.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t2 && ke.includes(e2))
          continue;
        const r2 = this._storage.getItem(s2);
        ye(r2) || _e(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, r2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const Ae = {}, Ce = {};
  function Pe(e) {
    return Ae[e];
  }
  class Ee {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class Oe extends Ee {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const xe = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          -1 !== s2 && n2[e2].splice(s2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof Oe)
        return console.error(e.error), this;
      const n2 = "string" == typeof e ? new Ee(e, t2 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function Ue(e, t2) {
    xe.on(e, t2);
  }
  function Re(e, t2 = {}) {
    xe.fire(e, t2);
  }
  function Le(e, t2) {
    xe.off(e, t2);
  }
  const Ne = "loginStateChanged", De = "loginStateExpire", Fe = "loginTypeChanged", qe = "anonymousConverted", Ke = "refreshAccessToken";
  var Me;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(Me || (Me = {}));
  const je = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Be = { "X-SDK-Version": "1.3.5" };
  function $e(e, t2, n2) {
    const s2 = e[t2];
    e[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e2;
        if (e2 = o2, "[object FormData]" !== Object.prototype.toString.call(e2))
          t3.data = { ...o2, ...r2 };
        else
          for (const e3 in r2)
            o2.append(e3, r2[e3]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e, t3);
    };
  }
  function We() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: { ...Be, "x-seqid": e } };
  }
  class ze {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new Se.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = Pe(this.config.env), this._localCache = (t2 = this.config.env, Ce[t2]), $e(this._reqClass, "post", [We]), $e(this._reqClass, "upload", [We]), $e(this._reqClass, "download", [We]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new Q({ message: "\u672A\u767B\u5F55CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e2 || "REFRESH_TOKEN_EXPIRED" === e2 || "INVALID_REFRESH_TOKEN" === e2) {
          if (this._cache.getStore(s2) === Me.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e2) {
            const e3 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Re(De), this._cache.removeStore(n2);
        }
        throw new Q({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Re(Ke), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new Q({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
      let s2 = this._cache.getStore(e), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === je.indexOf(e)) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e) {
        o2 = new FormData();
        for (let e2 in o2)
          o2.hasOwnProperty(e2) && void 0 !== o2[e2] && o2.append(e2, i2[e2]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e2 in i2)
          void 0 !== i2[e2] && (o2[e2] = i2[e2]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: h2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), l2 && (d2 = { ...l2, ...d2 });
      let f2 = function(e2, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e3 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e3}=${encodeURIComponent(n3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e2}${t3}`;
      }(fe, "//tcb-api.tencentcloudapi.com/web", d2);
      h2 && (f2 += h2);
      const p2 = await this.post({ url: f2, data: o2, ...a2 }), g2 = p2.header && p2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(p2.status) && 200 !== Number(p2.statusCode) || !p2.data)
        throw new Q({ code: "NETWORK_ERROR", message: "network request error" });
      return p2;
    }
    async send(e, t2 = {}) {
      const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === je.indexOf(e)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new Q({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new Q({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  }
  const Je = {};
  function He(e) {
    return Je[e];
  }
  class Ge {
    constructor(e) {
      this.config = e, this._cache = Pe(e.env), this._request = He(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class Ve {
    constructor(e) {
      if (!e)
        throw new Q({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e, this._cache = Pe(this._envId), this._request = He(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e;
      return n2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class Ye {
    constructor(e) {
      if (!e)
        throw new Q({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Pe(e);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ve(e);
    }
    get isAnonymousAuth() {
      return this.loginType === Me.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Me.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Me.WECHAT || this.loginType === Me.WECHAT_OPEN || this.loginType === Me.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class Qe extends Ge {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.ANONYMOUS, persistence: "local" });
        const e2 = new Ye(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new Q({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Re(qe, { env: this.config.env }), Re(Fe, { loginType: Me.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new Q({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, Me.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class Xe extends Ge {
    async signIn(e) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new Ye(this.config.env);
      throw new Q({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
    }
  }
  class Ze extends Ge {
    async signIn(e, t2) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.EMAIL, persistence: this.config.persistence }), new Ye(this.config.env);
      throw s2.code ? new Q({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new Q({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class et extends Ge {
    async signIn(e, t2) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Me.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.USERNAME, persistence: this.config.persistence }), new Ye(this.config.env);
      throw s2.code ? new Q({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new Q({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
    }
  }
  class tt {
    constructor(e) {
      this.config = e, this._cache = Pe(e.env), this._request = He(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ue(Fe, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new Qe(this.config);
    }
    customAuthProvider() {
      return new Xe(this.config);
    }
    emailAuthProvider() {
      return new Ze(this.config);
    }
    usernameAuthProvider() {
      return new et(this.config);
    }
    async signInAnonymously() {
      return new Qe(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new Ze(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new et(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new Qe(this.config)), Ue(qe, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === Me.ANONYMOUS)
        throw new Q({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), Re(Ne), Re(Fe, { env: this.config.env, loginType: Me.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      Ue(Ne, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      Ue(De, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      Ue(Ke, e.bind(this));
    }
    onAnonymousConverted(e) {
      Ue(qe, e.bind(this));
    }
    onLoginTypeChanged(e) {
      Ue(Fe, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new Ye(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if ("string" != typeof e)
        throw new Q({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new Xe(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : { ...e.data, requestId: e.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const nt = function(e, t2) {
    t2 = t2 || me();
    const n2 = He(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e2, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e3) => {
        201 === e3.statusCode ? t2(null, { fileID: l2, requestId: d2 }) : t2(new Q({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e3.data}` }));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, st = function(e, t2) {
    t2 = t2 || me();
    const n2 = He(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, rt = function({ fileList: e }, t2) {
    if (t2 = t2 || me(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e };
    return He(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, it = function({ fileList: e }, t2) {
    t2 = t2 || me(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return He(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ot = async function({ fileID: e }, t2) {
    const n2 = (await it.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e2) => {
        e2(n2);
      });
    const s2 = He(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, at = function({ name: e, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || me();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new Q({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e, request_data: a2 };
    return He(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        o2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), o2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            o2(new Q({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e2) => {
      o2(e2);
    }), o2.promise;
  }, ct = { timeout: 15e3, persistence: "session" }, ut = {};
  class lt {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (Se.adapter || (this.requestClient = new Se.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = { ...ct, ...e }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new lt(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || Se.adapter.primaryStorage || ct.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        Ae[t3] = new Te(e2), Ce[t3] = new Te({ ...e2, persistence: "local" });
      }(this.config), n2 = this.config, Je[n2.env] = new ze(n2), this.authObj = new tt(this.config), this.authObj;
    }
    on(e, t2) {
      return Ue.apply(this, [e, t2]);
    }
    off(e, t2) {
      return Le.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return at.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return rt.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return it.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return ot.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return nt.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return st.apply(this, [e, t2]);
    }
    registerExtension(e) {
      ut[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const n2 = ut[e];
      if (!n2)
        throw new Q({ message: `\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: n2 } = ve(e) || {};
      t2 && (Se.adapter = t2), n2 && (Se.runtime = n2);
    }
  }
  var ht = new lt();
  function dt(e, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e + t2;
  }
  class ft {
    post(e) {
      const { url: t2, data: n2, headers: s2 } = e;
      return new Promise((e2, r2) => {
        X.request({ url: dt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e, c2 = X.uploadFile({ url: dt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          200 === e2.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const pt = { setItem(e, t2) {
    X.setStorageSync(e, t2);
  }, getItem: (e) => X.getStorageSync(e), removeItem(e) {
    X.removeStorageSync(e);
  }, clear() {
    X.clearStorageSync();
  } };
  var gt = { genAdapter: function() {
    return { root: {}, reqClass: ft, localStorage: pt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  ht.useAdapters(gt);
  const mt = ht, yt = mt.init;
  mt.init = function(e) {
    e.env = e.spaceId;
    const t2 = yt.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = Y(t3[e3]).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var _t = mt;
  var wt = class extends he {
    getAccessToken() {
      return new Promise((e, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = ce.sign(n2, this.config.clientSecret);
      const r2 = ae();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = ee();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, success(e2) {
          e2 && e2.statusCode < 400 ? o2(e2) : a2(new Q({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new Q({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
          i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new Q({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: r2 }) : s3(new Q({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2)).then((e2) => {
        if (e2.success)
          return e2.result;
        throw new Q({ code: "DELETE_FILE_FAILED", message: "\u5220\u9664\u6587\u4EF6\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e } = {}) {
      if (!Array.isArray(e) || 0 === e.length)
        throw new Q({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2)).then((e2) => {
        if (e2.success)
          return { fileList: e2.result.fileList.map((e3) => ({ fileID: e3.fileID, tempFileURL: e3.tempFileURL })) };
        throw new Q({ code: "GET_TEMP_FILE_URL_FAILED", message: "\u83B7\u53D6\u4E34\u65F6\u6587\u4EF6\u94FE\u63A5\u5931\u8D25" });
      });
    }
  };
  var vt = { init(e) {
    const t2 = new wt(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function St({ data: e }) {
    let t2;
    t2 = ae();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e2 } = ee();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  function kt({ name: e, data: t2 } = {}) {
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      X.request({ method: "POST", url: o2, data: { name: e, platform: S, provider: r2, spaceId: i2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e2 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._callCloudFunction({ name: e, data: t2 });
      }
      return new Promise((e2, n4) => {
        const s4 = St.call(this, { data: t2 });
        X.request({ method: "POST", url: a2, data: { provider: r2, platform: S, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new Q({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new Q({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const It = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var bt = /[\\^$.*+?()[\]{}|]/g, Tt = RegExp(bt.source);
  function At(e, t2, n2) {
    return e.replace(new RegExp((s2 = t2) && Tt.test(s2) ? s2.replace(bt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Pt = "request", Et = "response", Ot = "both";
  const fn = { code: 2e4, message: "System error" }, pn = { code: 20101, message: "Invalid client" };
  function yn(e) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e || {};
    return new Q({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || fn.code, message: r2 || o2, cause: a2 });
  }
  let wn;
  function bn({ secretType: e } = {}) {
    return e === Pt || e === Et || e === Ot;
  }
  function Tn({ name: e, data: t2 = {} } = {}) {
    return "app" === S && "DCloud-clientDB" === e && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function An({ provider: e, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ie();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e2, spaceId: t3 } = {}) {
      const n3 = v;
      if (!n3)
        return {};
      e2 = function(e3) {
        return "tencent" === e3 ? "tcb" : e3;
      }(e2);
      const s3 = n3.find((n4) => n4.provider === e2 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const l2 = function(e2, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e2.length; i3++) {
        const o3 = e2[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e3) => e3.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!l2)
      return false;
    if ((c2[l2] || []).find((e2 = {}) => e2.appId === s2 && (e2.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`\u6B64\u5E94\u7528[appId: ${s2}, platform: ${o2}]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), yn(pn);
  }
  function Cn({ functionName: e, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Pn(e) {
    const t2 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = St.call(e, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider], i2 = bn(n3), o2 = Tn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e2) => (e2.errCode = 0, !a2 && Cn.call(this, { functionName: s2, result: e2, logPvd: r2 }), Promise.resolve(e2)), (e2) => (!a2 && Cn.call(this, { functionName: s2, result: e2, logPvd: r2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e3.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e4 = 1; e4 < a3.length; e4++)
            c2 = At(c2, `{$${e4}}`, a3[e4]);
          for (const e4 in t3)
            c2 = At(c2, `{${e4}}`, t3[e4]);
          return "replace" === o3 ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: It, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && I ? (e._callCloudFunction || (e._callCloudFunction = n2, e._callLocalFunction = kt), o2 = kt) : o2 = n2, o2 = o2.bind(e), Tn(t3))
        a2 = n2.call(e, t3);
      else if (function({ name: e2, data: t4 = {} }) {
        return "mp-weixin" === S && "uni-id-co" === e2 && "secureNetworkHandshakeByWeixin" === t4.method;
      }(t3))
        a2 = o2.call(e, t3);
      else if (bn(t3)) {
        a2 = new wn({ secretType: t3.secretType, uniCloudIns: e }).wrapEncryptDataCallFunction(n2.bind(e))(t3);
      } else if (An({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new wn({ secretType: t3.secretType, uniCloudIns: e }).wrapVerifyClientCallFunction(n2.bind(e))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2;
    };
  }
  wn = "mp-weixin" !== S && "app" !== S ? class {
    constructor() {
      throw yn({ message: `Platform ${S} is not supported by secure network` });
    }
  } : class {
    constructor() {
      throw yn({ message: `Platform ${S} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const En = Symbol("CLIENT_DB_INTERNAL");
  function On(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = En, e.inspect = null, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e2[n2];
      if (n2 in e2 || "string" != typeof n2) {
        const t3 = e2[n2];
        return "function" == typeof t3 ? t3.bind(e2) : t3;
      }
      return t2.get(e2, n2, s2);
    } });
  }
  function xn(e) {
    return { on: (t2, n2) => {
      e[t2] = e[t2] || [], e[t2].indexOf(n2) > -1 || e[t2].push(n2);
    }, off: (t2, n2) => {
      e[t2] = e[t2] || [];
      const s2 = e[t2].indexOf(n2);
      -1 !== s2 && e[t2].splice(s2, 1);
    } };
  }
  const Un = ["db.Geo", "db.command", "command.aggregate"];
  function Rn(e, t2) {
    return Un.indexOf(`${e}.${t2}`) > -1;
  }
  function Ln(e) {
    switch (d(e = Z(e))) {
      case "array":
        return e.map((e2) => Ln(e2));
      case "object":
        return e._internalType === En || Object.keys(e).forEach((t2) => {
          e[t2] = Ln(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  function Nn(e) {
    return e && e.content && e.content.$method;
  }
  class Dn {
    constructor(e, t2, n2) {
      this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t2 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t2.push(e.content);
      return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: Ln(e2.$param) })) };
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => "action" === e2.$method);
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => "action" !== e.$method) };
    }
    get isAggregate() {
      let e = this;
      for (; e; ) {
        const t2 = Nn(e), n2 = Nn(e.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e = this;
      for (; e; ) {
        if ("command" === Nn(e))
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e = this;
      for (; e; ) {
        const t2 = Nn(e), n2 = Nn(e.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e = e.prevStage;
      }
      return false;
    }
    getNextStageFn(e) {
      const t2 = this;
      return function() {
        return Fn({ $method: e, $param: Ln(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
      };
    }
    _send(e, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: Ln(t2) }), y) {
        const e2 = s2.$db.find((e3) => "collection" === e3.$method), t3 = e2 && e2.$param;
        t3 && 1 === t3.length && "string" == typeof e2.$param[0] && e2.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Fn(e, t2, n2) {
    return On(new Dn(e, t2, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), Rn(s2, t3) ? Fn({ $method: t3 }, e2, n2) : function() {
        return Fn({ $method: t3, $param: Ln(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function qn({ path: e, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
      }
    };
  }
  function Kn(e, t2 = {}) {
    return On(new e(t2), { get: (e2, t3) => Rn("db", t3) ? Fn({ $method: t3 }, null, e2) : function() {
      return Fn({ $method: t3, $param: Ln(Array.from(arguments)) }, null, e2);
    } });
  }
  class Mn extends class {
    constructor({ uniClient: e = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = C("_globalUniCloudDatabaseCallback")), t2 || (this.auth = xn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, xn(this._dbCallBacks)), this.env = On({}, { get: (e2, t3) => ({ $env: t3 }) }), this.Geo = On({}, { get: (e2, t3) => qn({ path: ["Geo"], method: t3 }) }), this.serverDate = qn({ path: [], method: "serverDate" }), this.RegExp = qn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if ("string" != typeof e || !e.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t2) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    _callbackAuth(e, t2) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t2 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e });
    }
  } {
    _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
    _callCloudFunction({ action: e, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e2) {
        return i2._callback("error", [e2]), U(R(o2, "fail"), e2).then(() => U(R(o2, "complete"), e2)).then(() => (r2(null, e2), z(D, { type: K, content: e2 }), Promise.reject(e2)));
      }
      const c2 = U(R(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e, command: t2, multiCommand: n2 } })).then((e2) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e2.result;
        if (u3)
          for (let e3 = 0; e3 < u3.length; e3++) {
            const { level: t4, message: n4, detail: s4 } = u3[e3], r3 = console["app" === S && "warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new Q({ code: t3, message: n3, requestId: e2.requestId }));
        }
        e2.result.errCode = e2.result.errCode || e2.result.code, e2.result.errMsg = e2.result.errMsg || e2.result.message, s3 && c3 && (te({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), z(q, { token: s3, tokenExpired: c3 }));
        const l2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < l2.length; t4++) {
          const { prop: n4, tips: s4 } = l2[t4];
          if (n4 in e2.result) {
            const t5 = e2.result[n4];
            Object.defineProperty(e2.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e3) {
          return U(R(o2, "success"), e3).then(() => U(R(o2, "complete"), e3)).then(() => {
            r2(e3, null);
            const t4 = i2._parseResult(e3);
            return z(D, { type: K, content: t4 }), Promise.resolve(t4);
          });
        }(e2);
      }, (e2) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return a2(new Q({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId }));
      });
    }
  }
  const jn = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", Bn = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", $n = { TOKEN_INVALID_TOKEN_EXPIRED: Bn, TOKEN_INVALID_INVALID_CLIENTID: jn, TOKEN_INVALID: jn, TOKEN_INVALID_WRONG_TOKEN: jn, TOKEN_INVALID_ANONYMOUS_USER: jn }, Wn = { "uni-id-token-expired": Bn, "uni-id-check-token-failed": jn, "uni-id-token-not-exist": jn, "uni-id-check-device-feature-failed": jn };
  function zn(e, t2) {
    let n2 = "";
    return n2 = e ? `${e}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Jn(e = [], t2 = "") {
    const n2 = [], s2 = [];
    return e.forEach((e2) => {
      true === e2.needLogin ? n2.push(zn(t2, e2.path)) : false === e2.needLogin && s2.push(zn(t2, e2.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function Hn(e) {
    return e.split("?")[0].replace(/^\//, "");
  }
  function Gn() {
    return function(e) {
      let t2 = e && e.$page && e.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e = getCurrentPages();
      return e[e.length - 1];
    }());
  }
  function Vn() {
    return Hn(Gn());
  }
  function Yn(e = "", t2 = {}) {
    if (!e)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = Hn(e);
    return n2.some((e2) => e2.pagePath === s2);
  }
  const Qn = !!t.uniIdRouter;
  const { loginPage: Xn, routerNeedLogin: Zn, resToLogin: es, needLoginPage: ts, notNeedLoginPage: ns, loginPageInTabBar: ss } = function({ pages: e = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = t) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Jn(e), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t2 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = Jn(r3, s3);
        t2.push(...i3), n3.push(...o3);
      }), { needLoginPage: t2, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: Yn(i2, r2) };
  }();
  if (ts.indexOf(Xn) > -1)
    throw new Error(`Login page [${Xn}] should not be "needLogin", please check your pages.json`);
  function rs(e) {
    const t2 = Vn();
    if ("/" === e.charAt(0))
      return e;
    const [n2, s2] = e.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e2 = 0; e2 < r2.length; e2++) {
      const t3 = r2[e2];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function is(e) {
    const t2 = Hn(rs(e));
    return !(ns.indexOf(t2) > -1) && (ts.indexOf(t2) > -1 || Zn.some((t3) => function(e2, t4) {
      return new RegExp(t4).test(e2);
    }(e, t3)));
  }
  function os({ redirect: e }) {
    const t2 = Hn(e), n2 = Hn(Xn);
    return Vn() !== n2 && t2 !== n2;
  }
  function as({ api: e, redirect: t2 } = {}) {
    if (!t2 || !os({ redirect: t2 }))
      return;
    const n2 = function(e2, t3) {
      return "/" !== e2.charAt(0) && (e2 = "/" + e2), t3 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2;
    }(Xn, t2);
    ss ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e]({ url: n2 });
    });
  }
  function cs({ url: e } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e2, tokenExpired: t3 } = ee();
      let n3;
      if (e2) {
        if (t3 < Date.now()) {
          const e3 = "uni-id-token-expired";
          n3 = { errCode: e3, errMsg: Wn[e3] };
        }
      } else {
        const e3 = "uni-id-check-token-failed";
        n3 = { errCode: e3, errMsg: Wn[e3] };
      }
      return n3;
    }();
    if (is(e) && n2) {
      n2.uniIdRedirectUrl = e;
      if (B(F).length > 0)
        return setTimeout(() => {
          z(F, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function us() {
    !function() {
      const e2 = Gn(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = cs({ url: e2 });
      t2 || n2 && as({ api: "redirectTo", redirect: e2 });
    }();
    const e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e.length; t2++) {
      const n2 = e[t2];
      uni.addInterceptor(n2, { invoke(e2) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = cs({ url: e2.url });
        return t3 ? e2 : s2 ? (as({ api: n2, redirect: rs(e2.url) }), false) : e2;
      } });
    }
  }
  function ls() {
    this.onResponse((e) => {
      const { type: t2, content: n2 } = e;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in Wn;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in $n;
          }(n2);
      }
      s2 && function(e2 = {}) {
        const t3 = B(F);
        G().then(() => {
          const n3 = Gn();
          if (n3 && os({ redirect: n3 }))
            return t3.length > 0 ? z(F, Object.assign({ uniIdRedirectUrl: n3 }, e2)) : void (Xn && as({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function hs(e) {
    !function(e2) {
      e2.onResponse = function(e3) {
        $(D, e3);
      }, e2.offResponse = function(e3) {
        W(D, e3);
      };
    }(e), function(e2) {
      e2.onNeedLogin = function(e3) {
        $(F, e3);
      }, e2.offNeedLogin = function(e3) {
        W(F, e3);
      }, Qn && (C("_globalUniCloudStatus").needLoginInit || (C("_globalUniCloudStatus").needLoginInit = true, G().then(() => {
        us.call(e2);
      }), es && ls.call(e2)));
    }(e), function(e2) {
      e2.onRefreshToken = function(e3) {
        $(q, e3);
      }, e2.offRefreshToken = function(e3) {
        W(q, e3);
      };
    }(e);
  }
  let ds;
  const fs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", ps = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function gs() {
    const e = ee().token || "", t2 = e.split(".");
    if (!e || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ds(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  ds = "function" != typeof atob ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ps.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e.length; )
      t2 = fs.indexOf(e.charAt(i2++)) << 18 | fs.indexOf(e.charAt(i2++)) << 12 | (n2 = fs.indexOf(e.charAt(i2++))) << 6 | (s2 = fs.indexOf(e.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var ms = s(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function i2(e2, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e3 : t5);
        }
        return e3;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = i3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, r4 && r4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < o2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < o2 && c2();
            });
          }
        });
      }(e2, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e4(r2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e4(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(r2(t5));
            }, fail(e5) {
              i3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), ys = n(ms);
  const _s = "manual";
  function ws(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === _s)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e2.length; r2++)
          e2[r2] !== t2[r2] && (s2.push(e2[r2]), n2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, f2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, p2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return p2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function vs(e) {
    return function(t2, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, e2.parseSystemError = t3.parseSystemError || e2.parseSystemError, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e2.secretMethods = t3.secretMethods), e2;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e2, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const r3 = n3 ? n3({ params: s4 }) : {};
          let i3, o3;
          try {
            return await U(R(t3, "invoke"), { ...r3 }), i3 = await e2(...s4), await U(R(t3, "success"), { ...r3, result: i3 }), i3;
          } catch (e3) {
            throw o3 = e3, await U(R(t3, "fail"), { ...r3, error: o3 }), o3;
          } finally {
            await U(R(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
          }
        };
      }({ fn: async function s4(...u2) {
        let h2;
        a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
        const d2 = { name: t2, type: l, data: { method: c2, params: u2 } };
        "object" == typeof n2.secretMethods && function(e2, t3) {
          const n3 = t3.data.method, s5 = e2.secretMethods || {}, r3 = s5[n3] || s5["*"];
          r3 && (t3.secretType = r3);
        }(n2, d2);
        let f2 = false;
        try {
          h2 = await e.callFunction(d2);
        } catch (e2) {
          f2 = true, h2 = { result: new Q(e2) };
        }
        const { errSubject: p2, errCode: g2, errMsg: m2, newToken: y2 } = h2.result || {};
        if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (te(y2), z(q, { ...y2 })), g2) {
          let e2 = m2;
          if (f2 && o2) {
            e2 = (await o2({ objectName: t2, methodName: c2, params: u2, errSubject: p2, errCode: g2, errMsg: m2 })).errMsg || m2;
          }
          if (a2)
            if ("toast" === i2.type)
              uni.showToast({ title: e2, icon: "none" });
            else {
              if ("modal" !== i2.type)
                throw new Error(`Invalid errorOptions.type: ${i2.type}`);
              {
                const { confirm: t3 } = await async function({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                  return new Promise((i3, o3) => {
                    uni.showModal({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e4) {
                      i3(e4);
                    }, fail() {
                      i3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "\u63D0\u793A", content: e2, showCancel: i2.retry, cancelText: "\u53D6\u6D88", confirmText: i2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                if (i2.retry && t3)
                  return s4(...u2);
              }
            }
          const n3 = new Q({ subject: p2, code: g2, message: m2, requestId: h2.requestId });
          throw n3.detail = h2.result, z(D, { type: j, content: n3 }), n3;
        }
        return z(D, { type: j, content: h2.result }), h2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e2 } = {}) {
        return { objectName: t2, methodName: c2, params: e2 };
      } }) });
    };
  }
  function Ss(e) {
    return C("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
  }
  async function ks({ callLoginByWeixin: e = false } = {}) {
    const t2 = Ss(this);
    if ("mp-weixin" !== S)
      throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${S}\``);
    const n2 = await new Promise((e2, t3) => {
      uni.login({ success(t4) {
        e2(t4.code);
      }, fail(e3) {
        t3(new Error(e3.errMsg));
      } });
    }), s2 = this.importObject("uni-id-co", { customUI: true });
    return await s2.secureNetworkHandshakeByWeixin({ code: n2, callLoginByWeixin: e }), t2.mpWeixinCode = n2, { code: n2 };
  }
  async function Is(e) {
    const t2 = Ss(this);
    return t2.initPromise || (t2.initPromise = ks.call(this, e)), t2.initPromise;
  }
  function bs(e) {
    return function({ callLoginByWeixin: t2 = false } = {}) {
      return Is.call(e, { callLoginByWeixin: t2 });
    };
  }
  async function Ts(e, t2) {
    const n2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
        X.request({ ...s2, success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } });
      }));
      return !(!e2.data || 0 !== e2.data.code);
    } catch (e2) {
      return false;
    }
    var s2;
  }
  function As(e) {
    if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus)
      return;
    let t2 = Promise.resolve();
    var n2;
    n2 = 1, t2 = new Promise((e2) => {
      setTimeout(() => {
        e2();
      }, n2);
    }), e.isReady = false, e.isDefault = false;
    const s2 = e.auth();
    e.initUniCloudStatus = "pending", e.initUniCloud = t2.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
      if ("app" === S) {
        const { osName: e2, osVersion: t3 } = ie();
        "ios" === e2 && function(e3) {
          if (!e3 || "string" != typeof e3)
            return 0;
          const t4 = e3.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u6A21\u5F0F\u751F\u6548\uFF0C\u53D1\u884C\u6A21\u5F0F\u4F1A\u8FDE\u63A5uniCloud\u4E91\u7AEF\u670D\u52A1\uFF09");
      }
      if (e.__dev__.debugInfo) {
        const { address: t3, servePort: n3 } = e.__dev__.debugInfo;
        return async function(e2, t4) {
          let n4;
          for (let s3 = 0; s3 < e2.length; s3++) {
            const r2 = e2[s3];
            if (await Ts(r2, t4)) {
              n4 = r2;
              break;
            }
          }
          return { address: n4, port: t4 };
        }(t3, n3);
      }
    }).then(({ address: t3, port: n3 } = {}) => {
      const s3 = console["app" === S ? "error" : "warn"];
      if (t3)
        e.__dev__.localAddress = t3, e.__dev__.localPort = n3;
      else if (e.__dev__.debugInfo) {
        let t4 = "";
        "remote" === e.__dev__.debugInfo.initialLaunchType ? (e.__dev__.debugInfo.forceRemote = true, t4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002") : t4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002", t4 += "\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs\n- \u68C0\u67E5\u662F\u5426\u9519\u8BEF\u7684\u4F7F\u7528\u62E6\u622A\u5668\u4FEE\u6539uni.request\u65B9\u6CD5\u7684\u53C2\u6570", "web" === S && (t4 += "\n- \u90E8\u5206\u6D4F\u89C8\u5668\u5F00\u542F\u8282\u6D41\u6A21\u5F0F\u4E4B\u540E\u8BBF\u95EE\u672C\u5730\u5730\u5740\u53D7\u9650\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u542F\u7528\u4E86\u8282\u6D41\u6A21\u5F0F"), 0 === S.indexOf("mp-") && (t4 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s3(t4);
      }
    }).then(() => {
      ne(), e.isReady = true, e.initUniCloudStatus = "fulfilled";
    }).catch((t3) => {
      console.error(t3), e.initUniCloudStatus = "rejected";
    });
  }
  const Cs = { tcb: _t, tencent: _t, aliyun: de, private: vt };
  let Ps = new class {
    init(e) {
      let t2 = {};
      const n2 = Cs[e.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t2 = n2.init(e), t2.__dev__ = {}, t2.__dev__.debugLog = "web" === S && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === S;
      const s2 = k;
      s2 && !s2.code && (t2.__dev__.debugInfo = s2), As(t2), t2.reInit = function() {
        As(this);
      }, Pn(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t2), function(e2) {
        e2.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e2.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Kn(Mn, { uniClient: e2 });
          return this._database = n3, n3;
        }, e2.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e2.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Kn(Mn, { uniClient: e2, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e2) {
        e2.getCurrentUserInfo = gs, e2.chooseAndUploadFile = ys.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return ws(e2);
        } }), e2.importObject = vs(e2), e2.initSecureNetworkByWeixin = bs(e2);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t2[e2])
          return;
        const n3 = t2[e2];
        t2[e2] = function() {
          return t2.reInit(), n3.apply(t2, Array.from(arguments));
        }, t2[e2] = Y(t2[e2], e2).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e = I;
    let t2 = {};
    if (e && 1 === e.length)
      t2 = e[0], Ps = Ps.init(t2), Ps.isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e && e.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e2) => {
        Ps[e2] = function() {
          return console.error(n2), Promise.reject(new Q({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Ps, { get mixinDatacom() {
      return ws(Ps);
    } }), hs(Ps), Ps.addInterceptor = O, Ps.removeInterceptor = x, Ps.interceptObject = L, "web" === S && (window.uniCloud = Ps);
  })();
  var Es = Ps;
  const avatarWidth = 45;
  const _sfc_main$d = {
    name: "UniListChat",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      clickable: {
        type: Boolean,
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      badgeText: {
        type: [String, Number],
        default: ""
      },
      badgePositon: {
        type: String,
        default: "right"
      },
      time: {
        type: String,
        default: ""
      },
      avatarCircle: {
        type: Boolean,
        default: false
      },
      avatar: {
        type: String,
        default: ""
      },
      avatarList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    computed: {
      isDraft() {
        return this.note.slice(0, 14) == "[uni-im-draft]";
      },
      isSingle() {
        if (this.badgeText === "dot") {
          return "uni-badge--dot";
        } else {
          const badgeText = this.badgeText.toString();
          if (badgeText.length > 1) {
            return "uni-badge--complex";
          } else {
            return "uni-badge--single";
          }
        }
      },
      computedAvatar() {
        if (this.avatarList.length > 4) {
          this.imageWidth = avatarWidth * 0.31;
          return "avatarItem--3";
        } else if (this.avatarList.length > 1) {
          this.imageWidth = avatarWidth * 0.47;
          return "avatarItem--2";
        } else {
          this.imageWidth = avatarWidth;
          return "avatarItem--1";
        }
      }
    },
    watch: {
      avatar: {
        handler(avatar) {
          if (avatar.substr(0, 8) == "cloud://") {
            Es.getTempFileURL({
              fileList: [avatar]
            }).then((res) => {
              let fileList = res.fileList || res.result.fileList;
              this.avatarUrl = fileList[0].tempFileURL;
            });
          } else {
            this.avatarUrl = avatar;
          }
        },
        immediate: true
      }
    },
    data() {
      return {
        isFirstChild: false,
        border: true,
        imageWidth: 50,
        avatarUrl: ""
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
        this.border = this.list.border;
      }
    },
    methods: {
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      "hover-class": !$props.clickable && !$props.link ? "" : "uni-list-chat--hover",
      class: "uni-list-chat",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.onClick && $options.onClick(...args), ["stop"]))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass({ "uni-list--border": $data.border, "uni-list-chat--first": $data.isFirstChild })
      }, null, 2),
      vue.createElementVNode("view", { class: "uni-list-chat__container" }, [
        vue.createElementVNode("view", { class: "uni-list-chat__header-warp" }, [
          $props.avatarCircle || $props.avatarList.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(["uni-list-chat__header", { "header--circle": $props.avatarCircle }])
          }, [
            vue.createElementVNode("image", {
              class: vue.normalizeClass(["uni-list-chat__header-image", { "header--circle": $props.avatarCircle }]),
              src: $data.avatarUrl,
              mode: "aspectFill"
            }, null, 10, ["src"])
          ], 2)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            vue.createCommentVNode(" \u5934\u50CF\u7EC4 "),
            vue.createElementVNode("view", { class: "uni-list-chat__header" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.avatarList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: vue.normalizeClass(["uni-list-chat__header-box", $options.computedAvatar]),
                  style: vue.normalizeStyle({ width: $data.imageWidth + "px", height: $data.imageWidth + "px" })
                }, [
                  vue.createElementVNode("image", {
                    class: "uni-list-chat__header-image",
                    style: vue.normalizeStyle({ width: $data.imageWidth + "px", height: $data.imageWidth + "px" }),
                    src: item.url,
                    mode: "aspectFill"
                  }, null, 12, ["src"])
                ], 6);
              }), 128))
            ])
          ], 2112))
        ]),
        $props.badgeText && $props.badgePositon === "left" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(["uni-list-chat__badge uni-list-chat__badge-pos", [$options.isSingle]])
        }, [
          vue.createElementVNode("text", { class: "uni-list-chat__badge-text" }, vue.toDisplayString($props.badgeText === "dot" ? "" : $props.badgeText), 1)
        ], 2)) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "uni-list-chat__content" }, [
          vue.createElementVNode("view", { class: "uni-list-chat__content-main" }, [
            vue.createElementVNode("text", { class: "uni-list-chat__content-title uni-ellipsis" }, vue.toDisplayString($props.title), 1),
            vue.createElementVNode("view", { style: { "flex-direction": "row" } }, [
              $options.isDraft ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "draft"
              }, "[\u8349\u7A3F]")) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "uni-list-chat__content-note uni-ellipsis" }, vue.toDisplayString($options.isDraft ? $props.note.slice(14) : $props.note), 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-list-chat__content-extra" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createElementVNode("text", { class: "uni-list-chat__content-extra-text" }, vue.toDisplayString($props.time), 1),
              $props.badgeText && $props.badgePositon === "right" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: vue.normalizeClass(["uni-list-chat__badge", [$options.isSingle, $props.badgePositon === "right" ? "uni-list-chat--right" : ""]])
              }, [
                vue.createElementVNode("text", { class: "uni-list-chat__badge-text" }, vue.toDisplayString($props.badgeText === "dot" ? "" : $props.badgeText), 1)
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], true)
          ])
        ])
      ])
    ], 8, ["hover-class"]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$3], ["__scopeId", "data-v-04256650"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue"]]);
  const _sfc_main$c = {
    __name: "message",
    setup(__props) {
      vue.ref(15);
      vue.ref([true]);
      let msg_date = vue.ref([]);
      const router_dialog = () => {
        setTimeout(() => {
          uni.navigateTo({
            url: "./dialog/dialog",
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      const getData = () => {
        msg_date.value.push("2-17");
        msg_date.value.push("2-15");
        msg_date.value.push("2-13");
        msg_date.value.push("2-11");
      };
      getData();
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        const _component_uni_list_chat = resolveEasycom(vue.resolveDynamicComponent("uni-list-chat"), __easycom_1$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "msg-body" }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createTextVNode(" \xA0\xA0\u6D88\u606F "),
            vue.createElementVNode("text", { class: "iconfont icon-tyjiahao title-jiahao" })
          ]),
          vue.createElementVNode("view", { class: "arc-select" }, [
            vue.createElementVNode("label", { for: "input" }, [
              vue.createVNode(_component_uni_icons, {
                type: "search",
                size: "25"
              })
            ]),
            vue.createElementVNode("input", {
              name: "input",
              class: "arc-input",
              type: "text",
              placeholder: "\u641C\u7D22"
            })
          ]),
          vue.createElementVNode("view", { class: "dialogue" }, [
            vue.createVNode(_component_uni_list_chat, {
              clickable: true,
              "avatar-circle": true,
              title: "\u5BA2\u670D",
              avatar: "https://cdn.acwing.com/media/user/profile/photo/187693_md_babb9c1d86.jpg",
              note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
              time: vue.unref(msg_date)[0],
              "badge-text": 2,
              onClick: router_dialog
            }, null, 8, ["time"]),
            vue.createVNode(_component_uni_list_chat, {
              clickable: true,
              "avatar-circle": true,
              title: "\u75DB\u82E6\u88E4\u5B50",
              avatar: "https://cdn.acwing.com/media/user/profile/photo/63655_lg_3be53c9a42.jpg",
              note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
              time: vue.unref(msg_date)[1],
              "badge-text": 4,
              onClick: router_dialog
            }, null, 8, ["time"]),
            vue.createVNode(_component_uni_list_chat, {
              clickable: true,
              "avatar-circle": true,
              title: "\u6124\u6012\u8611\u83C7",
              avatar: "https://cdn.acwing.com/media/user/profile/photo/128261_md_ce1413e135.jpg",
              note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
              time: vue.unref(msg_date)[2],
              "badge-text": 0,
              onClick: router_dialog
            }, null, 8, ["time"]),
            vue.createVNode(_component_uni_list_chat, {
              clickable: true,
              "avatar-circle": true,
              title: "\u7F9A\u7F8A\u7CD5\u70B9\u62CC\u996D",
              avatar: "https://cdn.acwing.com/media/user/profile/photo/246956_lg_c63d10ee56.jpg",
              note: "\u60A8\u6536\u5230\u4E00\u6761\u65B0\u7684\u6D88\u606F",
              time: vue.unref(msg_date)[3],
              "badge-text": 0,
              onClick: router_dialog
            }, null, 8, ["time"])
          ])
        ]);
      };
    }
  };
  const PagesMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-3556fc04"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/message/message.vue"]]);
  const _sfc_main$b = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        type: Boolean,
        default: false
      },
      isShadow: {
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
      style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
    }, [
      vue.createCommentVNode(" \u5C01\u9762 "),
      vue.renderSlot(_ctx.$slots, "cover", {}, () => [
        $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-card__cover"
        }, [
          vue.createElementVNode("image", {
            class: "uni-card__cover-image",
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
            src: $props.cover
          }, null, 8, ["src"])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.renderSlot(_ctx.$slots, "title", {}, () => [
        $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-card__header"
        }, [
          vue.createCommentVNode(" \u5361\u7247\u6807\u9898 "),
          vue.createElementVNode("view", {
            class: "uni-card__header-box",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
          }, [
            $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-card__header-avatar"
            }, [
              vue.createElementVNode("image", {
                class: "uni-card__header-avatar-image",
                src: $props.thumbnail,
                mode: "aspectFit"
              }, null, 8, ["src"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "uni-card__header-content" }, [
              vue.createElementVNode("text", { class: "uni-card__header-content-title uni-ellipsis" }, vue.toDisplayString($props.title), 1),
              $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "uni-card__header-content-subtitle uni-ellipsis"
              }, vue.toDisplayString($props.subTitle), 1)) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", {
            class: "uni-card__header-extra",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
          }, [
            vue.createElementVNode("text", { class: "uni-card__header-extra-text" }, vue.toDisplayString($props.extra), 1)
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.createCommentVNode(" \u5361\u7247\u5185\u5BB9 "),
      vue.createElementVNode("view", {
        class: "uni-card__content",
        style: vue.normalizeStyle({ padding: $props.padding }),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4),
      vue.createElementVNode("view", {
        class: "uni-card__actions",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
      }, [
        vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
      ])
    ], 6);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$2], ["__scopeId", "data-v-69fdc3f6"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const _sfc_main$a = {
    __name: "user",
    setup(__props) {
      let userId = vue.ref("125742");
      const router_money = () => {
        setTimeout(() => {
          uni.navigateTo({
            url: "../money/money",
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      const actionsClick = (text) => {
        uni.showToast({
          title: text,
          icon: "none"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_1$1);
        const _component_uni_section = vue.resolveComponent("uni-section");
        return vue.openBlock(), vue.createElementBlock("view", { class: "con-body" }, [
          vue.createElementVNode("view", { class: "user-info" }, [
            vue.createElementVNode("image", {
              class: "user-photo",
              src: "/static/photo.png"
            }),
            vue.createElementVNode("view", { class: "username" }, [
              vue.createTextVNode(" \u8C6A\u723D\u7684\u50F5\u5C38 "),
              vue.createElementVNode("view", { style: { "font-size": "20rpx", "color": "grey", "margin-top": "20rpx" } }, " ID:" + vue.toDisplayString(vue.unref(userId)), 1)
            ]),
            vue.createElementVNode("view", {
              class: "user-tag",
              onClick: router_money
            }, [
              vue.createElementVNode("text", { class: "iconfont icon-tyqianbao" }),
              vue.createTextVNode(" \u94B1\u5305 ")
            ])
          ]),
          vue.createElementVNode("view", { class: "con-content" }, [
            vue.createElementVNode("view", { class: "order-title" }, [
              vue.createElementVNode("text", null, "\u6211\u7684\u8BA2\u5355"),
              vue.createElementVNode("text", { style: { "float": "right", "font-size": "24rpx", "color": "gray" } }, "\u5168\u90E8\u8BA2\u5355>")
            ]),
            vue.createElementVNode("view", { class: "user-order" }, [
              vue.createElementVNode("view", { class: "data-col" }, [
                vue.createElementVNode("text", { class: "iconfont icon-tydaifukuan" }),
                vue.createElementVNode("view", { class: "order-item" }, " \u5F85\u4ED8\u6B3E ")
              ]),
              vue.createElementVNode("view", { class: "data-col" }, [
                vue.createElementVNode("text", { class: "iconfont icon-ty31daifahuo" }),
                vue.createElementVNode("view", { class: "order-item" }, " \u5F85\u53D1\u8D27 ")
              ]),
              vue.createElementVNode("view", { class: "data-col" }, [
                vue.createElementVNode("text", { class: "iconfont icon-ty31daishouhuo" }),
                vue.createElementVNode("view", { class: "order-item" }, " \u5F85\u6536\u8D27 ")
              ]),
              vue.createElementVNode("view", { class: "data-col" }, [
                vue.createElementVNode("text", { class: "iconfont icon-tydaipingjia" }),
                vue.createElementVNode("view", { class: "order-item" }, " \u5F85\u8BC4\u4EF7 ")
              ]),
              vue.createElementVNode("view", { class: "data-col" }, [
                vue.createElementVNode("text", { class: "iconfont icon-tytuikuan" }),
                vue.createElementVNode("view", { class: "order-item" }, " \u9000\u6B3E/\u552E\u540E ")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "con-content" }, [
            vue.createElementVNode("view", { class: "user-info-data-row" }, [
              vue.createElementVNode("view", { class: "data-col" }, [
                vue.createTextVNode(" 0 "),
                vue.createElementVNode("view", { style: { "font-size": "24rpx", "color": "gray", "font-weight": "500" } }, " \u83B7\u8D5E ")
              ]),
              vue.createElementVNode("view", { class: "data-col" }, [
                vue.createTextVNode(" 0 "),
                vue.createElementVNode("view", { style: { "font-size": "24rpx", "color": "gray", "font-weight": "500" } }, " \u5173\u6CE8 ")
              ]),
              vue.createElementVNode("view", { class: "data-col" }, [
                vue.createTextVNode(" 0 "),
                vue.createElementVNode("view", { style: { "font-size": "24rpx", "color": "gray", "font-weight": "500" } }, " \u8BBF\u5BA2 ")
              ]),
              vue.createElementVNode("view", { class: "data-col" }, [
                vue.createTextVNode(" 0 "),
                vue.createElementVNode("view", { style: { "font-size": "24rpx", "color": "gray", "font-weight": "500" } }, " \u7C89\u4E1D ")
              ])
            ]),
            vue.createElementVNode("view", { class: "user-space" }, " \u52A8\u6001 "),
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (i2) => {
              return vue.createElementVNode("view", {
                class: "space",
                key: i2
              }, [
                vue.createVNode(_component_uni_section, {
                  title: "\u5361\u7247\u5C01\u9762\u56FE+\u64CD\u4F5C\u680F",
                  type: "line"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_uni_card, null, {
                      actions: vue.withCtx(() => [
                        vue.createElementVNode("view", { class: "card-actions row" }, [
                          vue.createElementVNode("view", {
                            class: "card-actions-item",
                            onClick: _cache[0] || (_cache[0] = ($event) => actionsClick("\u5206\u4EAB"))
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              type: "redo",
                              size: "18",
                              color: "#999"
                            }),
                            vue.createElementVNode("text", { class: "card-actions-item-text" }, "\u5206\u4EAB")
                          ]),
                          vue.createElementVNode("view", {
                            class: "card-actions-item",
                            onClick: _cache[1] || (_cache[1] = ($event) => actionsClick("\u70B9\u8D5E"))
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              type: "heart",
                              size: "18",
                              color: "#999"
                            }),
                            vue.createElementVNode("text", { class: "card-actions-item-text" }, "\u70B9\u8D5E")
                          ]),
                          vue.createElementVNode("view", {
                            class: "card-actions-item",
                            onClick: _cache[2] || (_cache[2] = ($event) => actionsClick("\u8BC4\u8BBA"))
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              type: "chatbubble",
                              size: "18",
                              color: "#999"
                            }),
                            vue.createElementVNode("text", { class: "card-actions-item-text" }, "\u8BC4\u8BBA")
                          ])
                        ])
                      ]),
                      default: vue.withCtx(() => [
                        vue.createElementVNode("image", {
                          mode: "aspectFill",
                          style: { "width": "100%", "height": "300rpx" },
                          src: "https://i.328888.xyz/2023/02/22/xbZvF.jpeg"
                        }),
                        vue.createElementVNode("hr"),
                        vue.createElementVNode("text", null, "\u4ECA\u5929\u5929\u6C14\u597D\u597D\u5440\uFF0C\u60F3\u8981\u51FA\u53BB\u6652\u592A\u9633")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]);
            }), 64))
          ])
        ]);
      };
    }
  };
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-99b0ba47"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/user/user.vue"]]);
  const _sfc_main$9 = {
    __name: "tree",
    setup(__props) {
      let tree_data = vue.ref([]);
      vue.ref([]);
      const router_to_commodity = (id) => {
        setTimeout(() => {
          uni.navigateTo({
            url: "../../commodity/commodity?id=" + id,
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      const getData = async () => {
        await re_get("http://127.0.0.1:8000/api/commodity/all/", {
          "type": 0
        }).then((res) => {
          tree_data.value = res.data.resp;
          formatAppLog("log", "at pages/list/tree/tree.vue:51", tree_data.value);
        });
      };
      getData();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { style: { "text-align": "center" } }, [
            vue.createElementVNode("image", {
              mode: "widthFix",
              src: "https://i.328888.xyz/2023/02/22/xOupZ.png"
            })
          ]),
          vue.createCommentVNode(" v-for "),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tree_data), (tree) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "content",
              key: tree.id,
              onClick: ($event) => router_to_commodity(tree.id)
            }, [
              vue.createElementVNode("image", {
                class: "tree-photo",
                mode: "aspectFill",
                src: tree.photo[1]
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "right" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("span", { class: "right-title" }, vue.toDisplayString(tree.name), 1),
                  vue.createElementVNode("span", { style: { "font-size": "27rpx" } }, vue.toDisplayString(), 1)
                ]),
                vue.createElementVNode("view", { class: "right-description" }, vue.toDisplayString(tree.details), 1),
                vue.createElementVNode("view", { class: "right-label" }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tree.category.split(","), (cate) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "right-label-body",
                      key: tree.id
                    }, vue.toDisplayString(cate), 1);
                  }), 128))
                ])
              ])
            ], 8, ["onClick"]);
          }), 128))
        ]);
      };
    }
  };
  const PagesListTreeTree = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-ee6fb90a"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/tree/tree.vue"]]);
  const _sfc_main$8 = {
    __name: "bottom-cart",
    setup(__props) {
      let is_shop = vue.ref(false);
      const getShop = () => {
        is_shop.value = true;
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.withDirectives(vue.createElementVNode("view", { class: "footer" }, [
            vue.createElementVNode("view", { class: "con-goods" }, [
              vue.createElementVNode("view", { class: "goods-item" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "shop",
                  size: "25"
                }),
                vue.createElementVNode("view", null, " \u5E97\u94FA ")
              ]),
              vue.createElementVNode("view", { class: "goods-item" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "chatbubble-filled",
                  size: "25"
                }),
                vue.createElementVNode("view", null, " \u5BA2\u670D ")
              ]),
              vue.createElementVNode("view", { class: "goods-item" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "star",
                  size: "25"
                }),
                vue.createElementVNode("view", null, " \u6536\u85CF ")
              ]),
              vue.createElementVNode("view", { class: "goods-item-cart" }, " \u52A0\u5165\u8D2D\u7269\u8F66 "),
              vue.createElementVNode("view", {
                class: "goods-item-buy",
                onClick: getShop
              }, " \u7ACB\u5373\u8D2D\u4E70 ")
            ])
          ], 512), [
            [vue.vShow, !vue.unref(is_shop)]
          ]),
          vue.createVNode(vue.Transition, {
            name: "fade",
            persisted: ""
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("view", { class: "footer-shop" }, [
                vue.createElementVNode("view", {
                  style: { "height": "150rpx" },
                  onClick: _cache[0] || (_cache[0] = ($event) => vue.isRef(is_shop) ? is_shop.value = false : is_shop = false)
                }),
                vue.createElementVNode("view", { class: "buy-con" }, [
                  vue.createElementVNode("text", {
                    onClick: _cache[1] || (_cache[1] = ($event) => vue.isRef(is_shop) ? is_shop.value = false : is_shop = false),
                    class: "buy-title",
                    style: { "float": "right" }
                  }, " x "),
                  vue.createTextVNode(" 123 ")
                ])
              ], 512), [
                [vue.vShow, vue.unref(is_shop)]
              ])
            ]),
            _: 1
          })
        ], 64);
      };
    }
  };
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-51c4f851"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/components/bottom-cart/bottom-cart.vue"]]);
  const _sfc_main$7 = {
    __name: "commodity",
    setup(__props) {
      let commodity_data = vue.reactive({
        name: "",
        id: "",
        origin: "",
        img_data: [],
        price: [],
        price_des: [],
        unit: "",
        type: "",
        shop_name: "",
        shop_photo: ""
      });
      const getData = async (id) => {
        await re_get("http://127.0.0.1:8000/api/commodity/info/", {
          "id": id
        }).then((res) => {
          commodity_data.img_data = res.data.photo;
          commodity_data.id = res.data.id;
          commodity_data.name = res.data.name;
          commodity_data.origin = res.data.origin;
          commodity_data.price = res.data.price.split(",");
          commodity_data.price_des = res.data.price_des.split(",");
          commodity_data.unit = res.data.unit;
          commodity_data.type = res.data.type;
          commodity_data.shop_name = res.data.shop_name;
          commodity_data.shop_photo = res.data.shop_photo;
        });
      };
      onLoad((option) => {
        formatAppLog("log", "at pages/commodity/commodity.vue:177", option.id);
        getData(option.id);
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        const _component_bottom_cart = resolveEasycom(vue.resolveDynamicComponent("bottom-cart"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createCommentVNode(" \u8F6E\u64AD\u56FE "),
          vue.createElementVNode("view", { class: "swiper_adv" }, [
            vue.createCommentVNode(" \u8F6E\u64AD\u56FE\u533A\u57DF "),
            vue.createElementVNode("swiper", {
              "indicator-dots": true,
              autoplay: true,
              interval: 3e3,
              duration: 1e3,
              circular: true
            }, [
              vue.createCommentVNode(" \u5FAA\u73AF\u6E32\u67D3\u8F6E\u64AD\u56FE\u7684 item \u9879 "),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(commodity_data).img_data, (i2) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", {
                  key: vue.unref(commodity_data).id
                }, [
                  vue.createElementVNode("view", { class: "swiper-item" }, [
                    vue.createCommentVNode(" \u52A8\u6001\u7ED1\u5B9A\u56FE\u7247\u7684 src \u5C5E\u6027 "),
                    vue.createElementVNode("image", {
                      src: i2,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ])
                ]);
              }), 128))
            ])
          ]),
          vue.createElementVNode("view", { class: "con-body" }, [
            vue.createElementVNode("view", { class: "goods-content-header" }, [
              vue.createElementVNode("view", { class: "goods-price" }, [
                vue.createElementVNode("span", { style: { "font-size": "28rpx" } }, "\uFFE5"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(commodity_data).price[0] + " - " + vue.unref(commodity_data).price[vue.unref(commodity_data).price.length - 1]) + " ", 1),
                vue.createElementVNode("span", { style: { "font-size": "24rpx", "float": "right", "color": "gray", "margin-right": "20rpx", "font-weight": "500" } }, " \u6708\u9500 " + vue.toDisplayString(60))
              ]),
              vue.createElementVNode("view", { class: "goods-name" }, vue.toDisplayString(vue.unref(commodity_data).name), 1),
              vue.createElementVNode("view", { class: "good-btn row" }, [
                vue.createElementVNode("view", { class: "good-btn-item" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "heart",
                    size: "18",
                    color: "#999"
                  }),
                  vue.createElementVNode("text", { class: "good-btn-text" }, "\xA0\u63A8\u8350")
                ]),
                vue.createElementVNode("view", { class: "good-btn-item" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "sound",
                    size: "18",
                    color: "#999"
                  }),
                  vue.createElementVNode("text", { class: "good-btn-text" }, "\xA0\u964D\u4EF7\u63D0\u9192")
                ]),
                vue.createElementVNode("view", { class: "good-btn-item" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "redo",
                    size: "18",
                    color: "#999"
                  }),
                  vue.createElementVNode("text", { class: "good-btn-text" }, "\xA0\u5206\u4EAB")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "goods-content-info" }, [
              vue.createElementVNode("view", { class: "info-item-label" }, [
                vue.createElementVNode("view", { class: "label" }, " \u53D1\u8D27 "),
                vue.createElementVNode("view", { class: "label-info" }, vue.toDisplayString(vue.unref(commodity_data).origin), 1),
                vue.createElementVNode("span", { style: { "position": "absolute", "right": "5%", "color": "#747474" } }, " > ")
              ]),
              vue.createElementVNode("view", { class: "info-item-label" }, [
                vue.createElementVNode("view", { class: "label" }, " \u9009\u62E9 "),
                vue.createElementVNode("view", { class: "label-info" }, " \u5DF2\u9009\uFF1A" + vue.toDisplayString(vue.unref(commodity_data).price_des[0]), 1),
                vue.createElementVNode("span", { style: { "position": "absolute", "right": "5%", "color": "#747474" } }, " > ")
              ]),
              vue.createElementVNode("view", { class: "info-item-label" }, [
                vue.createElementVNode("view", { class: "label" }, " \u4FDD\u969C "),
                vue.createElementVNode("view", { class: "label-info" }, " \u5047\u4E00\u8D54\u56DB\xA0\u4E03\u5929\u65E0\u7406\u7531\u9000\u8D27 "),
                vue.createElementVNode("span", { style: { "position": "absolute", "right": "5%", "color": "#747474" } }, " > ")
              ]),
              vue.createElementVNode("view", { class: "info-item-label" }, [
                vue.createElementVNode("view", { class: "label" }, " \u53C2\u6570 "),
                vue.createElementVNode("view", { class: "label-info" }, " \u54C1\u724C\xA0\u578B\u53F7... "),
                vue.createElementVNode("span", { style: { "position": "absolute", "right": "5%", "color": "#747474" } }, " > ")
              ])
            ]),
            vue.createElementVNode("view", { class: "goods-content-shop" }, [
              vue.createElementVNode("view", { class: "shop-photo" }, [
                vue.createElementVNode("image", {
                  style: { "width": "115rpx", "height": "115rpx", "border-radius": "25rpx" },
                  src: vue.unref(commodity_data).shop_photo,
                  mode: "aspectFill"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "shop-title" }, [
                vue.createTextVNode(vue.toDisplayString(vue.unref(commodity_data).shop_name) + " ", 1),
                vue.createElementVNode("view", { class: "shop-btn" }, [
                  vue.createElementVNode("button", null, "\u8FDB\u5E97\u901B\u901B")
                ])
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "shop-des" }, " \u5B9D\u8D1D\u63CF\u8FF0 " + vue.toDisplayString(4.9), 1),
                vue.createElementVNode("view", { class: "shop-des" }, " \u5356\u5BB6\u670D\u52A1 " + vue.toDisplayString(4.9), 1),
                vue.createElementVNode("view", { class: "shop-des" }, " \u7269\u6D41\u670D\u52A1 " + vue.toDisplayString(4.9), 1)
              ])
            ]),
            vue.createElementVNode("view", { style: { "text-align": "center", "font-size": "28rpx", "color": "#747474", "margin-top": "20rpx" } }, " \u2014\u2014\u5B9D\u8D1D\u8BE6\u60C5\u2014\u2014 "),
            vue.createElementVNode("view", { class: "goods-content-header" }, [
              vue.unref(commodity_data).type == 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  style: { "width": "100%", "height": "600rpx" },
                  src: "https://i.328888.xyz/2023/02/25/EUZyX.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  style: { "width": "100%", "height": "600rpx" },
                  src: "https://i.328888.xyz/2023/02/25/EDqsP.jpeg"
                }),
                vue.createElementVNode("image", {
                  mode: "aspectFill",
                  style: { "width": "100%", "height": "600rpx" },
                  src: "https://i.328888.xyz/2023/02/25/EUVGJ.jpeg"
                })
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("image", {
                mode: "aspectFill",
                style: { "width": "100%", "height": "600rpx" },
                src: "https://i.328888.xyz/2023/02/25/EUiIt.jpeg"
              })
            ])
          ]),
          vue.createVNode(_component_bottom_cart)
        ], 64);
      };
    }
  };
  const PagesCommodityCommodity = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-152957bc"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/commodity/commodity.vue"]]);
  const _sfc_main$6 = {
    __name: "hotel",
    setup(__props) {
      let tree_data = vue.ref([]);
      vue.ref([]);
      const router_to_commodity = (id) => {
        setTimeout(() => {
          uni.navigateTo({
            url: "../../commodity/commodity?id=" + id,
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      const getData = async () => {
        await re_get("http://127.0.0.1:8000/api/commodity/all/", {
          "type": 2
        }).then((res) => {
          tree_data.value = res.data.resp;
        });
      };
      getData();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { style: { "text-align": "center" } }, [
            vue.createElementVNode("image", {
              mode: "widthFix",
              src: "https://i.328888.xyz/2023/02/22/xOupZ.png"
            })
          ]),
          vue.createCommentVNode(" v-for "),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tree_data), (tree) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "content",
              key: tree.id,
              onClick: ($event) => router_to_commodity(tree.id)
            }, [
              vue.createElementVNode("image", {
                class: "tree-photo",
                mode: "aspectFill",
                src: tree.photo[1]
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "right" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("span", { class: "right-title" }, vue.toDisplayString(tree.name), 1),
                  vue.createElementVNode("span", { style: { "font-size": "27rpx" } }, vue.toDisplayString(), 1)
                ]),
                vue.createElementVNode("view", { class: "right-description" }, vue.toDisplayString(tree.details), 1),
                vue.createElementVNode("view", { class: "right-label" }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tree.category.split(","), (cate) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "right-label-body",
                      key: tree.id
                    }, vue.toDisplayString(cate), 1);
                  }), 128))
                ])
              ])
            ], 8, ["onClick"]);
          }), 128))
        ]);
      };
    }
  };
  const PagesListHotelHotel = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-49cc2715"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/hotel/hotel.vue"]]);
  const _sfc_main$5 = {
    __name: "shop",
    setup(__props) {
      let tree_data = vue.ref([]);
      vue.ref([]);
      const router_to_commodity = (id) => {
        setTimeout(() => {
          uni.navigateTo({
            url: "../../commodity/commodity?id=" + id,
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      const getData = async () => {
        await re_get("http://127.0.0.1:8000/api/commodity/all/", {
          "type": 1
        }).then((res) => {
          tree_data.value = res.data.resp;
        });
      };
      getData();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { style: { "text-align": "center" } }, [
            vue.createElementVNode("image", {
              mode: "widthFix",
              src: "https://i.328888.xyz/2023/02/22/xOupZ.png"
            })
          ]),
          vue.createCommentVNode(" v-for "),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tree_data), (tree) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "content",
              key: tree.id,
              onClick: ($event) => router_to_commodity(tree.id)
            }, [
              vue.createElementVNode("image", {
                class: "tree-photo",
                mode: "aspectFill",
                src: tree.photo[1]
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "right" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("span", { class: "right-title" }, vue.toDisplayString(tree.name), 1),
                  vue.createElementVNode("span", { style: { "font-size": "27rpx" } }, vue.toDisplayString(), 1)
                ]),
                vue.createElementVNode("view", { class: "right-description" }, vue.toDisplayString(tree.details), 1),
                vue.createElementVNode("view", { class: "right-label" }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tree.category.split(","), (cate) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "right-label-body",
                      key: tree.id
                    }, vue.toDisplayString(cate), 1);
                  }), 128))
                ])
              ])
            ], 8, ["onClick"]);
          }), 128))
        ]);
      };
    }
  };
  const PagesListShopShop = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b414d830"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/shop/shop.vue"]]);
  const _sfc_main$4 = {
    __name: "article",
    setup(__props) {
      let article_list = vue.ref([]);
      const getData = async () => {
        await re_get("http://127.0.0.1:8000/api/article/list/", {}).then((res) => {
          article_list.value = res.data.articles;
        });
      };
      getData();
      const router_article_body = (id) => {
        setTimeout(() => {
          uni.navigateTo({
            url: "../articleBody/articleBody?id=" + id,
            animationType: "slide-in-right",
            animationDuration: 200
          });
        }, 200);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "arc-body" }, [
          vue.createElementVNode("view", { class: "arc-select" }, [
            vue.createElementVNode("label", { for: "input" }, [
              vue.createVNode(_component_uni_icons, {
                type: "search",
                size: "30"
              })
            ]),
            vue.createElementVNode("input", {
              name: "input",
              class: "arc-input",
              type: "text",
              placeholder: "\u641C\u7D22"
            })
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(article_list), (a2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "arc-con",
              key: a2.id,
              onClick: ($event) => router_article_body(a2.id)
            }, [
              vue.createElementVNode("view", { class: "arc-title" }, vue.toDisplayString(a2.title), 1),
              vue.createElementVNode("view", { class: "arc-user" }, [
                vue.createElementVNode("view", { class: "arc-user-photo" }, [
                  vue.createElementVNode("image", {
                    src: a2.author_photo,
                    mode: "aspectFit"
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "arc-user-name" }, vue.toDisplayString(a2.author), 1)
              ]),
              vue.createElementVNode("view", { class: "arc-des" }, vue.toDisplayString(a2.article_des), 1),
              (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "arc-image"
              })),
              vue.createElementVNode("view", { class: "arc-logo" }, vue.toDisplayString(34) + "\u8D5E\u540C\xA0" + vue.toDisplayString(11) + "\u6536\u85CF\xA0" + vue.toDisplayString(11) + "\u8BC4\u8BBA ")
            ], 8, ["onClick"]);
          }), 128))
        ]);
      };
    }
  };
  const PagesListArticleArticle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d771b9bd"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/article/article.vue"]]);
  const _sfc_main$3 = {
    __name: "articleBody",
    setup(__props) {
      let article_id = vue.ref("");
      let article_body = vue.ref("");
      let article = vue.reactive({});
      const getData = async (id) => {
        await re_get("http://127.0.0.1:8000/api/article/info/", {
          "id": id
        }).then((res) => {
          article_body.value = res.data.article_body;
          article_id.value = res.data.id;
          article_id.value = res.data.id;
          article_id.value = res.data.id;
          article_id.value = res.data.id;
          article = res.data;
        });
      };
      onLoad((Option) => {
        getData(Option.id);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "arc-body-all" }, [
          vue.createElementVNode("view", { class: "body-title" }, vue.toDisplayString(vue.unref(article).title), 1),
          vue.createElementVNode("hr"),
          vue.createElementVNode("view", { class: "body-user" }, [
            vue.createElementVNode("view", { class: "body-user-photo" }, [
              vue.createElementVNode("image", {
                src: "https://i.328888.xyz/2023/02/22/xbZvF.jpeg",
                mode: "aspectFit"
              })
            ]),
            vue.createElementVNode("view", { class: "body-user-name" }, [
              vue.createTextVNode(vue.toDisplayString(vue.unref(article).author) + " ", 1),
              vue.createElementVNode("view", { class: "body-user-des" }, " \u5F53\u4F60\u7EC8\u4E8E\u653E\u4E0B\u8FC7\u53BB\uFF0C\u62E5\u62B1\u660E\u5929\u7684\u65F6\u5019 ")
            ]),
            vue.createElementVNode("view", { class: "body-user-like" }, " +\u5173\u6CE8 "),
            vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("rich-text", {
            selectable: "true",
            nodes: vue.unref(article_body),
            class: "arc-body-item"
          }, null, 8, ["nodes"])
        ]);
      };
    }
  };
  const PagesListArticleBodyArticleBody = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/list/articleBody/articleBody.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tree-body" });
  }
  const PagesMoneyMoney = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-e44e964b"], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/money/money.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "chat" }, [
        vue.createElementVNode("view", { class: "other-chat" }, [
          vue.createElementVNode("image", {
            class: "photo",
            mode: "aspectFit",
            src: "/static/photo.png"
          }),
          vue.createElementVNode("view", { class: "msg-other" }, " 213 ")
        ]),
        vue.createElementVNode("view", { class: "my-chat" }, [
          vue.createElementVNode("view", { class: "msg-my" }, " 123 "),
          vue.createElementVNode("image", {
            class: "photo",
            mode: "aspectFit",
            src: "/static/photo.png"
          })
        ])
      ])
    ]);
  }
  const PagesMessageDialogDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Code/project/uni/taoyuan/myapp/src/pages/message/dialog/dialog.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/cart/cart", PagesCartCart);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/list/tree/tree", PagesListTreeTree);
  __definePage("pages/commodity/commodity", PagesCommodityCommodity);
  __definePage("pages/list/hotel/hotel", PagesListHotelHotel);
  __definePage("pages/list/shop/shop", PagesListShopShop);
  __definePage("pages/list/article/article", PagesListArticleArticle);
  __definePage("pages/list/articleBody/articleBody", PagesListArticleBodyArticleBody);
  __definePage("pages/money/money", PagesMoneyMoney);
  __definePage("pages/message/dialog/dialog", PagesMessageDialogDialog);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Code/project/uni/taoyuan/myapp/src/App.vue"]]);
  class Request {
    constructor(options = {}) {
      this.baseUrl = options.baseUrl || "";
      this.url = options.url || "";
      this.method = "GET";
      this.data = null;
      this.header = options.header || {};
      this.beforeRequest = null;
      this.afterRequest = null;
    }
    get(url, data = {}) {
      this.method = "GET";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    post(url, data = {}) {
      this.method = "POST";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    put(url, data = {}) {
      this.method = "PUT";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    delete(url, data = {}) {
      this.method = "DELETE";
      this.url = this.baseUrl + url;
      this.data = data;
      return this._();
    }
    _() {
      this.header = {};
      this.beforeRequest && typeof this.beforeRequest === "function" && this.beforeRequest(this);
      return new Promise((resolve, reject) => {
        let weixin = wx;
        if ("undefined" !== typeof uni) {
          weixin = uni;
        }
        weixin.request({
          url: this.url,
          method: this.method,
          data: this.data,
          header: this.header,
          success: (res) => {
            resolve(res);
          },
          fail: (err) => {
            reject(err);
          },
          complete: (res) => {
            this.afterRequest && typeof this.afterRequest === "function" && this.afterRequest(res);
          }
        });
      });
    }
  }
  const $http = new Request();
  uni.$http = $http;
  $http.baseUrl = "https://www.uinav.com";
  $http.beforeRequest = function(options) {
    uni.showLoading({
      title: "\u6570\u636E\u52A0\u8F7D\u4E2D..."
    });
  };
  $http.afterRequest = function() {
    uni.hideLoading();
  };
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
