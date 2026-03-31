function normalizeUnits(manifest) {
  const normalized = { ...manifest };

  if (normalized.unit === "lb") {
    normalized.weight = normalized.weight * 0.45;
    normalized.unit = "kg";
  }

  return normalized;
}

function validateManifest(manifest) {
  const errors = {};

  const requiredProps = ["containerId", "destination", "weight", "unit", "hazmat"];

  for (const prop of requiredProps) {
    if (!(prop in manifest)) {
      errors[prop] = "Missing";
      continue;
    }

    const value = manifest[prop];
    let isValid = false;

    switch (prop) {
      case "containerId":
        isValid = Number.isInteger(value) && value > 0;
        break;
      case "destination":
        isValid = typeof value === "string" && value.trim().length > 0;
        break;
      case "weight":
        isValid = typeof value === "number" && value > 0;
        break;
      case "unit":
        isValid = value === "kg" || value === "lb";
        break;
      case "hazmat":
        isValid = typeof value === "boolean";
        break;
    }

    if (!isValid) {
      errors[prop] = "Invalid";
    }
  }

  return errors;
}

function processManifest(manifest) {
  const validationErrors = validateManifest(manifest);

  if (Object.keys(validationErrors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${normalized.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationErrors);
  }
}