/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/Aos.js":
/*!****************************!*\
  !*** ./src/modules/Aos.js ***!
  \****************************/
/***/ (() => {

AOS.init();
document.addEventListener("DOMContentLoaded", () => {
  // Array of class names and their corresponding AOS animations
  const animationTargets = [{
    className: "skill-card__item",
    aos: "flip-up"
  }, {
    className: "section-exp__content-box--item",
    aos: "fade-right"
  }, {
    className: "testimonial-card",
    aos: "zoom-in"
  }
  // Add more if needed
  ];
  animationTargets.forEach(({
    className,
    aos
  }) => {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((el, index) => {
      el.setAttribute("data-aos", aos);
      el.setAttribute("data-aos-delay", index * 100);
    });
  });
  AOS.init();
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".section-projects__item");
  items.forEach((item, index) => {
    const isEven = index % 2 === 1; // 0-based index: index 1,3,5... are visually even
    const aosEffect = isEven ? "fade-left" : "fade-right";
    item.setAttribute("data-aos", aosEffect);
    item.setAttribute("data-aos-delay", index * 100); // optional: staggered animation
  });
  AOS.init();
});

/***/ }),

/***/ "./src/modules/MobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/MobileMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MobileMenu {
  constructor() {
    this.menu = document.querySelector(".site-header__menu");
    this.openButton = document.querySelector(".site-header__menu-trigger");
    this.events();
  }
  events() {
    this.openButton.addEventListener("click", () => this.openMenu());
  }
  openMenu() {
    this.openButton.classList.toggle("fa-bars");
    this.openButton.classList.toggle("fa-window-close");
    this.menu.classList.toggle("site-header__menu--active");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/modules/ScrollSpy.js":
/*!**********************************!*\
  !*** ./src/modules/ScrollSpy.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ScrollSpy {
  constructor(menuSelector, offset = 100) {
    this.menuLinks = document.querySelectorAll(`${menuSelector} .menu-link`);
    this.sections = [];
    this.offset = offset;
    this.init();
    this.bindScroll();
    this.bindClicks(); // <— NEW
  }
  init() {
    this.menuLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const section = document.querySelector(href);
        if (section) {
          this.sections.push({
            id: href,
            element: section
          });
        }
      }
    });
  }
  bindScroll() {
    window.addEventListener("scroll", () => this.onScroll());
    this.onScroll(); // initial highlight
  }
  bindClicks() {
    this.menuLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const top = targetSection.offsetTop - this.offset;
          window.scrollTo({
            top: top,
            behavior: "smooth"
          });
        }
      });
    });
  }
  onScroll() {
    const scrollPos = window.scrollY + this.offset;
    let currentSectionId = "";
    for (let i = 0; i < this.sections.length; i++) {
      const sectionTop = this.sections[i].element.offsetTop;
      if (scrollPos >= sectionTop) {
        currentSectionId = this.sections[i].id;
      }
    }
    this.menuLinks.forEach(link => {
      if (link.getAttribute("href") === currentSectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}

// Usage
document.addEventListener("DOMContentLoaded", () => {
  new ScrollSpy(".site-header__main-nav", 100); // adjust offset if needed
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollSpy);

/***/ }),

/***/ "./src/modules/StickyHeader.js":
/*!*************************************!*\
  !*** ./src/modules/StickyHeader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class StickyHeader {
  constructor(selector, stickyClass = "sticky") {
    this.header = document.querySelector(selector);
    this.stickyClass = stickyClass;
    this.offset = this.header.offsetTop;
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    if (window.pageYOffset > this.offset) {
      this.header.classList.add(this.stickyClass);
    } else {
      this.header.classList.remove(this.stickyClass);
    }
  }
}

// Usage
document.addEventListener("DOMContentLoaded", () => {
  new StickyHeader(".site-header");
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickyHeader);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _src_modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/MobileMenu */ "./src/modules/MobileMenu.js");
/* harmony import */ var _src_modules_ScrollSpy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/ScrollSpy */ "./src/modules/ScrollSpy.js");
/* harmony import */ var _src_modules_StickyHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/StickyHeader */ "./src/modules/StickyHeader.js");
/* harmony import */ var _src_modules_Aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/modules/Aos */ "./src/modules/Aos.js");
/* harmony import */ var _src_modules_Aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_modules_Aos__WEBPACK_IMPORTED_MODULE_4__);


// Our modules / classes



// import IntersectionObserver from "../src/modules/IntersectionObserver";


// Instantiate a new object using our modules/classes
const mobileMenu = new _src_modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__["default"]();
const scrollSpy = new _src_modules_ScrollSpy__WEBPACK_IMPORTED_MODULE_2__["default"]();
const stickyHeader = new _src_modules_StickyHeader__WEBPACK_IMPORTED_MODULE_3__["default"]();
// const intersectionObserver = new IntersectionObserver();
const animateOnScroll = new (_src_modules_Aos__WEBPACK_IMPORTED_MODULE_4___default())();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map