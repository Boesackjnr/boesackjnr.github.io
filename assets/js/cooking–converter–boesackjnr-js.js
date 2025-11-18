    // ---- Volume Conversion ----
    const volumeUnit = document.getElementById("volumeUnit");
    const volumeValue = document.getElementById("volumeValue");
    const volumeResult = document.getElementById("volumeResult");
    const swapVolume = document.getElementById("swapVolume");
    let isVolumeReversed = false;

    const volumeConversions = {
      cups: 240,
      tablespoons: 15,
      teaspoons: 5,
      liters: 1000
    };

    function updateVolume() {
      const unit = volumeUnit.value;
      const value = parseFloat(volumeValue.value);
      const ml = (value * volumeConversions[unit]).toFixed(1);

      if (isVolumeReversed) {
        const backToUnit = (value / volumeConversions[unit]).toFixed(2);
        volumeResult.textContent = `${value} ml = ${backToUnit} ${unit}`;
      } else {
        volumeResult.textContent = `${value} ${unit} = ${ml} ml`;
      }
    }

    swapVolume.addEventListener("click", () => {
      isVolumeReversed = !isVolumeReversed;
      swapVolume.textContent = isVolumeReversed ? "↔ Swap Back" : "↔ Swap";
      updateVolume();
    });

    volumeUnit.addEventListener("change", updateVolume);
    volumeValue.addEventListener("input", updateVolume);

    // ---- Weight Conversion ----
    const weightUnit = document.getElementById("weightUnit");
    const weightValue = document.getElementById("weightValue");
    const weightResult = document.getElementById("weightResult");
    const swapWeight = document.getElementById("swapWeight");
    let isWeightReversed = false;

    const weightConversions = {
      ounces: 28.35,
      pounds: 453.59,
      grams: 1,
      kilograms: 1000
    };

    function updateWeight() {
      const unit = weightUnit.value;
      const value = parseFloat(weightValue.value);

      if (isWeightReversed) {
        // Reverse: grams to selected unit
        if (unit === "grams") {
          const ounces = (value / 28.35).toFixed(2);
          weightResult.textContent = `${value} g = ${ounces} oz`;
        } else if (unit === "kilograms") {
          const pounds = (value / 0.45359).toFixed(2);
          weightResult.textContent = `${value} kg = ${pounds} lb`;
        } else {
          const converted = (value / weightConversions[unit]).toFixed(2);
          weightResult.textContent = `${value} g = ${converted} ${unit}`;
        }
      } else {
        // Normal: unit to grams
        if (unit === "grams") {
          const ounces = (value / 28.35).toFixed(2);
          weightResult.textContent = `${value} g = ${ounces} oz`;
        } else if (unit === "kilograms") {
          const pounds = (value * 2.20462).toFixed(2);
          weightResult.textContent = `${value} kg = ${pounds} lb`;
        } else {
          const grams = (value * weightConversions[unit]).toFixed(2);
          weightResult.textContent = `${value} ${unit} = ${grams} g`;
        }
      }
    }

    swapWeight.addEventListener("click", () => {
      isWeightReversed = !isWeightReversed;
      swapWeight.textContent = isWeightReversed ? "↔ Swap Back" : "↔ Swap";
      updateWeight();
    });

    weightUnit.addEventListener("change", updateWeight);
    weightValue.addEventListener("input", updateWeight);

    // Initialize
    updateVolume();
    updateWeight();

   // ---- Calculator Logic ----
  const display = document.getElementById('calcDisplay');
  const buttons = document.querySelectorAll('.calcBtn');
  let currentInput = '';

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.textContent;

      if (btn.id === 'allClear') {
        currentInput = '';
        display.value = '';
      } 
      else if (btn.id === 'clearEntry') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      }
      else if (btn.id === 'equals' || btn.id === 'equalsBottom') {
        try {
          display.value = eval(currentInput);
          currentInput = display.value;
        } catch {
          display.value = 'Error';
          currentInput = '';
        }
      } 
      else if (val === '%') {
        const match = currentInput.match(/(\d+(\.\d+)?)$/);
        if (match) {
          const num = parseFloat(match[0]);
          const converted = num / 100;
          currentInput = currentInput.replace(/(\d+(\.\d+)?)$/, converted.toString());
          display.value = currentInput;
        }
      } 
      else {
        currentInput += val;
        display.value = currentInput;
      }
    });
  });