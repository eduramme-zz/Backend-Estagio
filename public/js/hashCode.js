// hash function
// function hashCode(str){
//     var hash = 0;
//     if (str.length == 0) {
//         return hash;
//     }
//     for (var i = 0; i < this.length; i++) {
//         var char = this.charCodeAt(i);
//         hash = ((hash<<5)-hash)+char;
//         hash = hash & hash; // Convert to 32bit integer
//     }
//     return hash;
// }
//
// module.exports = hashCode;

function hashCode(str){
var hash = 0;
if (str.length == 0) return hash;
for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
}
return hash;
}

module.exports = hashCode;
