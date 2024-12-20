export default function b(...args) {
  console.log("b", ...args);
  return args.reduce((acc, val) => acc + val, 0);
}
