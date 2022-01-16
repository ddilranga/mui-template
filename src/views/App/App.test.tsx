test("that jest is working", () => {
  expect(true).toBe(true);
});

/* fix for "Cannot be compiled under '--isolatedModules' because it is considered a global script file.
 **Add an import, export, or an empty 'export {}' statement to make it a module."
 */
export {};
