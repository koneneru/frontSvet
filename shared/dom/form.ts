import { toIsoString } from '../lib/date';

export function getFormData<T>(form: HTMLFormElement): T {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries()) as unknown as T;
}

export function setFormData<T>(form: HTMLFormElement, data: T): void {
  (Object.keys(data as object) as Array<keyof T>).forEach((key) => {
    const el = form.elements.namedItem(String(key));
    if (!el) return;

    const value = data[key];

    if (el instanceof HTMLInputElement) {
      if (el.type === 'checkbox') {
        el.checked = Boolean(value);
      } else if (el.type === 'datetime-local') {
        el.value = toIsoString(value as Date);
      } else {
        el.value = String(value ?? '');
      }
    } else if (el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) {
      el.value = String(value ?? '');
    }
  });
}
