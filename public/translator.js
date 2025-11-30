function translate() {
  const inputBox = document.getElementById("input");
  const resultBox = document.getElementById("result");

  const text = inputBox.value.toLowerCase().trim();

  if (!text) {
    resultBox.innerHTML = "Please enter text to translate.";
    return;
  }

  // 🔥 FLEXIBLE DICTIONARY WITH VARIATIONS AND PARTIAL MATCHES
  const rules = [
    {
      keywords: ["alignment", "align", "aligned"],
      literal: "agreement on the plan or direction",
      implied: [
        "someone disagrees privately",
        "leadership wants unity before moving forward",
        "you may need to adjust your approach"
      ],
      note: "Often used when there’s disagreement but nobody wants confrontation."
    },
    {
      keywords: ["circle back", "circling back"],
      literal: "return to this later",
      implied: [
        "this is postponed indefinitely",
        "they need more information",
        "you may need to follow up or it will be forgotten"
      ],
      note: "Common stalling phrase in corporate environments."
    },
    {
      keywords: ["touch base", "checking in", "check in"],
      literal: "talk briefly",
      implied: [
        "they want an update",
        "they’re unsure about progress",
        "they want reassurance that things are moving"
      ],
      note: "Usually signals uncertainty more than urgency."
    },
    {
      keywords: ["stretch goal", "reach further", "push harder"],
      literal: "a difficult or ambitious target",
      implied: [
        "your workload is increasing",
        "you may be judged on this later",
        "capacity limits might not be acknowledged"
      ],
      note: "Often used to justify unrealistic expectations."
    },
    {
      keywords: ["manage expectations", "reset expectations", "expectations management"],
      literal: "prepare for a realistic outcome",
      implied: [
        "something disappointing is coming",
        "results may fall short",
        "someone is softening bad news"
      ],
      note: "Signals a downward shift in projected results."
    },
    {
      keywords: ["disconnect", "disconnected", "feel disconnected"],
      literal: "not connected or aligned emotionally or strategically",
      implied: [
        "someone is unhappy with communication style",
        "someone feels out of the loop",
        "there is a relationship issue not being stated clearly"
      ],
      note: "Usually points to a mismatch in communication tone or expectations."
    }
  ];

  let found = false;
  let finalHTML = "";

  for (const rule of rules) {
    const match = rule.keywords.some(keyword => text.includes(keyword));

    if (match) {
      found = true;

      finalHTML += `
        <div style="margin-bottom: 25px;">
          <div class="phrase-title">Phrase detected: ${rule.keywords[0]}</div><br>

          <strong>Literal meaning:</strong><br>
          ${rule.literal}<br><br>

          <strong>Possible implied meanings:</strong>
          <ul>
            ${rule.implied.map(i => `<li>${i}</li>`).join("")}
          </ul>

          <strong>Context note:</strong><br>
          ${rule.note}
        </div>
      `;
    }
  }

  if (!found) {
    finalHTML = "No corporate phrasing detected. Try a more common expression or longer sentence.";
  }

  resultBox.innerHTML = finalHTML;
}

window.translate = translate;

