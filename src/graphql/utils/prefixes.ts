export const typePrefixes: Readonly<Record<string, string>> = {
  User: "usr",
};

interface ParsePrefixedIdProps {
  prefix: string;
  id: string;
}

export function parsePrefixedId(prefixedId: string): ParsePrefixedIdProps {
  const [prefix, id] = prefixedId.split("_");

  if (!Object.values(typePrefixes).includes(prefix)) {
    throw TypeError(`Unknown type prefix: ${prefix}`);
  }

  return { prefix, id };
}
