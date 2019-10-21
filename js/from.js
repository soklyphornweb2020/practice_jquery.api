$(document).ready(function () {
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=cute+baby&image_type=photo&pretty=true";
    $.getJSON(
        url,
        function (data) {
            var result = "";
            data.hits.forEach(element => {
                result +=`
                    <div class="card-body">
                        <img src="${element.largeImageURL}" class="img-fluid">
                    </div>
                    <div class="card-footer">
                    <img src="${element.userImageURL}" class="img-fluid rounded-circle" width="60">
                    ${element.tags}
                    ${element.comments}
                    <i class="material-icons float-right text-danger">favorite</i>
                    </div>
                `;
            });
            $('#card').append(result);
        }
    );
});