export const utilsHelper = {
  listUnique: <T>(array: T[]) => {
    if (!array) return []
    return [
      ...new Set(array),
    ]
  },
  objectRemoveEmptyValues: <T extends Record<string, any>>(obj: T) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([, value]) => value !== null && value !== undefined && value !== '')
    );
  }
}