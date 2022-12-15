import * as R from 'ramda';

// Shortly put, it adds a new prop
export const prependProp = R.curry((property, value) => {
  // .converge    do .assoc based on produced from .pipe/.identity
  // .assoc       do the merge
  //  .pipe       concat the prop passed in
  //  .identity   placeholder
  R.converge(R.assoc(property), [
    R.pipe(R.prop(property), R.concat(value)),
    R.identity,
  ]);
});
