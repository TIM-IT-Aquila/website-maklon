export function createHalalConsultMessage(message: string, extra?: string): string {
  if (!extra) return message;
  return `${message}\n\nCatatan: ${extra}`;
}
