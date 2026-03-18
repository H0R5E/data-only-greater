export function makeID(x: string): string {
  return x.replace(/\s+/g, "-").toLowerCase();
}

export function makeAnchor(x: string): string {
  return "#" + x.replace(/\s+/g, "-").toLowerCase();
}

export function spaceToUnderscore(x: string): string {
  return x.replace(/\s+/g, "_");
}

export function underscoreToSpace(x: string): string {
  return x.replace(/_+/g, " ");
}
