export default function env(value: any, defaultValue: any = null): any {
  if (value === undefined) {
    return defaultValue;
  }

  if (value.toLowerCase() === 'true') {
    return true;
  }

  if (value.toLowerCase() === 'false') {
    return false;
  }

  if (value.toLowerCase() === 'null') {
    return null;
  }

  if (!isNaN(Number(value))) {
    return Number(value);
  }

  return value;
}
