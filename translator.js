function translate() {
  try {
    const inputBox = document.getElementById("input");
    const resultBox = document.getElementById("result");

    if (!inputBox || !resultBox) {
      document.body.innerHTML += "<div style='color:red'>ERROR: Missing HTML elements.</div>";
      return;
    }

    const text = inputBox.value.toLowerCase().trim();

    if (!text) {
      resultBox.innerHTML = "Please enter text to translate.";
      return;
    }

    const rules = {
      "alignment": {
        literal: "agreement on what we're doing",
        implied: [
          "someone disagrees but doesn’t want to say it directly",
          "leadership wants unity before moving forward",
          "they need you to adjust your approach"
        ],
        note: "Often used to signal disagreement indirectly or request behavioral alignment."
      },
      "circle back": {
        literal: "return to this later",
        implied: [
          "this is postponed indefinitely",
          "they need more information first",
          "you may be responsible for reminding them"
        ],
        note: "Rarely includes a concrete timeline unless someone owns follow-up."
      },
      "touch base": {
        literal: "talk briefly",
        implied: [
          "they want an update",
          "they’re unsure about progress",
          "they want to check how things are going socially or emotionally"
        ],
        note: "Usually a check-in, not urgent but expected."
      },
      "stretch goal": {
        literal: "an ambitious target",
        implied: [
          "this may affect your performance review",
          "leadership expects increased output",
          "capacity limits may not be acknowledged"
        ],
        note: "Often used to justify increased workload."
      },
      "manage expectations": {
        literal: "prepare for a realistic outcome",
        implied: [
          "something may disappoint stakeholders",
          "resources or timelines are not enough",
          "someone is softening bad news"
        ],
        note: "Signals a downward adjustment of hopes."
      }
    };

    let found = false;
    let finalHTML = "";

    for (let [keyword, meaning] of Object.entries(rules)) {
      const regex = new RegExp(keyword, "gi");

      if (regex.test(text)) {
        found = true;
        finalHTML += `
          <div style="margin-bottom: 25px;">
            <div class="phrase-title">Phrase detected: ${keyword}</div><br>

            <strong>Literal meaning:</strong><br>
            ${meaning.literal}<br><br>

            <strong>Possible implied meanings:</strong>
            <ul>
              ${meaning.implied.map(i => `<li>${i}</li>`).join("")}
            </ul>

            <strong>Context note:</strong><br>
            ${meaning.note}
          </div>
        `;
      }
    }

    if (!found) {
      finalHTML = "No corporate phrasing detected. Try a more common expression or longer sentence.";
    }

    resultBox.innerHTML = finalHTML;

  } catch (err) {
    document.getElementById("result").innerHTML = `
      <div style="color: #ff6b6b; font-weight: bold;">
        JavaScript Error:<br>
        ${err.message}
      </div>
    `;
  }
}
window.translate = translate;

