const config = {
	plugins: {
		'postcss-easy-import': {
			prefix: '_',
			extensions: '.scss'
		},
		'postcss-cssnext': {},
		'cssnano': {}
	}
}

module.exports = config;