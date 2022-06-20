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
        while (_) try {
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
var reportJokes = [];
function getDate() {
    return new Date().toLocaleDateString("es-ES");
}
;
function getLocation() {
    navigator.geolocation.getCurrentPosition(generateWeather);
}
function generateWeather(position) {
    return __awaiter(this, void 0, void 0, function () {
        var showWeather, lat, lon, key, lang, units, url, requestOptions, result, data, temp, icon;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    showWeather = document.getElementById('show-weather');
                    lat = position.coords.latitude;
                    lon = position.coords.longitude;
                    key = 'abd700ead8fc5a6f7b3b5a9ed2b031f6';
                    lang = 'ca';
                    units = 'metric';
                    url = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(key, "&units=").concat(units, "&lang=").concat(lang);
                    requestOptions = {
                        method: "GET",
                        redirect: "follow"
                    };
                    return [4 /*yield*/, fetch(url, requestOptions)];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    data = _a.sent();
                    temp = Math.floor(data.main.temp);
                    icon = "<img\n    src=\"http://openweathermap.org/img/wn/".concat(data.weather[0].icon, ".png\"\n    alt=\"").concat(data.weather[0].description, "\"/>");
                    showWeather.innerHTML = "".concat(icon, " | ").concat(temp, " \u00BAC");
                    return [2 /*return*/];
            }
        });
    });
}
;
function generateJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var DAD_JOKE_URL, NORRIS_URL, requestOptions1, dadJokes, jokes1, requestOptions2, chuckJokes, jokes2, numRandom, result, printJoke, date, jokeObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    DAD_JOKE_URL = "https://icanhazdadjoke.com/";
                    NORRIS_URL = "https://api.chucknorris.io/jokes/random";
                    requestOptions1 = {
                        headers: {
                            Accept: "application/json"
                        }
                    };
                    return [4 /*yield*/, fetch(DAD_JOKE_URL, requestOptions1)];
                case 1:
                    dadJokes = _a.sent();
                    return [4 /*yield*/, dadJokes.json()];
                case 2:
                    jokes1 = _a.sent();
                    requestOptions2 = {
                        method: "GET",
                        redirect: "follow"
                    };
                    return [4 /*yield*/, fetch(NORRIS_URL, requestOptions2)];
                case 3:
                    chuckJokes = _a.sent();
                    return [4 /*yield*/, chuckJokes.json()];
                case 4:
                    jokes2 = _a.sent();
                    numRandom = Math.round(Math.random());
                    result = numRandom ? jokes1.joke : jokes2.value;
                    printJoke = document.getElementById("jokeDisplay");
                    printJoke.innerHTML = result;
                    date = getDate();
                    jokeObj = {
                        date: date,
                        joke: result,
                        score: 0
                    };
                    reportJokes.push(jokeObj);
                    return [2 /*return*/];
            }
        });
    });
}
;
function rateJoke(score) {
    //let index: number = reportJokes.findIndex(i => i.score == 0);
    reportJokes[reportJokes.length - 1].score = score;
    console.log("report jokes score", reportJokes);
    generateJoke();
}
;
getLocation();
