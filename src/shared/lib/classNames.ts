type Mods = Record<string, string | boolean>;

const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls)
  ].join(' ');

export { classNames as cn };
