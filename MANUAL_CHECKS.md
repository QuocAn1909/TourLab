# Provisional manual checklist — not yet performed

The assignment refers to six checks on page 6; the starter README calls them Canvas page 05. Neither page was uploaded. Compare these suggestions to the instructor's exact six checks and revise the list before marking completion.

1. Load index.html: observe three placeholder stops, a grid globe and markers, and no incomplete-data warning. Record whether Cesium actually loads.
2. Next: visit stops 2 and 3; verify names, count, selected marker, and camera location; click again to wrap to stop 1.
3. Previous from stop 1: verify wrap to stop 3 and corresponding camera/marker changes.
4. Reset from stop 3 and again from stop 1: verify the first name/count, camera target, and highlighted first marker. Check keyboard Tab/Enter as well.
5. Missing longitude: follow README break-and-repair; record warning, two remaining stops, one failed browser test; restore and record 12 PASS and three stops.
6. Review all three descriptions, source/date labels, empty-photo message, and visible placeholder status. Confirm the display makes no real campus navigation claim. Resize the browser and check the buttons remain usable.

Additional fallback check: block the Cesium script with browser developer tools and reload. The panel and Reset should work with a clear fallback message. Restore normal network access afterward.

Record actual observations in Test_Log.csv and save screenshots to evidence/. Do not mark PASS based on the expected result alone.
