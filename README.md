# Imagery update — 2026-10-07

This uploaded project now includes config.js. Paste a public read-only Cesium ion token into cesiumIonAccessToken and reload. index.html loads config.js before app.js. A blank token leaves a labeled grid preview. Token/network/asset failures display a message while navigation continues.

Default: createWorldImageryAsync with AERIAL_WITH_LABELS. An optional numeric imageryAssetId uses IonImageryProvider.fromAssetId. The globe retains ellipsoid geometry; this adds imagery, not terrain or 3D buildings. Existing stop coordinates remain explicitly simulated. CesiumJS stays pinned to 1.145.

For GitHub Pages, update config.js, app.js and index.html together. Restrict the browser token to read-only imagery access; configure allowed URLs for localhost and the deployed site if restrictions are enabled. See SETUP_MAP_VI.txt.

Validation: original rule tests and Reset integration checks run locally. New configuration/error-path tests use Cesium test doubles. Live ion imagery and WebGL must be verified after a real token is entered; existing screenshots document the earlier grid version.

Official API references checked for this update:
https://cesium.com/learn/cesiumjs/ref-doc/global.html#createWorldImageryAsync
https://cesium.com/learn/cesiumjs/ref-doc/IonImageryProvider.html#fromAssetId

The original lab notes below describe the earlier grid baseline; their no-token/no-imagery statements apply to that baseline only.

---

# CS Resource Tour — AI 101, Path B

## Purpose and audience
“I want to help new Computer Science students explore possible campus technology resources using clearly labeled simulated stop data.”
Before sharing this as a real campus guide, I will verify each location, its services, and coordinates against official university sources.

This is a concept demonstration, not a campus directory. Path B explicitly allows labeled placeholders. All three coordinates are retained from the supplied starter and do not identify actual buildings. `checked: 2026-10-05` means the placeholder source/label was reviewed, not that a real location was verified. See SOURCES.md.

## Run on Windows
1. Right-click Tour_Lab.zip → Extract All. Open the extracted Tour_Lab folder containing index.html and app.js. Do not run inside the ZIP.
2. Click the File Explorer address bar, type `cmd`, and press Enter. This opens Command Prompt in that folder.
3. Run `py -m http.server 8000`. If `py` is unavailable but Python is installed as `python`, run `python -m http.server 8000`.
4. Leave that window open. Open http://localhost:8000/index.html in Chrome or Edge.
5. Open http://localhost:8000/tests.html for the supplied 12 checks.
6. Stop the server with Ctrl+C. If port 8000 is occupied, use 8001 in both the command and URLs.

Python 3 is needed only to serve files locally. Internet access and WebGL are needed for the globe. If neither Python command works, use a partner's Python-equipped computer or an instructor-approved local web server. Do not paste the Python command into the Python `>>>` prompt.

CesiumJS **1.145**, unchanged from the starter, is referenced by both CDN tags in index.html. No ion token is required; the starter uses an ellipsoid and grid imagery. The CDN release and visual rendering still need browser confirmation on the student's machine. A working detail panel alone does not prove WebGL works.

## Feature and code explanation
The original already had Previous and Next. The added **Reset Tour** button returns directly to the first usable stop, useful when restarting a student orientation demonstration.
- index.html adds `button#reset` and a live count announcement.
- app.js sets `i = 0` and calls the existing `show()` function.
- `show()` updates the text, camera destination, and selected marker together.
- Navigation buttons are disabled when there are no usable records.
- places.js adapts the three examples to IT support, programming study, and cybersecurity practice, with visible PLACEHOLDER labels.
- tour-core.js and the original tests.js are unchanged.

## Tests and first checkpoint
On 2026-10-05 the AI assistant ran the original starter's tests.js with Node: **12/12 PASS**, saved in evidence/baseline-tests.txt. This is the first successful rules/data checkpoint, not a successful WebGL launch. An unchanged starter ZIP is in evidence/original-starter.zip for your baseline browser demonstration.

Final rules/data tests: 12/12 PASS. Added integration checks: 4/4 PASS. The integration script uses minimal DOM and Cesium test doubles; it checks event handlers and camera arguments, not pixels or actual camera movement. Run these optional checks with Node:

```text
node tests.js
node check-ui.cjs
```

Actual outputs are in evidence/. Test_Log.csv distinguishes AI-executed checks from pending student/manual checks. tests.html uses the same supplied tests.js, but its browser execution is pending. A browser installation was attempted in the assistant environment and failed; no browser screenshot or rendered-globe success is claimed.

## Break and repair
The assistant performed this on a separate copy, leaving the final data repaired:
1. Change only the first record's `"lon": -75.93,` to `"lon": null,` in places.js.
2. Reload the tour and tests.html. Expect “longitude must be a number from -180 to 180,” two usable stops, and FAIL for “Every record in places.js is usable.”
3. Restore `"lon": -75.93,`, save, and reload. Expect three stops, no data warning, and 12 PASS.

Recorded Node results: broken 11/12; repaired 12/12. The warning was observed by executing app.js with a DOM test double; see evidence/broken-warning.txt. Repeat the steps in a browser and attach your screenshots to complete visual evidence.

## Before submission
Read FINISH_ME_VI.md. Complete the Code Warm-Up, original browser baseline, six instructor manual checks, browser tests.html, and partner reproduction. The instructor's manual-check page was not included in the uploaded starter; MANUAL_CHECKS.md contains a provisional checklist, not a substitute for that page. Update the log with actual results and evidence.

Have a partner follow these run steps. Record their actual feedback in Partner_Feedback.md, implement one improvement, and retest it. The assistant is not your partner.

AI_Excerpts.md contains genuine excerpts from this session with attribution and the assistant's implementation decisions. Review those choices and record your own accepted/rejected decisions. Reflection_DRAFT.txt is a 150–250-word draft to review and update after completing your own work.

## Limitations and verification
No real campus stops are verified. There are no photographs, satellite imagery, terrain, directions, accessibility guarantees, or current opening hours. Passing schema tests only establishes data structure; it does not establish truth. Sources.md is named SOURCES.md in this folder and documents the official Camera.flyTo API check. The two-second camera flight is an animation duration, not travel time.

Publishing is optional; no site has been published. Submit the final project ZIP after completing pending evidence, unless the instructor requires a link.
