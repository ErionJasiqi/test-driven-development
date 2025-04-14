export function isValid(isbn13: string): boolean {
  const cleanedIsbn = isbn13.replace(/[^0-9]/g, "");

  if (cleanedIsbn.length !== 13) {
    throw new Error("Invalid ISBN length");
  }
  if (!/^\d{13}$/.test(cleanedIsbn)) {
    throw new Error("Invalid ISBN format");
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(cleanedIsbn.charAt(i), 10);
    if (i % 2 === 0) {
      sum += digit;
    } else {
      sum += digit * 3;
    }
  }

  const checkDigit = (10 - (sum % 10)) % 10;

  return checkDigit === parseInt(cleanedIsbn.charAt(12), 10);
}
