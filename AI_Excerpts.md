# AI collaboration excerpts

These are genuine excerpts from this session. Translations are labeled; no extra student prompts are invented. Implementation choices below were made by the assistant and need student review before submission.

## 1. Planning
Student: “tải r h sao m làm hết cho t luôn đc k”
Translation: “I downloaded it. What now? Can you do all of it for me?”
Assistant: “Tao sẽ mở starter, xem code và bộ test rồi làm bản tour cho sinh viên CS.”
Translation: “I will open the starter, inspect the code and tests, and make a tour for CS students.”

Decision: adapt the supplied starter for new CS students. Use the assignment's permitted labeled-placeholder option because no real campus locations have been established.
Student's own acceptance/rejection and reason: [review and complete].

## 2. Coding
Assistant: “Starter đã có nút Next rồi, nên tao sẽ thêm **Reset Tour** để quay về điểm đầu.”
Translation: “The starter already has Next, so I will add Reset Tour to return to the first stop.”
Actual added code:
```js
$('reset').onclick = () => { i = 0; show(); };
```
Decision: reject Next as the claimed new feature, because it was already supplied. Reuse show() so details and camera selection stay together. Do not claim this code was independently written by the student.
Student's own acceptance/rejection and explanation of i and show(): [review and complete].

## 3. Debugging
Assistant: “Phần break-and-repair cho đúng kết quả: bỏ longitude thì còn **11/12 pass**, hiện cảnh báo thiếu tọa độ; khôi phục thì **12/12 pass**.”
Translation: “The break-and-repair behaved as expected: removing longitude gave 11/12 passing and a missing-coordinate warning; restoring it gave 12/12.”
Actual output excerpt from the intentionally broken copy:
```text
FAIL: Every record in places.js is usable
```
Actual warning text contains:
```text
longitude must be a number from -180 to 180
```
Decision: restore the supplied numeric longitude; retain the validator and failing test instead of weakening them. Node/test-double results are not claimed as rendered-browser evidence.
Student's own acceptance/rejection and what was learned: [review and complete].

AI use disclosure: ChatGPT adapted code and descriptions, wrote documentation and a reflection draft, ran Node tests, and checked official API documentation. Browser/manual testing, partner feedback, and the student's final review remain pending.
