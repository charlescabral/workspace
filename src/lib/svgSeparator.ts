export {}
// export default async function svgSeparator() {}

// @function str-replace($string, $search, $replace: '') {
//   $index: str-index($string, $search);

//   @if $index {
//     @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
//   }

//   @return $string;
// }

// @mixin svg ($from, $to, $reverse: false, $width: 100%) {
//   $polygons: '<polygon fill="#{$from}" points="0 100 0 0 100 0"/><polygon fill="#{$to}" points="100 0 100 100 0 100"/>';
//   @if $reverse == true {
//     $polygons: '<polygon fill="#{$from}" points="0 0 100 0 100 100"/><polygon fill="#{$to}" points="0 0 0 100 100 100"/>';
//   }

//   $svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">#{$polygons}</svg>';

//   $svg: str-replace($svg, '#', '%23');
//   $svg: str-replace($svg, '<', '%3C');
//   $svg: str-replace($svg, '>', '%3E');

//   width: $width!important;
//   height: $height-separator!important;
//   background-image: url('data:image/svg+xml,#{$svg}');
//   background-repeat: no-repeat;
//   background-size: 100% 100%;

//   @include media($tablet) {
//     height: $height-separator/2!important;;
//     }
// }
