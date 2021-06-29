export function formatPrice(price) {
    return new Intl.NumberFormat('vi-VE', { style: 'currency', currency: 'VND' }).format(price);
}