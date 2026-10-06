// Node integration checks with minimal DOM and Cesium test doubles.
// This checks handlers and flyTo arguments; it does NOT render WebGL.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
function load(folder, globe = false) {
  const nodes = {}, flights = [], markers = [];
  const document = {getElementById(id) {return nodes[id] ||= {textContent:'',innerHTML:'',hidden:false,removeAttribute(k){delete this[k]}};}};
  const context = {document, console};
  if (globe) context.Cesium = {
    Viewer: function(){this.camera={flyTo: o=>flights.push(o)};this.imageryLayers={addImageryProvider(){}};this.entities={add:o=>(markers.push(o),o)};},
    Cartesian3:{fromDegrees:(lon,lat,height)=>({lon,lat,height})}, Cartesian2:function(){},
    Color:{GOLD:'gold',WHITE:'white',BLACK:'black'},EllipsoidTerrainProvider:function(){},GridImageryProvider:function(){}
  };
  vm.createContext(context);
  for(const file of ['places.js','tour-core.js','app.js']) vm.runInContext(fs.readFileSync(path.join(folder,file),'utf8'),context);
  return {nodes,flights,markers};
}
if(require.main===module){
 const folder=__dirname;
 let {nodes,flights,markers}=load(folder,true);
 assert.equal(nodes.count.textContent,'Stop 1 of 3');
 nodes.next.onclick(); nodes.next.onclick();assert.equal(nodes.count.textContent,'Stop 3 of 3');
 nodes.reset.onclick();assert.equal(nodes.count.textContent,'Stop 1 of 3');
 assert.equal(flights.at(-1).destination.lon,-75.93);assert.equal(flights.at(-1).duration,2);
 assert.equal(markers[0].point.color,'gold');assert.equal(markers[2].point.color,'white');
 console.log('PASS: Reset from stop 3 updates count, destination and marker selection (test doubles).');
 nodes.reset.onclick();assert.equal(nodes.count.textContent,'Stop 1 of 3');
 console.log('PASS: Reset at stop 1 stays at stop 1.');
 nodes.prev.onclick();assert.equal(nodes.count.textContent,'Stop 3 of 3');nodes.next.onclick();assert.equal(nodes.count.textContent,'Stop 1 of 3');
 console.log('PASS: Previous and Next still wrap.');
 ({nodes}=load(folder));nodes.next.onclick();nodes.reset.onclick();assert.equal(nodes.count.textContent,'Stop 1 of 3');assert.match(nodes.message.textContent,/Cesium did not load/);
 console.log('PASS: Reset works without Cesium.');
}
module.exports={load};
