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
const react_apexcharts_1 = __importDefault(require("react-apexcharts"));
const ActivityChart = (props) => {
  const [data, setData] = (0, react_1.useState)(null);
  (0, react_1.useEffect)(() => {
    if (props.series && props.labels) {
      setData({
        series: props.series,
        options: {
          chart: {
            height: 420,
            type: "line",
            stacked: false,
            background: 'rgba(34, 34, 34, .95)',
            foreColor: '#fff',
          },
          theme: {
            monochrome: {
              enabled: true,
              color: '#00CB79',
              shadeTo: 'light',
              shadeIntensity: 0.65
            }
          },
          stroke: {
            width: [0, 2, 5],
            curve: "smooth",
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
          fill: {
            opacity: [0.85, 0.25, 1],
            colors: ["#00CB79", "#00CB79", "#00CB79"],
            gradient: {
              inverseColors: false,
              shade: "dark",
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 2, 4, 6],
            },
          },
          labels: props.labels,
          markers: {
            size: 0,
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            title: {
              text: props.name,
            },
            styles: {
              color: "#fff",
            },
            min: 0,
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== "undefined") {
                  return `${y.toFixed(0)} ${props.name}`;
                }
                return y;
              },
            },
          },
        },
      });
    }
  }, [props.series, props.labels]);
  if (!data) {
    return null;
  }
  return (react_1.default.createElement("div", { style: { width: "100%" } },
    react_1.default.createElement(react_apexcharts_1.default, { options: data.options, series: data.series, type: "area", height: 420 })));
};
export default ActivityChart;