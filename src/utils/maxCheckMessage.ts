export default function maxCheckMessage(duration: number): string {
  switch (duration) {
    case 20:
      return "Select 1 option";
    case 30:
      return "Select 1-2 options";
    case 45:
      return "Select 1-2 options";
    case 60:
      return "Select 1-3 options";
    default:
      return "";
  }
}
