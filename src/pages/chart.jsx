var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function () { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
  o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const ActivityChart_1 = __importDefault(require("../components/activityChart"));
const API_TOKEN = "59b126a0-3644-490a-9cee-35f6cffe5035";
const ENDPOINT = "https://devcamp.com/api/metrics/code_editor_grouped_by_day";
const Chart = () => {
  const [series, setSeries] = (0, react_1.useState)(null);
  const [dates, setDates] = (0, react_1.useState)([]);
  const [isLoading, setIsLoading] = (0, react_1.useState)(true);
  (0, react_1.useEffect)(() => {
    getData();
  }, []);
  const getData = () => {
    axios_1.default
      .get(ENDPOINT, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      })
      .then((response) => {
        if (response === null || response === void 0 ? void 0 : response.data) {
          const durations = response.data.map((stat) => stat.duration && stat.duration > 0
            ? (stat.duration / 3600).toFixed(2)
            : 0);
          setSeries([
            { name: "Coding activity", type: "area", data: durations },
          ]);
          setDates(response.data.map((stat) => stat.date));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERROR GETTING DATA", error);
      });
  };
  const content = isLoading ? (react_1.default.createElement("div", null, "Loading data...")) : (react_1.default.createElement("div", null,
    react_1.default.createElement("div", { className: "content__chart" },
      react_1.default.createElement(ActivityChart_1.default, { labels: dates, name: `hours`, series: series, color: 'white' })),
    react_1.default.createElement("div", { className: "content__title" })));
  return react_1.default.createElement("div", { className: "content" }, content);
};
export default Chart;