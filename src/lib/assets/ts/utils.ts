export function makeID(x: string): string {
  return x.replace(/\s+/g, "-").toLowerCase();
}

export function makeAnchor(x: string): string {
  return "#" + x.replace(/\s+/g, "-").toLowerCase();
}
