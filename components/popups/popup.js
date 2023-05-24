var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var dataController = (function () {
    var _this = this;
    var backup = [];
    // Function to load data from JSON file
    var loadData = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("../../data.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    backup = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Failed to load data:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // Call the loadData function to fetch data from JSON file
    loadData();
    return {
        petDetail: function (position) {
            return {
                name: backup[position].name,
                breed: backup[position].breed,
                information: backup[position].information,
                age: backup[position].age,
                lifeSpan: backup[position].lifeSpan,
                height: backup[position].height,
                gender: backup[position].gender,
            };
        },
    };
})();
var UIController = (function () {
    var DOMStrings = {
        ourPetContainer: ".our_pet_content_container",
        place: "#our_pet_content",
        crossButton: ".cross_button",
        body: "body",
        popup: "#popup",
        knowMoreButton: ".pets button",
        popupContainer: ".popup_container",
        showPopup: "show_popup",
        petImageClass: ".petimage img",
        petNameClass: ".pet_detail h4",
        petBreedClass: ".pet_detail h6",
        petinformationClass: ".pet_detail p",
        petULClass: ".pet_detail ul li span ~ span",
    };
    var updateUI = function (data) {
        document.querySelector(DOMStrings.petImageClass).src = data.image;
        document.querySelector(DOMStrings.petNameClass).textContent = data.name;
        document.querySelector(DOMStrings.petBreedClass).textContent = data.breed;
        document.querySelector(DOMStrings.petinformationClass).textContent =
            data.information;
        document.querySelectorAll(DOMStrings.petULClass)[0].textContent = data.age;
        document.querySelectorAll(DOMStrings.petULClass)[1].textContent =
            data.lifeSpan;
        document.querySelectorAll(DOMStrings.petULClass)[2].textContent =
            data.height;
        document.querySelectorAll(DOMStrings.petULClass)[3].textContent =
            data.gender;
    };
    /*UIController Return*/
    return {
        getDomStr: function () {
            return {
                petContainer: DOMStrings.ourPetContainer,
                place: DOMStrings.place,
                crossButton: DOMStrings.crossButton,
                body: DOMStrings.body,
                popup: DOMStrings.popup,
                knowMoreBtn: DOMStrings.knowMoreButton,
                pupupContainer: DOMStrings.popupContainer,
                showPopup: DOMStrings.showPopup,
            };
        },
        deployHtml: function (targetData) {
            updateUI(targetData);
        },
    };
})();
var controller = (function (dataCtrl, UICtrl) {
    /*variable for scroll axis to sx(scrollx), sy(scrolly)*/
    var sx, sy;
    var DOM = UICtrl.getDomStr();
    /*var petStoredData = dataCtrl.backupData();*/
    var mainData = {};
    var newMain = {};
    var boot = function () {
        document
            .querySelector(DOM.petContainer)
            .addEventListener("click", getTargetData);
        document
            .querySelector(DOM.crossButton)
            .addEventListener("click", removePopup);
        /*document.querySelector("#popup").addEventListener("click", removePopup);*/
        /* grey space click */
        window.addEventListener("click", greyAreaClick);
    };
    var getTargetData = function (event) {
        var existID = event.target.parentNode.id;
        if (existID !== DOM.place &&
            event.srcElement.textContent ===
                document.querySelector(DOM.knowMoreBtn).textContent) {
            var id = event.target.parentNode.id;
            var image = event.target.parentNode.childNodes[1].childNodes[1].src;
            mergeObject(id, image);
            document.querySelector(DOM.popup).style.visibility = "visible";
            document
                .querySelector(DOM.pupupContainer)
                .classList.toggle(DOM.showPopup);
            // stop scroll
            stopScroll("enable");
        }
    };
    var removePopup = function (event) {
        document.querySelector(DOM.popup).style.visibility = "hidden";
        document
            .querySelector(DOM.pupupContainer)
            .classList.toggle(DOM.showPopup);
        stopScroll("disable");
    };
    /* grey space click */
    var greyAreaClick = function (event) {
        if (event.target === document.querySelector(DOM.popup)) {
            removePopup();
        }
    };
    var mergeObject = function (petId, petImage) {
        mainData.id = petId;
        mainData.image = petImage;
        newMain = __assign(__assign({}, mainData), dataCtrl.petDetail(petId));
        /* send it to uiController */
        UICtrl.deployHtml(newMain);
    };
    /* stopscroll function */
    var stopScroll = function (checkStat) {
        sx = scrollX;
        sy = scrollY;
        checkStat === "enable"
            ? window.addEventListener("scroll", noscroll)
            : window.removeEventListener("scroll", noscroll);
    };
    var noscroll = function () {
        window.scroll(sx, sy);
    };
    /*Controller Return*/
    return {
        bootOnLoad: function () {
            boot();
        },
    };
})(dataController, UIController);
controller.bootOnLoad();
