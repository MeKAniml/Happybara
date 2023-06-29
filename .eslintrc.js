module.exports = {
  extends: 'eslint:recommended',
  'env': {
    'browser': true,
    'node': true,
    'es2021': true
  },
  rules: {
	  'indent': [
	  	'error',
		  2
	  ],
	  'linebreak-style': [
      'error',
      'unix'
	  ],
	  'quotes': [
      'error',
      'single'
	  ],
	  'semi': [
      'error',
      'always'
	  ]
  }
};
