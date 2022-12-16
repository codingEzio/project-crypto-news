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

export const mapKeys = R.curry((fn, obj) => {
  R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj)));
});

export const recursiveMapValues = R.curry((fn, obj) => {
  R.ifElse(
    R.is(Object),
    R.map(x => recursiveMapValues(fn, x)),
    fn,
  )(obj);
});

export const recursiveMapKeys = R.curry((fn, obj) => {
  R.when(
    R.is(Object),
    R.compose(
      R.fromPairs,
      R.map(
        R.juxt([R.o(fn, R.head), R.o(x => recursiveMapKeys(fn, x), R.last)]),
      ),
      R.toPairs,
    ),
  )(obj);
});
