   var library = [ 
       {
           title:  'The Road Ahead',
           author: 'Bill Gates',
           libraryID: 1254
       },
       {
           title: 'Walter Isaacson',
           author: 'Steve Jobs',
           libraryID: 4264
       },
       {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       }];

    function compare(a,b){
        if(a.libraryID >b.libraryID){
            return 1
        }
        else if(a.libraryID < b.libraryID){
            return -1
        }
        else{
            return 0
        }
    }
let result = library.sort(compare)
console.log(result)
