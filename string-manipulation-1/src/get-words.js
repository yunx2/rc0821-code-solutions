/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  }
  return string.split(' ');
}
