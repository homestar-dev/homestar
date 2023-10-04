interface ClassNameInterface {
  format(...classnames: (string | boolean | undefined)[]): string;
}

export const ClnUtil: ClassNameInterface = {
  format(...classnames: (string | boolean | undefined)[]): string {
    return classnames.filter(Boolean).join(" ");
  },
};
