// export function formatCurrency(amount: number) {
//     return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount)
// }

// Moneda paraguaya 
export function formatCurrency(amount: number) {
  const n = new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return n.replace('Gs.','₲');
}

export function formatDate(dateStr: string) : string {
    const dateObj = new Date(dateStr)
    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
}