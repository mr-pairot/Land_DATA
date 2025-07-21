// แผนที่พื้นหลัง
const baseMaps = {
  "OpenStreetMap": L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors",
    }
  )
};

// ฟังก์ชันกำหนด style polygon ตามค่า Landpay14-
function getPolygonStyle(feature) {
  if (
    !feature ||
    !feature.properties ||
    typeof feature.properties["Landpay14-"] === "undefined"
  ) {
    return defaultStyle();
  }

  const val = feature.properties["Landpay14-"];

  if (val === "#N/A" || isNaN(val)) {
    return {
      color: "gray",
      weight: 2,
      opacity: 1,
      fillColor: "gray",
      fillOpacity: 0.5,
      dashArray: "5, 5"
    };
  }

  const styleMap = {
    0: { color: "red", fillColor: "red", dashArray: null },
    1: { color: "green", fillColor: "green", dashArray: null },
    2: { color: "yellow", fillColor: "yellow", dashArray: null }
  };

  const style = styleMap[val] || defaultStyle();

  return {
    color: style.color,
    weight: 2,
    opacity: 1,
    fillColor: style.fillColor,
    fillOpacity: 0.5,
    dashArray: style.dashArray
  };
}

function defaultStyle() {
  return {
    color: "black",
    weight: 1,
    opacity: 1,
    fillColor: "white",
    fillOpacity: 0.2,
    dashArray: "1, 4"
  };
}
