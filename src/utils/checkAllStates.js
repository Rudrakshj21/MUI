export default function (states) {
  // at least one element is null
  let hasNullState = false;
  console.log(Object.values(states));
  Object.values(states).forEach((state, index) => {
    // strict equality is needed as inDegree has default of false and false == "" is true
    if ((state === null || state === "") && index != 0 ) {
      console.log(state);
      hasNullState = true;
    }
  });

  console.log(hasNullState);
  if (hasNullState) return false;
  return true;
}
