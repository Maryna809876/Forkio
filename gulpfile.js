const gulp=require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const gulpImageMin = require("gulp-imagemin");
const gulpClean = require("gulp-clean");
const GulpCleanCss = require("gulp-clean-css");
const minifyjs = require("gulp-js-minify");
const gulpUglify = require("gulp-uglify");
const gulpAutoprefixer = require("gulp-autoprefixer");
gulp.task("clean",  (done)=> {
  gulp.src("dist", { allowEmpty: true }).pipe(gulpClean()).on("finish", done);
});
gulp.task("moveHTML",(done)=>{
    gulp.src("*.html").pipe(gulp.dest("dist/")).on("end",done);
});
gulp.task("moveJS",(done)=>{
    gulp.src("src/js/*.js").pipe(minifyjs()).pipe(gulpUglify()).pipe(gulp.dest("dist/js")).on("end",done);
});
gulp.task("moveCSS",(done)=>{
    gulp.src("src/scss/*.scss").pipe(sass().on("error", sass.logError)).pipe(GulpCleanCss()).pipe(gulpAutoprefixer({overrideBrowserslist: ["last 2 versions"],cascade: false}))
    .pipe(gulp.dest("dist/css")).on("end",done);

});
gulp.task("imagemin", (done) => {
  gulp.src("src/img/*.{jpg,jpeg,gif,png,svg}").pipe(gulpImageMin()).pipe(gulp.dest("dist/img")).on("end", done);
});
gulp.task("build",gulp.series("clean",gulp.parallel("moveHTML","moveJS","moveCSS","imagemin")));
gulp.task("server",  ()=> {
    browserSync.init({
      open: false,
      server: {
        baseDir: "./dist",
      },
      port: 9000,
      open: true,
    });
    gulp.watch("*.html", gulp.series("moveHTML")).on("change",browserSync.reload);
    gulp.watch("src/scss/*.scss", gulp.series("moveCSS")).on("change",browserSync.reload);
    gulp.watch("src/js/*.js", gulp.series("moveJS")).on("change",browserSync.reload);
    gulp.watch("src/img/*.{jpg,jpeg,gif,png,svg}", gulp.series("imagemin")).on("change",browserSync.reload);
  });

  gulp.task("dev", gulp.series("build", "server"));
