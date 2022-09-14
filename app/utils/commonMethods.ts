export function convertMeetingNameShort(
  name: string | undefined | null,
): string {
  if (!name) {
    return '';
  }

  switch (name) {
    case 'ST':
      return 'ST';
    case 'HV':
      return 'HV';
    default:
      return name;
  }
}
