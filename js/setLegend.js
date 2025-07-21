// setLegend.js

function addLegend(map) {
  const legend = L.control({ position: "bottomleft" });

  legend.onAdd = function () {
    const div = L.DomUtil.create("div", "info legend");

    let html = `<strong>ข้อมูลพื้นที่เวนคืน วันที่ 01/06/2568</strong><br>`;
    
    // ตัวอย่างข้อมูลจำลอง (mock) เพื่อดึง style
    const items = [
      { label: "ไม่มีข้อมูล", value: "#N/A" },
      { label: "เข้าพื้นที่ไม่ได้", value: 0 },
      { label: "เข้าพื้นที่ได้", value: 1 },
      { label: "เข้าพื้นที่ไม่ได้บางส่วน", value: 2 }
    ];

    

    items.forEach((item) => {
      const mockFeature = {
        properties: {
          "Landpay14-": item.value
        }
      };
      const style = getPolygonStyle(mockFeature);

      const border = style.dashArray ? "1px dashed" : "1px solid";

      html += `<i style="background:${style.fillColor}; border:${border} ${style.color};"></i> ${item.label}<br>`;
    });

    div.innerHTML = html;
    return div;
  };

  legend.addTo(map);
}
