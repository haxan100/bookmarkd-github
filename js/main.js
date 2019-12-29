//dari form submit

document.getElementById('myForm').addEventListener('submit',savebookmark);
//save bookmark
function savebookmark(e) {
    //get form valeus
    var siteName = document.getElementById('sitename').value;
    var siteUrl= document.getElementById('url').value;
    var bookmark= {
        name : siteName,
        url :siteUrl
    }



    // // local strorage test

    // localStorage.setItem('test','hello work');
    // console.log(localStorage.getItem ('test'));
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem ('test'));

    // test jika bookmark kosong
    if (localStorage.getItem('bookmark') === null) {

        var bookmarks = [];
        // add to array
        bookmarks.push(bookmark);
        // 
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
    }
    else {
         // fech , dari localstorage
       var bookmarks =  JSON.parse(localStorage.getItem('bookmarks'));

       //add bokmark to array
        bookmarks.push(bookmark);
        // re-set kembali ke localstorage
         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
         // loop 
         for   ( i = 0; i < bookmarks.length; i++ ){
             if (bookmarks[i].url== url) {
                 bookmarks.splice(i,1);
                 
             }

         }

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        fecthBookmarks();



    }



    // console.log(bookmark);
    // console.log(siteName);
    // console.log(siteUrl);
     
    // prevent form submit
    fecthBookmarks();

    e.preventDefault();
}
function deletebookmark(url) {
    //     console.log(url);
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
}
function fecthBookmarks(){
     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //  console.log(bookmarks);

    var bookmarkresult = document.getElementById('bookmarkresult');

    // mmbanung ontimeupdate
    bookmarkresult.innerHTML= '';
    for (var i = 0; i < bookmarks.length; i ++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkresult.innerHTML  += ' <div class="well">' +
                                                            '<h3> ' +name+
                                                            ' <a class = "btn btn-info" target="_blank" href="'+url+'">Kunjungi</a>  '+
                                                            ' <a onclic="deletebookmark(\''+url+'\')" class = "btn btn-danger"  href="#">Hapus</a>  '+

                                                            '</h3>' +
                                                            '</div>';

    }
}