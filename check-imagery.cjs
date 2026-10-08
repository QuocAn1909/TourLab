// Configuration integration checks with test doubles, not live ion/WebGL.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
async function run(config,fail=false){
 const nodes={},calls=[],layers=[];let tileError;
 const provider={errorEvent:{addEventListener:f=>tileError=f}};
 const context={CONFIG:config,console,document:{getElementById:id=>nodes[id]||=( {textContent:'',innerHTML:'',removeAttribute(){}} )},Cesium:{
 Ion:{},IonWorldImageryStyle:{AERIAL_WITH_LABELS:3},
 createWorldImageryAsync:async o=>{calls.push('world');if(fail)throw Error('network');return provider},
 IonImageryProvider:{fromAssetId:async id=>{calls.push(id);return provider}},
 Viewer:function(){this.camera={flyTo(){}};this.entities={add:x=>x};this.imageryLayers={addImageryProvider:x=>(layers.push(x),x),remove:x=>layers.splice(layers.indexOf(x),1)}},
 GridImageryProvider:function(){},EllipsoidTerrainProvider:function(){},Cartesian2:function(){},Cartesian3:{fromDegrees:()=>({})},Color:{WHITE:1,GOLD:2,BLACK:3}
 }};
 vm.createContext(context);for(const f of ['places.js','tour-core.js','app.js'])vm.runInContext(fs.readFileSync(__dirname+'/'+f,'utf8'),context);
 await new Promise(r=>setImmediate(r));return {nodes,calls,layers,tileError};
}
(async()=>{
 let x=await run({cesiumIonAccessToken:''});assert.match(x.nodes.message.textContent,/add your Cesium ion token/);assert.equal(x.calls.length,0);console.log('PASS: Blank token keeps grid and explains setup.');
 x=await run({cesiumIonAccessToken:'test-token',imageryAssetId:null});assert.deepEqual(x.calls,['world']);assert.equal(x.layers.length,1);assert.match(x.nodes.message.textContent,/provider ready/);x.nodes.next.onclick();x.nodes.reset.onclick();assert.equal(x.nodes.count.textContent,'Stop 1 of 3');console.log('PASS: Default imagery replaces grid; Reset still works.');
 x.tileError();assert.match(x.nodes.message.textContent,/tiles could not load/);console.log('PASS: Tile failure reports clear error.');
 x=await run({cesiumIonAccessToken:'test-token',imageryAssetId:123});assert.deepEqual(x.calls,[123]);console.log('PASS: Configured imagery asset used.');
 x=await run({cesiumIonAccessToken:'test-token'},true);assert.equal(x.layers.length,1);assert.match(x.nodes.message.textContent,/could not load/);x.nodes.next.onclick();assert.equal(x.nodes.count.textContent,'Stop 2 of 3');console.log('PASS: Provider rejection keeps grid and buttons.');
 x=await run({cesiumIonAccessToken:'test-token',imageryAssetId:'bad'});assert.equal(x.calls.length,0);assert.match(x.nodes.message.textContent,/could not load/);console.log('PASS: Invalid asset ID handled.');
})().catch(e=>{console.error(e);process.exitCode=1});
