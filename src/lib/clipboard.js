export function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    return successful;
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
    return false;
  } finally {
    document.body.removeChild(textArea);
  }
}