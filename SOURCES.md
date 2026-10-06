# Sources and verification — checked 2026-10-05

## Placeholder records
All three are labeled simulated stops, as allowed by the assignment.

| Stop | Coordinate source | Status |
|---|---|---|
| IT Help Desk — PLACEHOLDER | Supplied Tour_Lab/places.js, example 1: -75.9300, 40.3300 | Invented teaching position; no actual office verified |
| Programming Study Space — PLACEHOLDER | Supplied Tour_Lab/places.js, example 2: -75.9250, 40.3340 | Invented teaching position; no actual lab verified |
| Cybersecurity Practice Lab — PLACEHOLDER | Supplied Tour_Lab/places.js, example 3: -75.9350, 40.3270 | Invented teaching position; no actual facility verified |

The original ZIP is preserved in evidence/original-starter.zip. Descriptions are AI-assisted concepts, not sourced university service claims. Each record includes its source and review date. No university building coordinates were guessed or represented as confirmed. Before converting this into a real tour, verify official university information and each coordinate, and update source and checked in every record.

## API claim checked against a primary source
Official Cesium Camera documentation:
https://cesium.com/learn/cesiumjs/ref-doc/Camera.html#flyTo

Accessed by the AI assistant on 2026-10-05. The documented flyTo options include destination and duration, with duration measured in seconds. The implementation reuses the starter's flyTo call with duration: 2. Reset changes the selected record before show() constructs that call. This supports the API choice; it does not establish that the CDN or GPU works on the student's computer. The live documentation was read; the version-specific 1.145 documentation URL could not be retrieved here.

Cesium version 1.145 is read directly from the supplied index.html script and stylesheet URLs and remains pinned there.
