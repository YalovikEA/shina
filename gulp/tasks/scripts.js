module.exports = function () {
	$.gulp.task('libsJS:dev', () => {
		return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gulp.dest('./build/js/'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});

	$.gulp.task('libsJS:build', () => {
		return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gp.uglifyjs())
			.pipe($.gulp.dest('./build/static/js/'));
	});

	$.gulp.task('js:copy', () => {
		return $.gulp.src(['./src/js/*.js',
				'!./src/js/libs.min.js'
			])
			// .pipe($.gp.plumber())
			// .pipe($.gp.sourcemaps.init())
			// .pipe($.gp.fileInclude({
			// 	prefix: '@',
			// 	basepath: '@file'
			// }))
			// .on('error', $.gp.notify.onError(function (error) {
			// 	return {
			// 		title: 'JS',
			// 		message: error.message
			// 	};
			// }))
			// .pipe($.gp.concat('main.min.js'))
			// .pipe($.gp.uglifyjs())
			// .pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('./build/js/'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});
};