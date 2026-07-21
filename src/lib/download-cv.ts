export function downloadCV() {
  const link = document.createElement("a");

  link.href = "/Hamilton_Emmanuel_Resume.pdf";
  link.download = "Hamilton_Emmanuel_Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}