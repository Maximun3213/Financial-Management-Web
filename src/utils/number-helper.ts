class NumberHelper {
  calculateRem(px: number, base: number = 10): string {
    const newPx = px * 1;
    const newBase = base * 1;
    return `${newPx / newBase}rem`;
  }

  getRandomInt(min: number, max: number): number {
    const min_ = Math.ceil(min);
    const max_ = Math.floor(max);
    return Math.floor(Math.random() * (max_ - min_) + min_); // The maximum is exclusive and the minimum is inclusive
  }

  randomValueRangeInt(hash: number, minVal: number, maxVal: number): number {
    return minVal + (hash % (maxVal - minVal + 1));
  }

  convertRemToPx(px: number): number {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      return px * rootFontSize;
    }
    // Fallback for SSR - assume 16px as default font size
    return px * 16;
  }
}

export const numberHelper = new NumberHelper();
