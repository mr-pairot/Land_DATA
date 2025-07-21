// setLegend.js
function addLegend(map, features) {
  const updateDate = features?.[0]?.properties?.update_date || "ไม่ระบุวันที่";

  const legend = L.control({ position: "bottomleft" });

  legend.onAdd = function () {
    const div = L.DomUtil.create("div", "info legend");
    div.innerHTML = `<strong>ข้อมูลพื้นที่เวนคืน วันที่ ${updateDate}</strong><br>
      <i style="background: gray; border:1px dashed gray;"></i> ไม่มีข้อมูล<br>
      <i style="background: red;"></i> เข้าพื้นที่ไม่ได้<br>
      <i style="background: green;"></i> เข้าพื้นที่ได้<br>
      <i style="background: yellow;"></i> เข้าพื้นที่ไม่ได้บางส่วน
    `;
    return div;
  };

  legend.addTo(map);
  return legend;
}
