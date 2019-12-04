//Pre-Conference NAM Seminar
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343653662784',
        node: document.getElementById('product-component-1573595309019'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "margin-top": "-20px !important",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "text-align": "center",
        "width": "110px",
        "padding-left": "0",
        "padding-right": "0"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Get a ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();

//Friday Breakfast - Leveraging Ministry Pain for Kingdom Gain
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343654613056',
        node: document.getElementById('product-component-1573595886903'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "margin-top": "-20px !important",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "text-align": "center",
        "width": "110px",
        "padding-left": "0",
        "padding-right": "0"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Get a ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();

//Saturday Breakfast - Empowering Youth & Hyphen in Kingdom Mission
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343661887552',
        node: document.getElementById('product-component-1573600347724'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "margin-top": "-20px !important",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "text-align": "center",
        "width": "110px",
        "padding-left": "0",
        "padding-right": "0"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Get a ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();

//Friday Breakout - A
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343655825472',
        node: document.getElementById('product-component-1573600488853'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "margin-top": "-20px !important",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "text-align": "center",
        "width": "110px",
        "padding-left": "0",
        "padding-right": "0"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Get a ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();

//Friday Breakout - B
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343656415296',
        node: document.getElementById('product-component-1573600586234'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "margin-top": "-20px !important",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "text-align": "center",
        "width": "110px",
        "padding-left": "0",
        "padding-right": "0"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Get a ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();

//Friday Breakout - C
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343656906816',
        node: document.getElementById('product-component-1573600820004'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "margin-top": "-20px !important",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "text-align": "center",
        "width": "110px",
        "padding-left": "0",
        "padding-right": "0"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Get a ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();

//Friday Breakout - D
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343657463872',
        node: document.getElementById('product-component-1573600648689'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "margin-top": "-20px !important",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "text-align": "center",
        "width": "110px",
        "padding-left": "0",
        "padding-right": "0"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Get a ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();



//Kids Fire - Two Day Ticket (top)
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343663362112',
        node: document.getElementById('product-component-1573601829635'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "normal",
        "font-size": "14px",
        "text-decoration": "underline",
        "color": "#289BD2",
        "padding-top": "0",
        "padding-bottom": "0",
        ":hover": {
          "background-color": "#070A0B"
        },
        "background-color": "#070A0B",
        ":focus": {
          "background-color": "#070A0B"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Two Day Ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();

//Kids Fire - Two Day Ticket (bottom)
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343663362112',
        node: document.getElementById('product-component-1573602439386'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "normal",
        "font-size": "14px",
        "text-decoration": "underline",
        "color": "#289BD2",
        "padding-top": "0",
        "padding-bottom": "0",
        ":hover": {
          "background-color": "#070A0B"
        },
        "background-color": "#070A0B",
        ":focus": {
          "background-color": "#070A0B"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Two Day Ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();

//Kids Fire - Friday
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343662772288',
        node: document.getElementById('product-component-1573602562538'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "normal",
        "font-size": "14px",
        "text-decoration": "underline",
        "color": "#289BD2",
        "padding-top": "0",
        "padding-bottom": "0",
        ":hover": {
          "background-color": "#070A0B"
        },
        "background-color": "#070A0B",
        ":focus": {
          "background-color": "#070A0B"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Friday Ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();

//Kids Fire - Saturday
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'winterfire.myshopify.com',
      storefrontAccessToken: '1c326cbaf5c60f1e9250abfe485ab35b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4343663099968',
        node: document.getElementById('product-component-1573602564572'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-weight": "normal",
        "font-size": "14px",
        "text-decoration": "underline",
        "color": "#289BD2",
        "padding-top": "0",
        "padding-bottom": "0",
        ":hover": {
          "background-color": "#070A0B"
        },
        "background-color": "#070A0B",
        ":focus": {
          "background-color": "#070A0B"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Saturday Ticket"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        },
        "padding-left": "20px",
        "padding-right": "20px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#248cbd"
        },
        "background-color": "#289bd2",
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#289bd2",
        ":hover": {
          "background-color": "#248cbd"
        },
        ":focus": {
          "background-color": "#248cbd"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();