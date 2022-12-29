export default function stringHelpers() {
  const capitalize = (string) => {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return "-";
    }
  };

  return {
    capitalize,
  };
}
